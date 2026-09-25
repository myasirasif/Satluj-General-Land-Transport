"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-white shadow-[0_1px_0_rgb(0_0_0/0.08)]" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteConfig.shortName} home`} className="relative z-10">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 font-display text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                      solid ? "text-ink hover:text-brand" : "text-white hover:text-signal"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="hidden bg-brand px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-deep sm:inline-block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-10 grid h-11 w-11 place-items-center lg:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-20 flex flex-col bg-ink lg:hidden"
          >
            <div className="hazard h-1.5" aria-hidden="true" />
            <nav aria-label="Mobile" className="container-x flex-1 py-10">
              <ul className="space-y-2">
                {navLinks.map((l, i) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex items-baseline gap-4 py-2 font-display text-5xl font-bold uppercase text-white hover:text-brand"
                    >
                      <span className="text-sm text-signal">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-x grid gap-3 pb-10">
              <Link href="/contact#quote" className="bg-brand py-4 text-center font-display font-semibold uppercase tracking-widest text-white">
                Get a Quote
              </Link>
              <a
                href={`tel:${siteConfig.primaryPhone.tel}`}
                className="flex items-center justify-center gap-2 border border-white/25 py-4 font-display uppercase tracking-widest text-white"
              >
                <Phone className="h-4 w-4" /> {siteConfig.primaryPhone.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
