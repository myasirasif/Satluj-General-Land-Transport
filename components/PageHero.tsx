import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="clip-diag-b relative overflow-hidden bg-ink pb-28 pt-40 md:pb-36 md:pt-48">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-ink/80 to-ink/40" aria-hidden="true" />
      <div className="hazard-soft absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <p className="eyebrow !text-signal">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold !text-white sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${light ? "!text-signal" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-bold sm:text-5xl ${light ? "!text-white" : ""}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg ${light ? "text-white/75" : ""}`}>{intro}</p>}
    </div>
  );
}
