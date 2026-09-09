// constants/pollution.ts

import type { PollutionLevel } from "@/types/pollution";

export const pollutionLevels: PollutionLevel[] = [
    "low",
    "moderate",
    "high",
    "veryhigh",
];

export const pollutionLabels: Record<PollutionLevel, string> = {
    low: "Low pollution",
    moderate: "Moderate pollution",
    high: "High pollution",
    veryhigh: "Very High pollution",
};
