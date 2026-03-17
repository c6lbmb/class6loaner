export type City = {
  slug: string;
  name: string;
  province: string; // e.g. "AB"
  country: "CA";
  // optional for later: ad markets / pricing tiers
  tier?: 1 | 2 | 3;
  // lightweight regional clustering for better nearby-city linking
  region?: string;
};

export const CITIES: City[] = [
  // Alberta
  { slug: "calgary", name: "Calgary", province: "AB", country: "CA", tier: 1, region: "calgary-area" },
  { slug: "airdrie", name: "Airdrie", province: "AB", country: "CA", tier: 2, region: "calgary-area" },
  { slug: "red-deer", name: "Red Deer", province: "AB", country: "CA", tier: 2, region: "central-ab" },
  { slug: "edmonton", name: "Edmonton", province: "AB", country: "CA", tier: 1, region: "edmonton-area" },
  { slug: "spruce-grove", name: "Spruce Grove", province: "AB", country: "CA", tier: 3, region: "edmonton-area" },
  { slug: "st-albert", name: "St. Albert", province: "AB", country: "CA", tier: 3, region: "edmonton-area" },
  { slug: "sherwood-park", name: "Sherwood Park", province: "AB", country: "CA", tier: 3, region: "edmonton-area" },
  { slug: "lethbridge", name: "Lethbridge", province: "AB", country: "CA", tier: 2, region: "south-ab" },
  { slug: "medicine-hat", name: "Medicine Hat", province: "AB", country: "CA", tier: 2, region: "south-ab" },
  { slug: "grand-prairie", name: "Grande Prairie", province: "AB", country: "CA", tier: 2, region: "north-ab" },
  { slug: "fort-mcmurray", name: "Fort McMurray", province: "AB", country: "CA", tier: 2, region: "north-ab" },

  // British Columbia
  { slug: "vancouver", name: "Vancouver", province: "BC", country: "CA", tier: 1, region: "lower-mainland" },
  { slug: "surrey", name: "Surrey", province: "BC", country: "CA", tier: 1, region: "lower-mainland" },
  { slug: "burnaby", name: "Burnaby", province: "BC", country: "CA", tier: 2, region: "lower-mainland" },
  { slug: "richmond-bc", name: "Richmond", province: "BC", country: "CA", tier: 2, region: "lower-mainland" },
  { slug: "coquitlam", name: "Coquitlam", province: "BC", country: "CA", tier: 2, region: "lower-mainland" },
  { slug: "langley", name: "Langley", province: "BC", country: "CA", tier: 2, region: "fraser-valley" },
  { slug: "abbotsford", name: "Abbotsford", province: "BC", country: "CA", tier: 2, region: "fraser-valley" },
  { slug: "kelowna", name: "Kelowna", province: "BC", country: "CA", tier: 2, region: "interior-bc" },
  { slug: "kamloops", name: "Kamloops", province: "BC", country: "CA", tier: 3, region: "interior-bc" },
  { slug: "victoria", name: "Victoria", province: "BC", country: "CA", tier: 2, region: "vancouver-island" },
  { slug: "nanaimo", name: "Nanaimo", province: "BC", country: "CA", tier: 3, region: "vancouver-island" },
  { slug: "prince-george", name: "Prince George", province: "BC", country: "CA", tier: 3, region: "northern-bc" },

  // Manitoba
  { slug: "winnipeg", name: "Winnipeg", province: "MB", country: "CA", tier: 1, region: "winnipeg-area" },

  // Ontario (focus: big + ad markets)
  { slug: "toronto", name: "Toronto", province: "ON", country: "CA", tier: 1, region: "gta-core" },
  { slug: "mississauga", name: "Mississauga", province: "ON", country: "CA", tier: 1, region: "gta-west" },
  { slug: "brampton", name: "Brampton", province: "ON", country: "CA", tier: 1, region: "gta-west" },
  { slug: "oshawa", name: "Oshawa", province: "ON", country: "CA", tier: 3, region: "gta-east" },
  { slug: "hamilton", name: "Hamilton", province: "ON", country: "CA", tier: 1, region: "hamilton-niagara" },
  { slug: "st-catharines", name: "St. Catharines", province: "ON", country: "CA", tier: 3, region: "hamilton-niagara" },
  { slug: "ottawa", name: "Ottawa", province: "ON", country: "CA", tier: 1, region: "ottawa-area" },
  { slug: "london-on", name: "London", province: "ON", country: "CA", tier: 2, region: "southwest-on" },
  { slug: "windsor", name: "Windsor", province: "ON", country: "CA", tier: 2, region: "southwest-on" },
  { slug: "kitchener", name: "Kitchener", province: "ON", country: "CA", tier: 2, region: "tri-cities" },
  { slug: "waterloo", name: "Waterloo", province: "ON", country: "CA", tier: 2, region: "tri-cities" },
  { slug: "cambridge-on", name: "Cambridge", province: "ON", country: "CA", tier: 2, region: "tri-cities" },
  { slug: "guelph", name: "Guelph", province: "ON", country: "CA", tier: 2, region: "guelph-area" },
  { slug: "kingston", name: "Kingston", province: "ON", country: "CA", tier: 3, region: "east-on" },
  { slug: "barrie", name: "Barrie", province: "ON", country: "CA", tier: 3, region: "simcoe-area" },

  // Quebec
  { slug: "montreal", name: "Montréal", province: "QC", country: "CA", tier: 1, region: "montreal-area" },
  { slug: "laval", name: "Laval", province: "QC", country: "CA", tier: 2, region: "montreal-area" },
  { slug: "quebec-city", name: "Québec City", province: "QC", country: "CA", tier: 2, region: "quebec-city-area" },
  { slug: "gatineau", name: "Gatineau", province: "QC", country: "CA", tier: 2, region: "gatineau-area" },
  { slug: "sherbrooke-qc", name: "Sherbrooke", province: "QC", country: "CA", tier: 3, region: "eastern-townships" },
  { slug: "trois-rivieres", name: "Trois-Rivières", province: "QC", country: "CA", tier: 3, region: "mauricie" },

  // Atlantic
  { slug: "halifax", name: "Halifax", province: "NS", country: "CA", tier: 2, region: "halifax-area" },
  { slug: "moncton", name: "Moncton", province: "NB", country: "CA", tier: 3, region: "moncton-area" },
  { slug: "saint-john", name: "Saint John", province: "NB", country: "CA", tier: 3, region: "saint-john-area" },
  { slug: "st-johns", name: "St. John’s", province: "NL", country: "CA", tier: 3, region: "st-johns-area" },
  { slug: "charlottetown", name: "Charlottetown", province: "PE", country: "CA", tier: 3, region: "charlottetown-area" },

  // Territories
  { slug: "yellowknife", name: "Yellowknife", province: "NT", country: "CA", tier: 3, region: "yellowknife-area" },
  { slug: "whitehorse", name: "Whitehorse", province: "YT", country: "CA", tier: 3, region: "whitehorse-area" },
  { slug: "iqaluit", name: "Iqaluit", province: "NU", country: "CA", tier: 3, region: "iqaluit-area" },
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
