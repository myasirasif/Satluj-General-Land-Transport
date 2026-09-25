import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FleetGallery } from "@/components/FleetGallery";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Scania, Volvo and Tata heavy trucks with flatbed trailers, container trailers, tippers and low-bed units, all owned and operated by Satluj Transport.",
  alternates: { canonical: "/fleet" },
  openGraph: { title: `Fleet | ${siteConfig.shortName}`, url: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our fleet"
        title="Owned, not brokered"
        intro={`${siteConfig.fleetBrands.join(", ")} heavy trucks, with flatbed trailers, container trailers, tippers and low-bed units.`}
        image="/images/fleet-hero.jpg"
        alt="Row of Satluj Transport trucks at the yard"
      >
        <ul className="mt-10 flex flex-wrap gap-8">
          {siteConfig.fleetBrands.map((b) => (
            <li key={b} className="font-display text-3xl font-bold uppercase text-white/90">
              {b}
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="py-20 md:py-28">
        <div className="container-x">
          <h2 className="sr-only">Fleet gallery</h2>
          <FleetGallery />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
