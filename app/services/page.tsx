import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { serviceIcons } from "@/components/icons";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Container transport, loose cargo, flatbed and low-bed, tipper services, GCC cross-border freight and dedicated fleet hire from Dubai.",
  alternates: { canonical: "/services" },
  openGraph: { title: `Services | ${siteConfig.shortName}`, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every load, the right truck"
        intro={`Six services, one owned fleet. ${siteConfig.coverage}.`}
        image="/images/services-hero.jpg"
        alt="Container truck leaving Jebel Ali port"
      >
        <nav aria-label="Services on this page" className="mt-10 flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="border border-white/25 px-4 py-2 text-sm text-white hover:border-signal hover:text-signal">
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="py-16 md:py-24">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className="scroll-mt-24 py-12 md:py-16">
              <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal x={flip ? 30 : -30} className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-concrete">
                    <Image src={s.image} alt={`${s.title} by Satluj Transport`} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                  </div>
                  <span
                    className={`absolute -bottom-6 font-display text-8xl font-bold leading-none text-brand md:text-9xl ${flip ? "-left-2 md:-left-6" : "-right-2 md:-right-6"}`}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                </Reveal>
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <Icon className="h-10 w-10 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <h2 id={`${s.slug}-title`} className="mt-5 text-4xl font-bold md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed">{s.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-ink">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?service=${s.slug}#quote`}
                    className="group mt-8 inline-flex items-center gap-3 bg-ink px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand"
                  >
                    Request a Quote for this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
