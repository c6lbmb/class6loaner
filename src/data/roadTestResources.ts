import { CITIES } from "./cities";

export type ProvinceResource = {
  roadTestSchedulerUrl?: string;
  roadTestSchedulerLabel?: string;
  handbookUrl?: string;
  handbookLabel?: string;
  notes?: string[];
  videoEmbedUrl?: string;
  videoTitle?: string;
  videoIntro?: string;
};

export const PROVINCE_ROAD_TEST_RESOURCES: Record<string, ProvinceResource> = {
  AB: {
    roadTestSchedulerUrl: "https://www.albertadriverexaminer.ca/",
    roadTestSchedulerLabel: "Book or manage an Alberta road test",
    handbookUrl: "",
    handbookLabel: "Alberta rider handbook",
    notes: [
      "Arrive early and confirm registry-specific instructions.",
      "If you test on a 3-wheeler, your Alberta Class 6 may carry a 3-wheel restriction.",
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/lLquS2vmZ64?start=263",
    videoTitle: "Alberta motorcycle road test overview",
    videoIntro:
      "This Alberta-based video covers road test expectations, common mistakes, and practical tips to help you feel more prepared. It starts at a useful section, so you do not need to watch the full 30 minutes unless you want the extra detail.",
  },
  BC: {
   roadTestSchedulerUrl: "https://icbc.com/driver-licensing/visit-dl-office/Book-a-road-test",
  roadTestSchedulerLabel: "Book or manage a BC MST or road test",
  handbookUrl: "https://icbc.com/driver-licensing/driving-guides/Learn-to-Ride-Smart",
  handbookLabel: "ICBC Learn to Ride Smart",
  notes: [
    "BC riders may need to complete a Motorcycle Skills Test (MST) before the road test, depending on their licensing stage.",
    "Use ICBC directly to confirm your exact path, timing, and booking requirements before requesting a bike."],
    videoEmbedUrl: "",
    videoTitle: "",
    videoIntro: "",
  },
  MB: {
    roadTestSchedulerUrl: "",
    roadTestSchedulerLabel: "Book or manage a Manitoba road test",
    handbookUrl: "",
    handbookLabel: "Manitoba rider handbook",
    notes: [],
    videoEmbedUrl: "",
    videoTitle: "",
    videoIntro: "",
  },
  ON: {
    roadTestSchedulerUrl: "",
    roadTestSchedulerLabel: "Book or manage an Ontario road test",
    handbookUrl: "",
    handbookLabel: "Ontario rider handbook",
    notes: [],
    videoEmbedUrl: "",
    videoTitle: "",
    videoIntro: "",
  },
};

export function getProvinceRoadTestResources(provinceCode?: string | null): ProvinceResource | null {
  if (!provinceCode) return null;
  return PROVINCE_ROAD_TEST_RESOURCES[provinceCode] ?? null;
}

export function getCityRoadTestResources(citySlug?: string | null): ProvinceResource | null {
  if (!citySlug) return null;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return null;
  return getProvinceRoadTestResources(city.province);
}