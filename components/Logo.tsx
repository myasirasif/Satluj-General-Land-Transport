import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// Official logo (public/images/logo.png). Sits on a white tile because the dark
// line art and text must stay readable over the dark hero too.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center bg-white p-1 shadow-sm ${className}`}>
      <Image src="/images/logo.png" alt={siteConfig.name} width={1024} height={974} sizes="80px" priority className="h-14 w-auto sm:h-16" />
    </span>
  );
}
