export type City = {
  slug: string;
  name: string;
  province: string; // e.g. "AB"
  country: "CA";
  // optional for later: ad markets / pricing tiers
  tier?: 1 | 2 | 3;
};

export const CITIES: City[] = [
  // Alberta
  { slug: "calgary", name: "Calgary", province: "AB", country: "CA", tier: 1 },
  { slug: "edmonton", name: "Edmonton", province: "AB", country: "CA", tier: 1 },
  { slug: "red-deer", name: "Red Deer", province: "AB", country: "CA", tier: 2 },
  { slug: "lethbridge", name: "Lethbridge", province: "AB", country: "CA", tier: 2 },
  { slug: "medicine-hat", name: "Medicine Hat", province: "AB", country: "CA", tier: 2 },
  { slug: "grand-prairie", name: "Grande Prairie", province: "AB", country: "CA", tier: 2 },
  { slug: "fort-mcmurray", name: "Fort McMurray", province: "AB", country: "CA", tier: 2 },
  { slug: "airdrie", name: "Airdrie", province: "AB", country: "CA", tier: 2 },
  { slug: "spruce-grove", name: "Spruce Grove", province: "AB", country: "CA", tier: 3 },
  { slug: "st-albert", name: "St. Albert", province: "AB", country: "CA", tier: 3 },
  { slug: "sherwood-park", name: "Sherwood Park", province: "AB", country: "CA", tier: 3 },

  // British Columbia
  { slug: "vancouver", name: "Vancouver", province: "BC", country: "CA", tier: 1 },
  { slug: "surrey", name: "Surrey", province: "BC", country: "CA", tier: 1 },
  { slug: "burnaby", name: "Burnaby", province: "BC", country: "CA", tier: 2 },
  { slug: "richmond-bc", name: "Richmond", province: "BC", country: "CA", tier: 2 },
  { slug: "coquitlam", name: "Coquitlam", province: "BC", country: "CA", tier: 2 },
  { slug: "langley", name: "Langley", province: "BC", country: "CA", tier: 2 },
  { slug: "abbotsford", name: "Abbotsford", province: "BC", country: "CA", tier: 2 },
  { slug: "kelowna", name: "Kelowna", province: "BC", country: "CA", tier: 2 },
  { slug: "victoria", name: "Victoria", province: "BC", country: "CA", tier: 2 },
  { slug: "nanaimo", name: "Nanaimo", province: "BC", country: "CA", tier: 3 },
  { slug: "kamloops", name: "Kamloops", province: "BC", country: "CA", tier: 3 },
  { slug: "prince-george", name: "Prince George", province: "BC", country: "CA", tier: 3 },

  // Manitoba
  { slug: "winnipeg", name: "Winnipeg", province: "MB", country: "CA", tier: 1 },

  // Ontario (focus: big + ad markets)
  { slug: "toronto", name: "Toronto", province: "ON", country: "CA", tier: 1 },
  { slug: "mississauga", name: "Mississauga", province: "ON", country: "CA", tier: 1 },
  { slug: "brampton", name: "Brampton", province: "ON", country: "CA", tier: 1 },
  { slug: "hamilton", name: "Hamilton", province: "ON", country: "CA", tier: 1 },
  { slug: "ottawa", name: "Ottawa", province: "ON", country: "CA", tier: 1 },
  { slug: "london-on", name: "London", province: "ON", country: "CA", tier: 2 },
  { slug: "kitchener", name: "Kitchener", province: "ON", country: "CA", tier: 2 },
  { slug: "waterloo", name: "Waterloo", province: "ON", country: "CA", tier: 2 },
  { slug: "cambridge-on", name: "Cambridge", province: "ON", country: "CA", tier: 2 },
  { slug: "guelph", name: "Guelph", province: "ON", country: "CA", tier: 2 },
  { slug: "windsor", name: "Windsor", province: "ON", country: "CA", tier: 2 },
  { slug: "kingston", name: "Kingston", province: "ON", country: "CA", tier: 3 },
  { slug: "barrie", name: "Barrie", province: "ON", country: "CA", tier: 3 },
  { slug: "oshawa", name: "Oshawa", province: "ON", country: "CA", tier: 3 },
  { slug: "st-catharines", name: "St. Catharines", province: "ON", country: "CA", tier: 3 },

  // Quebec
  { slug: "montreal", name: "Montréal", province: "QC", country: "CA", tier: 1 },
  { slug: "laval", name: "Laval", province: "QC", country: "CA", tier: 2 },
  { slug: "quebec-city", name: "Québec City", province: "QC", country: "CA", tier: 2 },
  { slug: "gatineau", name: "Gatineau", province: "QC", country: "CA", tier: 2 },
  { slug: "sherbrooke-qc", name: "Sherbrooke", province: "QC", country: "CA", tier: 3 },
  { slug: "trois-rivieres", name: "Trois-Rivières", province: "QC", country: "CA", tier: 3 },

  // Atlantic
  { slug: "halifax", name: "Halifax", province: "NS", country: "CA", tier: 2 },
  { slug: "moncton", name: "Moncton", province: "NB", country: "CA", tier: 3 },
  { slug: "saint-john", name: "Saint John", province: "NB", country: "CA", tier: 3 },
  { slug: "st-johns", name: "St. John’s", province: "NL", country: "CA", tier: 3 },
  { slug: "charlottetown", name: "Charlottetown", province: "PE", country: "CA", tier: 3 },

  // Territories (optional but good for “Canada-wide” credibility)
  { slug: "yellowknife", name: "Yellowknife", province: "NT", country: "CA", tier: 3 },
  { slug: "whitehorse", name: "Whitehorse", province: "YT", country: "CA", tier: 3 },
  { slug: "iqaluit", name: "Iqaluit", province: "NU", country: "CA", tier: 3 },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function groupCitiesByProvince(): Record<string, City[]> {
  return CITIES.reduce<Record<string, City[]>>((acc, c) => {
    acc[c.province] = acc[c.province] ?? [];
    acc[c.province].push(c);
    return acc;
  }, {});
}
