import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { MotionProvider } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Truck Transport in Dubai, UAE and GCC`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: `${siteConfig.tagline}. ${siteConfig.experience}. Container, flatbed, low-bed, tipper and GCC cross-border truck transport. ${siteConfig.subLine}.`,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_AE",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#B01E24" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  email: siteConfig.email,
  telephone: siteConfig.phones[0].tel,
  sameAs: [siteConfig.instagram],
  areaServed: siteConfig.gccCountries.map((c) => c.name),
  knowsLanguage: siteConfig.languages,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.offices[0].street,
    addressLocality: "Dubai",
    postOfficeBoxNumber: "31503",
    addressCountry: "AE",
  },
  location: siteConfig.offices.map((o) => ({
    "@type": "Place",
    name: o.label,
    address: { "@type": "PostalAddress", streetAddress: o.street, addressLocality: o.city, addressCountry: "AE" },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.value,
    reviewCount: siteConfig.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
