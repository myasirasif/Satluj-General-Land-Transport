import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon } from "./icons";
import { navLinks, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative bg-ink pb-36 text-white/70 md:pb-0">
      <div className="hazard h-2" aria-hidden="true" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {siteConfig.tagline}. {siteConfig.experience}, with {siteConfig.coverage}.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-signal"
            >
              <InstagramIcon /> @satlujtrpt
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-signal"
            >
              <FacebookIcon /> satluj.transport
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-base tracking-[0.2em] text-white">Offices</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {siteConfig.offices.map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block font-medium text-white">{o.label}</strong>
                  {o.street}, {o.city}, {o.country}
                </span>
              </li>
            ))}
            <li className="pl-7">{siteConfig.poBox}</li>
            <li className="pl-7">
              {siteConfig.hours.display.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: <span className="text-white">{h.time}</span>
                </span>
              ))}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-4">
          <div>
            <h2 className="font-display text-base tracking-[0.2em] text-white">Services</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-base tracking-[0.2em] text-white">Contact</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {siteConfig.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="inline-flex items-center gap-2 hover:text-white">
                    <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 break-all hover:text-white">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between md:pb-24 lg:pb-6 lg:pr-28">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
