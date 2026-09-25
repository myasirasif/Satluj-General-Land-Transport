import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Navigation, Phone, Plus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { faqs, siteConfig } from "@/lib/site-config";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

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
        alt="Satluj Transport warehouse and signboard at Ras Al Khor Industrial 1"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12 [&>*]:min-w-0">
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
                  <a href={siteConfig.whatsappAlt.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-brand">
                    <WhatsAppIcon className="h-4 w-4 text-brand" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">WhatsApp</span> {siteConfig.whatsappAlt.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 break-all text-ink hover:text-brand">
                    <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Email</span> {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.altEmail}`} className="flex items-center gap-3 break-all text-ink hover:text-brand">
                    <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Email</span> {siteConfig.altEmail}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-brand">
                    <InstagramIcon className="h-4 w-4 text-brand" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Insta</span> @satlujtrpt
                  </a>
                </li>
                <li>
                  <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-brand">
                    <FacebookIcon className="h-4 w-4 text-brand" />
                    <span className="w-16 text-xs uppercase tracking-widest text-steel">Facebook</span> satluj.transport
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-ink p-6 text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold tracking-wider !text-white">
                <Clock className="h-5 w-5 text-signal" aria-hidden="true" /> Office hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.display.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                    <dt className="text-white/70">{h.days}</dt>
                    <dd className="font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-white/60">Dispatch for booked loads runs 24/7.</p>
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
                  <a
                    href={o.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-brand hover:text-brand-deep"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Get directions
                    <span className="sr-only"> to our {o.label.toLowerCase()}</span>
                  </a>
                </div>
              </div>
            ))}
            <p className="pl-1 text-sm">{siteConfig.poBox}</p>
          </aside>
        </div>
      </section>

      <section className="bg-concrete py-20 md:py-28">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Common questions</h2>
          </div>
          <div className="divide-y divide-steel/15 border-y border-steel/15 lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold uppercase text-ink marker:hidden">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
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
