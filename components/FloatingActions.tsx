import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <>
      <a
        href={siteConfig.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-ink md:hidden">
        <a
          href={`tel:${siteConfig.primaryPhone.tel}`}
          className="flex h-14 items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-white"
        >
          <Phone className="h-4 w-4 text-signal" aria-hidden="true" /> Call Now
        </a>
        <Link
          href="/contact#quote"
          className="flex h-14 items-center justify-center bg-brand font-display text-sm font-semibold uppercase tracking-widest text-white"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
