import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// Official logo (public/images/logo.png). Sits on a white tile because the
// artwork has a white background and must read on the dark hero too.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center bg-white p-1 shadow-sm ${className}`}>
      <Image src="/images/logo.png" alt={siteConfig.name} width={150} height={150} priority className="h-14 w-14 sm:h-16 sm:w-16" />
    </span>
  );
}
