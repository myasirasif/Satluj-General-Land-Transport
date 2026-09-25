import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact and Quote",
  description: `Request a truck transport quote from ${siteConfig.shortName}. Call ${siteConfig.phones[0].display}, WhatsApp ${siteConfig.whatsapp.display} or email ${siteConfig.email}.`,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact | ${siteConfig.shortName}`, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote today"
        intro={`${siteConfig.subLine}. Dispatch is available 24/7.`}
        image="/images/contact-hero.jpg"
        alt="Satluj Transport dispatch office in Dubai"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div id="quote" className="scroll-mt-28 lg:col-span-7">
            <p className="eyebrow">Quote request</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Tell us about your load</h2>
            <div className="mt-10">
              <Suspense fallback={<div className="h-[560px] bg-concrete" aria-hidden="true" />}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-5" aria-label="Contact details">
            <div className="grid grid-cols-2 gap-3">
              <a href={siteConfig.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 bg-[#1f8f4e] p-5 text-white hover:bg-[#177540]">
                <WhatsAppIcon className="h-7 w-7" />
                <span className="font-display text-lg uppercase tracking-wider">WhatsApp</span>
                <span className="text-sm text-white/85">{siteConfig.whatsapp.display}</span>
              </a>
              <a href={`tel:${siteConfig.primaryPhone.tel}`} className="flex flex-col gap-3 bg-ink p-5 text-white hover:bg-brand">
                <Phone className="h-7 w-7" aria-hidden="true" />
                <span className="font-display text-lg uppercase tracking-wider">Call Mobile</span>
                <span className="text-sm text-white/85">{siteConfig.primaryPhone.display}</span>
              </a>
            </div>

            <div className="bg-concrete p-6">
              <h3 className="text-lg font-semibold tracking-wider">Phone and email</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-3 text-ink hover:text-brand">
                      <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                      <span className="w-16 text-xs uppercase tracking-widest text-steel">{p.label}</span> {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-ink hover:text-brand">
                    <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Email</span> {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-brand">
                    <InstagramIcon className="h-4 w-4 text-brand" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Insta</span> @satlujtrpt
                  </a>
                </li>
              </ul>
            </div>

            {siteConfig.offices.map((o, i) => (
              <div key={o.label} className={`flex gap-4 border-l-4 p-6 ${i === 0 ? "border-brand bg-white shadow-[0_12px_32px_-20px_rgb(18_20_23/0.4)]" : "border-steel/20 bg-white"}`}>
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold tracking-wider">{o.label}</h3>
                  <p className="mt-1">
                    {o.street}
                    <br />
                    {o.city}, {o.country}
                  </p>
                </div>
              </div>
            ))}
            <p className="pl-1 text-sm">{siteConfig.poBox}</p>
          </aside>
        </div>
      </section>

      <section aria-label="Head office map" className="relative h-[420px] bg-concrete">
        <iframe
          title="Map of Satluj Transport head office, International City, Dubai"
          src={siteConfig.mapEmbed}
          className="h-full w-full border-0 grayscale-[40%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
