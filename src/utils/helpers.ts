// utils/helpers.ts

import { createElement } from "react";
import { pollutionLabels } from "@/constants/pollution";
import type { PollutionLevel } from "@/types/pollution";

export function renderAsHtml(text: string) {
  return {
    dangerouslySetInnerHTML: {
      __html: text
    }
  };
}

export function getPollutionLevel(
    pollution?: number
): PollutionLevel | undefined {
  if (pollution === undefined) {
    return;
  }

  if (pollution <= 30) {
    return "low";
  }

  if (pollution <= 60) {
    return "moderate";
  }

  if (pollution <= 90) {
    return "high";
  }

  return "veryhigh";
}

export function getPollutionLabel(pollution?: number) {
  const level = getPollutionLevel(pollution);

  if (!level) {
    return;
  }

  return createElement(
    "span",
    { className: `tag-${level}` },
    pollutionLabels[level]
  );
}

export function formatPopulation(population: number) {
  return `${(population / 1_000_000).toFixed(1)}M`;
}
