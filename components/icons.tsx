import { Container, Globe, Package, Truck, HardHat, CalendarClock } from "lucide-react";
import type { ServiceIconName } from "@/lib/site-config";

export const serviceIcons: Record<ServiceIconName, typeof Truck> = {
  container: Container,
  package: Package,
  truck: Truck,
  tipper: HardHat,
  globe: Globe,
  fleet: CalendarClock,
};

// Brand glyphs are drawn inline (lucide no longer ships brand icons).
export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36A9.4 9.4 0 0 1 2.6 12a9.45 9.45 0 0 1 16.13-6.68A9.4 9.4 0 0 1 21.5 12a9.46 9.46 0 0 1-9.45 9.5m8.04-17.5A11.3 11.3 0 0 0 12.05.7 11.3 11.3 0 0 0 2.25 17.63L.65 23.3l5.8-1.52a11.3 11.3 0 0 0 5.6 1.43A11.3 11.3 0 0 0 23.35 12a11.2 11.2 0 0 0-3.26-8" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Stars({ value, className = "h-4 w-4" }: { value: number; className?: string }) {
  return (
    <span className="flex" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <svg key={i} viewBox="0 0 24 24" className={className}>
            <defs>
              <linearGradient id={`s${i}-${fill}`}>
                <stop offset={`${fill}%`} stopColor="#E8A33D" />
                <stop offset={`${fill}%`} stopColor="currentColor" stopOpacity=".3" />
              </linearGradient>
            </defs>
            <path fill={`url(#s${i}-${fill})`} d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
          </svg>
        );
      })}
    </span>
  );
}
