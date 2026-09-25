"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/site-config";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  pickup: string;
  delivery: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields, string>>;

export function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\+?[\d\s()-]{7,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please choose a service.";
  if (!v.pickup.trim()) e.pickup = "Please enter a pickup location.";
  if (!v.delivery.trim()) e.delivery = "Please enter a delivery location.";
  return e;
}

const input =
  "mt-2 block w-full border-0 border-b-2 border-steel/30 bg-transparent px-0 py-3 text-ink placeholder:text-steel/50 focus:border-brand focus:ring-0 focus:outline-none aria-[invalid=true]:border-brand";

export function QuoteForm() {
  const params = useSearchParams();
  const preset = services.some((s) => s.slug === params.get("service")) ? params.get("service")! : "";
  const [values, setValues] = useState<Fields>({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: preset,
    pickup: "",
    delivery: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="bg-concrete p-10">
        <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-bold">Request received</h3>
        <p className="mt-3 text-lg">Thank you, {values.name.split(" ")[0]}. Our dispatch team will contact you shortly with a quote.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-display font-semibold uppercase tracking-widest text-brand underline-offset-4 hover:underline">
          Send another request
        </button>
      </div>
    );
  }

  const field = (k: keyof Fields, label: string, props: Record<string, unknown> = {}, required = true) => (
    <div>
      <label htmlFor={`f-${k}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={`f-${k}`}
        name={k}
        value={values[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `e-${k}` : undefined}
        className={input}
        {...props}
      />
      {errors[k] && (
        <p id={`e-${k}`} className="mt-1 text-sm text-brand">
          {errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-7 sm:grid-cols-2">
      {field("name", "Name", { autoComplete: "name" })}
      {field("company", "Company", { autoComplete: "organization" }, false)}
      {field("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      <div className="sm:col-span-2">
        <label htmlFor="f-service" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Service<span className="text-brand"> *</span>
        </label>
        <select
          id="f-service"
          name="service"
          value={values.service}
          onChange={set("service")}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "e-service" : undefined}
          className={input}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="e-service" className="mt-1 text-sm text-brand">
            {errors.service}
          </p>
        )}
      </div>
      {field("pickup", "Pickup Location", { placeholder: "e.g. Jebel Ali Port" })}
      {field("delivery", "Delivery Location", { placeholder: "e.g. Riyadh, KSA" })}
      <div className="sm:col-span-2">
        <label htmlFor="f-message" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Message
        </label>
        <textarea id="f-message" name="message" rows={4} value={values.message} onChange={set("message")} className={input} placeholder="Cargo type, weight, dates" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-3 bg-brand px-8 py-4 font-display font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-deep disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === "loading" ? "Sending" : "Send Quote Request"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-brand">
            Something went wrong. Please call or WhatsApp us instead.
          </p>
        )}
      </div>
    </form>
  );
}
