import { NextResponse } from "next/server";
import { services, siteConfig } from "@/lib/site-config";

const required = ["name", "phone", "email", "service", "pickup", "delivery"] as const;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = Object.fromEntries(
    ["name", "company", "phone", "email", "service", "pickup", "delivery", "message"].map((k) => [
      k,
      String(body[k] ?? "").trim().slice(0, 2000),
    ]),
  );

  if (required.some((k) => !data[k]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  const serviceTitle = services.find((s) => s.slug === data.service)?.title ?? data.service;

  // TODO: Send the email. Add RESEND_API_KEY (or SMTP credentials) to the
  // environment and replace the log below, e.g. with Resend:
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({ from: "website@satlujtransport.com", to: siteConfig.email, reply_to: data.email, subject, text }),
  //   });
  const subject = `Quote request: ${serviceTitle} (${data.pickup} to ${data.delivery})`;
  console.info("[contact]", { to: siteConfig.email, subject, ...data });

  return NextResponse.json({ ok: true });
}
