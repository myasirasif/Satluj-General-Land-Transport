import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `A family-run Dubai truck transport company, ${siteConfig.experience.toLowerCase()}, grown from a few trucks to a full owned fleet.`,
  alternates: { canonical: "/about" },
  openGraph: { title: `About ${siteConfig.shortName}`, url: "/about" },
};

const approach = [
  { title: "Own it", text: "We run our own trucks and employ our own drivers. No subcontracting, no brokers." },
  { title: "Price it fairly", text: "Clear, affordable quotes so clients know the cost before the truck rolls." },
  { title: "Answer the phone", text: "Dispatch runs around the clock, in English, Hindi, Urdu and Punjabi." },
];

// Milestones are described by stage rather than year; add exact years here once confirmed.
const milestones = [
  { stage: "The start", text: "A family business begins with a few trucks serving Dubai." },
  { stage: "Growing the fleet", text: "Scania, Volvo and Tata heavy trucks join, with flatbed and container trailers." },
  { stage: "Heavier work", text: "Tippers and low-bed units added for construction and project cargo." },
  { stage: "Across the GCC", text: "Cross-border freight to Saudi Arabia, Oman, Qatar, Kuwait and Bahrain." },
  { stage: "Today", text: "Over 10 years in Dubai, three locations and a full owned fleet." },
];

const teamSlots = [
  { src: "/images/team-01.jpg", alt: "Satluj Transport team at the Jebel Ali yard" },
  { src: "/images/team-02.jpg", alt: "Satluj Transport drivers with the fleet" },
  { src: "/images/team-03.jpg", alt: "Satluj Transport dispatch and office team" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A family business <br className="hidden sm:block" />
            built on the road
          </>
        }
        intro={`${siteConfig.experience}. What began with a few trucks is now a full owned fleet covering the UAE and the GCC.`}
        image="/images/about-hero.jpg"
        alt="Satluj Transport truck on a Dubai highway"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Who we are" title="Dubai transport, run like a family" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                {siteConfig.name} is a family-run truck transport company based in International City, Dubai, with a yard in
                Jabal Ali Industrial First and a branch in Ras Al Khor Industrial 1.
              </p>
              <p>
                For more than a decade we have moved containers, building materials, machinery and loose cargo for clients across the
                UAE. We grew one truck at a time, and today every load travels on a truck we own, driven by a driver we employ.
              </p>
              <p>
                Our team speaks {siteConfig.languages.slice(0, -1).join(", ")} and {siteConfig.languages.at(-1)}, so clients and
                drivers are always on the same page.
              </p>
            </div>
          </div>
          <Reveal className="relative lg:col-span-5 lg:col-start-8" x={30}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/about-story.jpg" alt="The Satluj fleet parked at the yard" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="hazard absolute -left-4 bottom-10 h-24 w-3" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="bg-concrete py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title="Three rules we drive by" />
          <ol className="mt-14 grid gap-px bg-steel/15 md:grid-cols-3">
            {approach.map((a, i) => (
              <li key={a.title} className="bg-concrete p-8 md:p-10">
                <span className="font-display text-7xl font-bold text-brand/15">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-semibold">{a.title}</h3>
                <p className="mt-3">{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading light eyebrow="Milestones" title="From a few trucks to a full fleet" />
          </div>
          <ol className="relative border-l-2 border-brand lg:col-span-7 lg:col-start-6">
            {milestones.map((m, i) => (
              <li key={m.stage} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rotate-45 bg-signal" aria-hidden="true" />
                <Reveal delay={i * 0.06}>
                  <h3 className="text-2xl font-semibold !text-white">{m.stage}</h3>
                  <p className="mt-2 text-white/70">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="The team" title="The people behind the wheel" intro="Drivers, dispatchers and yard crew who keep the fleet moving every day." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {teamSlots.map((t, i) => (
              <li key={t.src} className={i === 0 ? "sm:col-span-2 lg:col-span-6 lg:row-span-2" : "lg:col-span-6"}>
                <div className={`relative overflow-hidden bg-concrete ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[16/9]"}`}>
                  <Image src={t.src} alt={t.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
