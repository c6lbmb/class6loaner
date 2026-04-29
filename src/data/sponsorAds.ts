export type SponsorAd = {
  key: string;
  eyebrow: string;
  headlineTop: string;
  headlineMain: string;
  bodyLines: string[];
  cta: string;
  href: string;
  image: string;
  logo?: string;
  theme: "blue" | "yellow" | "dark" | "orange";
  bg: string;
  accent: string;
  buttonBg: string;
  buttonText: string;
};

export const sponsorAds: SponsorAd[] = [
  {
    key: "test-taker",
    eyebrow: "BorrowMyBike",
    headlineTop: "Need a motorcycle",
    headlineMain: "for your Class 6 road test?",
    bodyLines: ["Road-test-ready bikes", "Meet at the registry"],
    cta: "Find a bike",
    href: "https://borrowmybike.ca/browse?utm_source=class6loaner&utm_medium=sponsor_slot&utm_campaign=bmb_internal&utm_content=test_taker",
    image: "/images/C6L-pic2.png",
    logo: "/images/ads/bmb-logo.png",
    theme: "blue",
    bg: "#0b1f3b",
    accent: "#facc15",
    buttonBg: "#facc15",
    buttonText: "#111827",
  },
  {
    key: "mentor",
    eyebrow: "BorrowMyBike",
    headlineTop: "Earn $100",
    headlineMain: "per road test",
    bodyLines: ["You choose requests", "Short registry meetups"],
    cta: "Become a mentor",
    href: "https://borrowmybike.ca/mentors/start?utm_source=class6loaner&utm_medium=sponsor_slot&utm_campaign=bmb_internal&utm_content=mentor",
    image: "/images/C6L-pic1.png",
    logo: "/images/ads/bmb-logo.png",
    theme: "yellow",
    bg: "#111827",
    accent: "#facc15",
    buttonBg: "#facc15",
    buttonText: "#111827",
  },
  {
    key: "trust",
    eyebrow: "BorrowMyBike",
    headlineTop: "Not a rental",
    headlineMain: "road-test meetups only",
    bodyLines: ["Short scheduled bookings", "Registry handoff only"],
    cta: "See how it works",
    href: "https://class6loaner.com/how-it-works?utm_source=class6loaner&utm_medium=sponsor_slot&utm_campaign=bmb_internal&utm_content=trust",
    image: "/images/hero-bike.jpeg",
    logo: "/images/ads/bmb-logo.png",
    theme: "dark",
    bg: "#0f172a",
    accent: "#38bdf8",
    buttonBg: "#38bdf8",
    buttonText: "#082f49",
  },
  {
    key: "sponsor",
    eyebrow: "Sponsor placement",
    headlineTop: "Your business",
    headlineMain: "could live here",
    bodyLines: ["Reach riders preparing for tests", "Local + national placements"],
    cta: "Ask about this spot",
    href: "mailto:support@borrowmybike.ca?subject=Class6Loaner%20sponsor%20spot",
    image: "/images/C6L-pic3.png",
    theme: "orange",
    bg: "#111827",
    accent: "#facc15",
    buttonBg: "#facc15",
    buttonText: "#111827",
  },
];

export function getSponsorAd(params: {
  placement?: "top" | "mid" | "bottom";
  scope?: "local" | "national";
  slotNumber: number;
}) {
  const { placement = "bottom", scope = "local", slotNumber } = params;

  const placementAdMap: Record<string, string> = {
    top: "test-taker",
    mid: scope === "national" ? "trust" : "mentor",
    bottom: "sponsor",
  };

  const preferredKey = placementAdMap[placement];

  return (
    sponsorAds.find((ad) => ad.key === preferredKey) ??
    sponsorAds[(Math.max(slotNumber, 1) - 1) % sponsorAds.length]
  );
}