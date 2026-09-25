import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CtaBand() {
  return (
    <section className="clip-diag-t relative overflow-hidden bg-brand pb-20 pt-[calc(5vw+4rem)]">
      <div className="hazard-soft absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-4xl font-bold !text-white sm:text-5xl md:text-6xl">Have a load to move?</h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">{siteConfig.subLine}. Tell us the pickup, drop-off and cargo, and we will come back with a clear price.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact#quote" className="bg-ink px-7 py-4 font-display font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-black">
            Request a Quote
          </Link>
          <a href={siteConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="border border-white/60 px-7 py-4 font-display font-semibold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-brand">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
