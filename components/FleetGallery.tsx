"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { fleet, type FleetCategory } from "@/lib/site-config";

const filters: ("All" | FleetCategory)[] = ["All", "Flatbed", "Container", "Tipper", "Low-Bed"];

export function FleetGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const items = active === "All" ? fleet : fleet.filter((f) => f.category === active);

  return (
    <LayoutGroup>
      <div role="group" aria-label="Filter fleet by type" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`relative px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
              active === f ? "text-white" : "bg-concrete text-ink hover:text-brand"
            }`}
          >
            {active === f && <motion.span layoutId="fleet-pill" className="absolute inset-0 bg-brand" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {items.length} vehicles
      </p>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((t) => (
            <motion.li
              key={t.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="group bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-concrete">
                <Image src={t.image} alt={`${t.type} from the Satluj fleet`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-0 top-4 bg-brand px-3 py-1 font-display text-xs uppercase tracking-widest text-white">{t.category}</span>
              </div>
              <div className="border-x border-b border-concrete p-6">
                <h3 className="text-2xl font-semibold">{t.type}</h3>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  <dt className="font-semibold uppercase tracking-widest text-ink">Capacity</dt>
                  <dd>{t.capacity}</dd>
                  <dt className="font-semibold uppercase tracking-widest text-ink">Use</dt>
                  <dd>{t.use}</dd>
                </dl>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
