import { siteConfig } from "@/lib/site-config";

type Props = { tone?: "light" | "dark"; className?: string };

// Diamond emblem with a truck silhouette, recreated as inline SVG.
export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="4" transform="rotate(45 32 32)" fill="#B01E24" />
      <rect x="13" y="13" width="38" height="38" rx="2" transform="rotate(45 32 32)" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".55" />
      <path d="M15 36V26h19v10z" fill="#fff" />
      <path d="M35 29h7l5 5v2H35z" fill="#fff" />
      <path d="M37 30.5h4.2l2.8 3H37z" fill="#7A1418" />
      <circle cx="21" cy="38.5" r="2.6" fill="#fff" stroke="#7A1418" strokeWidth="1.2" />
      <circle cx="41" cy="38.5" r="2.6" fill="#fff" stroke="#7A1418" strokeWidth="1.2" />
    </svg>
  );
}

export function Logo({ tone = "dark", className = "" }: Props) {
  const sub = tone === "light" ? "text-white/80" : "text-steel";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-bold tracking-wide text-brand">SATLUJ</span>
        <span className={`text-[0.6rem] font-medium tracking-wider ${sub}`}>
          General Land Transport L.L.C
        </span>
        <span lang="ar" dir="rtl" className={`mt-0.5 text-[0.62rem] ${sub}`}>
          {siteConfig.arabicName}
        </span>
      </span>
    </span>
  );
}
