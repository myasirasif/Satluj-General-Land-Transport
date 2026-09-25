// Single source of truth for all company data. Edit here, the whole site updates.

export const siteConfig = {
  name: "Satluj General Land Transport L.L.C",
  shortName: "Satluj Transport",
  arabicName: "ساتلج للنقل البري العام ذ.م.م",
  tagline: "Driving Trust, Delivering Reliability",
  subLine: "Contact us for the most affordable transportation services",
  experience: "Operating in Dubai for over 10 years",
  coverage: "Pan UAE and full GCC coverage",
  url: "https://satlujtransport.com",
  domain: "satlujtransport.com",
  rating: { value: 4.5, count: 15, source: "Google" },
  languages: ["English", "Hindi", "Urdu", "Punjabi"],

  offices: [
    {
      label: "Head Office",
      street: "International City, X09 England Cluster",
      city: "Dubai",
      country: "UAE",
      directions: "https://www.google.com/maps/dir/?api=1&destination=England+Cluster+X09+International+City+Dubai",
    },
    {
      label: "Yard",
      street: "Jabal Ali Industrial First, Warehouse S03",
      city: "Dubai",
      country: "UAE",
      directions: "https://www.google.com/maps/dir/?api=1&destination=25.005615,55.117037",
    },
    {
      label: "Branch",
      street: "Ras Al Khor Industrial 1, near Al Hezam Al Akhtar Vehicle Maintenance",
      city: "Dubai",
      country: "UAE",
      directions: "https://www.google.com/maps/dir/?api=1&destination=25.171122,55.345299",
    },
  ],
  poBox: "P.O. Box 31503, Dubai, UAE",

  phones: [
    { label: "Phone", display: "+971 4 564 2288", tel: "+97145642288" },
    { label: "Phone", display: "+971 4 876 8454", tel: "+97148768454" },
    { label: "Mobile", display: "+971 50 453 0759", tel: "+971504530759" },
    { label: "Mobile", display: "+971 52 904 5530", tel: "+971529045530" },
    { label: "Branch", display: "+971 4 333 4513", tel: "+97143334513" },
    { label: "Yard", display: "+971 4 333 2809", tel: "+97143332809" },
  ],
  primaryPhone: { display: "+971 50 453 0759", tel: "+971504530759" },
  whatsapp: {
    display: "+971 50 453 0759",
    link: "https://wa.me/971504530759?text=Hello%20Satluj%20Transport%2C%20I%20would%20like%20a%20quote.",
  },
  // Second WhatsApp line listed on 2GIS.
  whatsappAlt: {
    display: "+971 52 904 5530",
    link: "https://wa.me/971529045530?text=Hello%20Satluj%20Transport%2C%20I%20would%20like%20a%20quote.",
  },
  email: "satlujtransportdubai@gmail.com",
  altEmail: "satlujtransport@hotmail.com",
  instagram: "https://www.instagram.com/satlujtrpt/",
  facebook: "https://facebook.com/satluj.transport",
  // Source: HiDubai business listing.
  hours: {
    display: [
      { days: "Monday to Saturday", time: "08:00 to 20:00" },
      { days: "Sunday", time: "Closed" },
    ],
    schema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" },
  },
  // Sources: HiDubai (branch) and 2GIS (yard).
  branchGeo: { lat: 25.171122, lng: 55.345299 },
  yardGeo: { lat: 25.005615, lng: 55.117037 },
  mapEmbed:
    "https://www.google.com/maps?q=England+Cluster+X09+International+City+Dubai&output=embed",

  fleetBrands: ["Scania", "Volvo", "Tata"],
  gccCountries: [
    { name: "United Arab Emirates", code: "UAE", home: true },
    { name: "Saudi Arabia", code: "KSA" },
    { name: "Oman", code: "OMN" },
    { name: "Qatar", code: "QAT" },
    { name: "Kuwait", code: "KWT" },
    { name: "Bahrain", code: "BHR" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceIconName =
  | "container"
  | "package"
  | "truck"
  | "tipper"
  | "globe"
  | "fleet";

export const services: {
  slug: string;
  title: string;
  icon: ServiceIconName;
  summary: string;
  image: string;
  points: string[];
}[] = [
  {
    slug: "container-transport",
    title: "Container Transport",
    icon: "container",
    summary:
      "20ft and 40ft container haulage across UAE and GCC, port to door, Jebel Ali and Port Rashid.",
    image: "/images/service-container.jpg",
    points: [
      "20ft and 40ft container haulage",
      "Port to door from Jebel Ali and Port Rashid",
      "Coverage across the UAE and GCC",
    ],
  },
  {
    slug: "loose-cargo",
    title: "Loose Cargo Transport",
    icon: "package",
    summary:
      "Palletised and loose freight, part loads and full truck loads.",
    image: "/images/service-loose-cargo.jpg",
    points: [
      "Palletised and loose freight",
      "Part loads and full truck loads",
      "Pickup and delivery across the UAE",
    ],
  },
  {
    slug: "flatbed-low-bed",
    title: "Flatbed and Low-Bed",
    icon: "truck",
    summary:
      "Building materials, machinery, oversized and project cargo.",
    image: "/images/service-flatbed-lowbed.jpg",
    points: [
      "Building materials",
      "Machinery and heavy equipment",
      "Oversized and project cargo",
    ],
  },
  {
    slug: "tipper-services",
    title: "Tipper Services",
    icon: "tipper",
    summary:
      "Sand, aggregate and construction material haulage for sites across Dubai.",
    image: "/images/service-tipper.jpg",
    points: [
      "Sand and aggregate haulage",
      "Construction material delivery",
      "Serving sites across Dubai",
    ],
  },
  {
    slug: "gcc-cross-border",
    title: "GCC Cross-Border Freight",
    icon: "globe",
    summary:
      "Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, with documentation handled.",
    image: "/images/service-gcc.jpg",
    points: [
      "Saudi Arabia, Oman, Qatar, Kuwait and Bahrain",
      "Documentation handled",
      "Experienced GCC drivers",
    ],
  },
  {
    slug: "dedicated-fleet-hire",
    title: "Dedicated Fleet Hire",
    icon: "fleet",
    summary:
      "Trucks and drivers on monthly contract for construction and industrial clients.",
    image: "/images/service-fleet-hire.jpg",
    points: [
      "Trucks and drivers on monthly contract",
      "For construction and industrial clients",
      "Own fleet, no brokers",
    ],
  },
];

export type FleetCategory = "Flatbed" | "Container" | "Tipper" | "Low-Bed";

// Capacities are typical industry figures for these unit types; confirm with
// the dispatch team before publishing if exact numbers differ.
export const fleet: {
  id: string;
  type: string;
  category: FleetCategory;
  capacity: string;
  use: string;
  image: string;
}[] = [
  {
    id: "flatbed-01",
    type: "Flatbed Trailer",
    category: "Flatbed",
    capacity: "Up to 25 tons",
    use: "Building materials, steel and palletised loads",
    image: "/images/truck-flatbed-01.jpg",
  },
  {
    id: "flatbed-02",
    type: "Flatbed Trailer, Heavy Tractor",
    category: "Flatbed",
    capacity: "Up to 25 tons",
    use: "Machinery and project cargo",
    image: "/images/truck-flatbed-02.jpg",
  },
  {
    id: "container-01",
    type: "Container Trailer 20ft",
    category: "Container",
    capacity: "1 x 20ft container",
    use: "Port to door from Jebel Ali and Port Rashid",
    image: "/images/truck-container-01.jpg",
  },
  {
    id: "container-02",
    type: "Container Trailer 40ft",
    category: "Container",
    capacity: "1 x 40ft or 2 x 20ft",
    use: "UAE and GCC container haulage",
    image: "/images/truck-container-02.jpg",
  },
  {
    id: "tipper-01",
    type: "Tipper Truck",
    category: "Tipper",
    capacity: "Approx. 20 cubic metres",
    use: "Sand and aggregate for Dubai sites",
    image: "/images/truck-tipper-01.jpg",
  },
  {
    id: "tipper-02",
    type: "Tipper Truck",
    category: "Tipper",
    capacity: "Approx. 20 cubic metres",
    use: "Construction material haulage",
    image: "/images/truck-tipper-02.jpg",
  },
  {
    id: "lowbed-01",
    type: "Low-Bed Trailer",
    category: "Low-Bed",
    capacity: "Up to 60 tons",
    use: "Heavy machinery and oversized cargo",
    image: "/images/truck-lowbed-01.jpg",
  },
  {
    id: "lowbed-02",
    type: "Low-Bed Trailer",
    category: "Low-Bed",
    capacity: "Up to 60 tons",
    use: "Project cargo and plant equipment",
    image: "/images/truck-lowbed-02.jpg",
  },
];

export const reasons = [
  {
    title: "Own fleet, no brokers",
    text: "Every load moves on our own Scania, Volvo and Tata trucks. You deal directly with the company that drives your cargo.",
  },
  {
    title: "Experienced GCC drivers",
    text: "Drivers who know UAE roads and GCC border crossings, and who speak English, Hindi, Urdu and Punjabi.",
  },
  {
    title: "Transparent pricing",
    text: "Clear, affordable quotes up front. No hidden extras once the truck is on the road.",
  },
  {
    title: "Round-the-clock dispatch",
    text: "Our dispatch team is available 24/7 to plan, track and reschedule loads when you need it.",
  },
];

// Generic themes drawn from Google reviews. No names are attributed.
export const testimonials = [
  {
    theme: "Reliability",
    quote:
      "Reliable service every time. The trucks arrive as planned and the cargo is handled with care.",
  },
  {
    theme: "Punctuality",
    quote:
      "Punctual drivers and quick response from dispatch. Deliveries to our site are always on schedule.",
  },
  {
    theme: "Fair pricing",
    quote:
      "Fair and affordable pricing with no surprises. Easy to deal with and very professional.",
  },
];

export const faqs = [
  {
    q: "Where is Satluj Transport located?",
    a: "Our head office is in International City (X09 England Cluster), our yard is in Jabal Ali Industrial First (Warehouse S03), and our branch is in Ras Al Khor Industrial 1, Dubai.",
  },
  {
    q: "What are your working hours?",
    a: "The office is open Monday to Saturday, 08:00 to 20:00, and closed on Sunday. Dispatch for booked loads runs 24/7.",
  },
  {
    q: "What does Satluj Transport specialise in?",
    a: "Road cargo: container haulage, loose cargo, flatbed and low-bed transport, tipper services, GCC cross-border freight and dedicated fleet hire.",
  },
  {
    q: "Do you deliver outside the UAE?",
    a: "Yes. We run cross-border freight to Saudi Arabia, Oman, Qatar, Kuwait and Bahrain, with documentation handled.",
  },
  {
    q: "How can I contact you for a quote?",
    a: "Call or WhatsApp +971 50 453 0759, call the office on +971 4 564 2288, email satlujtransportdubai@gmail.com, or send the quote form on this page.",
  },
];
