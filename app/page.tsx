import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Quote } from "lucide-react";
import { CountUp, Reveal } from "@/components/motion";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/PageHero";
import { serviceIcons, Stars } from "@/components/icons";
import { fleet, reasons, services, siteConfig, testimonials } from "@/lib/site-config";

const stats = [
  { to: 10, suffix: "+", label: "Years in Dubai" },
  { to: 6, label: "GCC Countries" },
  { to: 4.5, decimals: 1, label: "Google Rating" },
  { to: 24, suffix: "/7", label: "Dispatch" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
        <Image
          src="/images/hero-fleet.jpg"
          alt="Satluj Transport heavy trucks lined up at the Jebel Ali yard"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/95 via-brand/45 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden="true" />
        <div
          className="absolute -right-24 top-1/4 hidden h-[60vh] w-[60vh] rotate-45 border-[3px] border-white/10 lg:block"
          aria-hidden="true"
        />

        <div className="container-x relative pb-10 pt-36">
          <Reveal>
            <p className="eyebrow !text-signal">{siteConfig.name}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.9] !text-white">
              Driving Trust,
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#fff]">Delivering</span> Reliability
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg text-white/85 md:text-xl">
                {siteConfig.coverage}. Container, flatbed, tipper and cross-border trucking from Dubai.{" "}
                {siteConfig.subLine}.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact#quote"
                  className="group inline-flex items-center gap-3 bg-brand px-7 py-4 font-display font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-deep"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${siteConfig.primaryPhone.tel}`}
                  className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 font-display font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-signal hover:text-signal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative border-t border-white/15 bg-ink/70 backdrop-blur">
          <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-sm text-white/80">
            <span className="flex items-center gap-2 text-white">
              <Stars value={siteConfig.rating.value} />
              <strong className="font-display text-lg">{siteConfig.rating.value}</strong>
              <span className="sr-only">out of 5 stars</span>
            </span>
            <span>{siteConfig.rating.count} Google reviews</span>
            <span className="hidden sm:inline">{siteConfig.experience}</span>
            <span className="hidden md:inline">{siteConfig.fleetBrands.join(", ")} fleet</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Company at a glance" className="relative bg-white">
        <div className="hazard h-1.5" aria-hidden="true" />
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-concrete py-10 pl-2 sm:pl-6 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-display text-6xl font-bold text-ink md:text-7xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium uppercase tracking-widest">
                <span className="h-0.5 w-6 bg-signal" aria-hidden="true" />
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-concrete py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we haul"
              title={
                <>
                  Six ways we move <span className="text-brand">your cargo</span>
                </>
              }
            />
            <Link href="/services" className="group inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-ink hover:text-brand">
              All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <li key={s.slug} className={i % 3 === 1 ? "lg:translate-y-10" : ""}>
                  <Reveal delay={(i % 3) * 0.08} className="h-full">
                    <Link
                      href={`/services#${s.slug}`}
                      className="group relative flex h-full flex-col bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgb(18_20_23/0.35)]"
                    >
                      <span className="absolute right-6 top-5 font-display text-5xl font-bold text-concrete" aria-hidden="true">
                        0{i + 1}
                      </span>
                      <Icon className="h-10 w-10 text-brand" strokeWidth={1.5} aria-hidden="true" />
                      <h3 className="mt-8 text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-3 flex-1 leading-relaxed">{s.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink group-hover:text-brand">
                        Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Why Satluj */}
      <section className="clip-diag-t relative -mt-[5vw] bg-ink pb-24 pt-[calc(5vw+6rem)] md:pb-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative lg:col-span-5" x={-30}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/why-satluj.jpg"
                alt="Satluj driver checking a load before departure"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-brand p-6 sm:-right-6">
              <p className="font-display text-5xl font-bold text-white">10+</p>
              <p className="text-xs uppercase tracking-widest text-white/80">Years on UAE roads</p>
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              light
              eyebrow="Why Satluj"
              title="Our trucks. Our drivers. Your schedule."
              intro="A family-run Dubai transport company that owns every truck it sends out."
            />
            <ol className="mt-12 space-y-8">
              {reasons.map((r, i) => (
                <li key={r.title}>
                  <Reveal delay={i * 0.08} className="flex gap-6">
                    <span className="font-display text-4xl font-bold text-brand">0{i + 1}</span>
                    <div className="border-t border-white/15 pt-3">
                      <h3 className="text-xl font-semibold !text-white">{r.title}</h3>
                      <p className="mt-2 text-white/70">{r.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Fleet preview */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="The fleet" title="Scania, Volvo and Tata heavy trucks" />
          <Link href="/fleet" className="group inline-flex items-center gap-2 font-display font-semibold uppercase tracking-widest text-ink hover:text-brand">
            View full fleet <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]" tabIndex={0} aria-label="Fleet preview, scroll horizontally">
          {fleet.filter((_, i) => i % 2 === 0).concat(fleet[1]).map((t) => (
            <li key={t.id} className="w-[78vw] shrink-0 snap-start sm:w-[340px]">
              <div className="group relative aspect-[4/3] overflow-hidden bg-concrete">
                <Image src={t.image} alt={`${t.type} from the Satluj fleet`} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-0 top-4 bg-brand px-3 py-1 font-display text-xs uppercase tracking-widest text-white">{t.category}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t.type}</h3>
              <p className="text-sm">{t.capacity}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-concrete py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Coverage"
              title={
                <>
                  Pan UAE. <span className="text-brand">Full GCC.</span>
                </>
              }
              intro="From Jebel Ali and Port Rashid to sites and warehouses across the region, with cross-border documentation handled."
            />
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {siteConfig.gccCountries.map((c, i) => (
              <li key={c.code}>
                <Reveal delay={i * 0.06}>
                  <div
                    className={`relative flex aspect-square flex-col justify-between p-5 ${
                      "home" in c ? "bg-brand text-white" : "bg-white text-ink"
                    }`}
                  >
                    <span className="font-display text-5xl font-bold md:text-6xl">{c.code}</span>
                    <span className={`text-sm ${"home" in c ? "text-white/85" : ""}`}>
                      {c.name}
                      {"home" in c && <span className="mt-1 block text-xs uppercase tracking-widest text-signal">Home base, Dubai</span>}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What clients say" title="Rated 4.5 on Google" />
            <p className="flex items-center gap-3 text-ink">
              <Stars value={siteConfig.rating.value} className="h-5 w-5" />
              <span>
                {siteConfig.rating.value} from {siteConfig.rating.count} Google reviews
              </span>
            </p>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={t.theme}>
                <Reveal delay={i * 0.1} className="h-full">
                  <figure className="flex h-full flex-col border-l-4 border-brand bg-concrete p-8">
                    <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand">{t.theme}</p>
                    <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">{t.quote}</blockquote>
                    <figcaption className="mt-6 text-sm">Google Review, Dubai</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
