// utils/helpers.ts

import { createElement } from "react";

export function renderAsHtml(text: string) {
  return {
    dangerouslySetInnerHTML: {
      __html: text
    }
  };
}

export function getPollutionLabel(pollution?: number) {
  if (pollution === undefined) {
    return;
  }

  if (pollution <= 30) {
    return createElement("span", { className: "tag-low" }, "Low pollution");
  }

  if (pollution <= 60) {
    return createElement("span", { className: "tag-moderate" }, "Moderate pollution");
  }

  if (pollution <= 90) {
    return createElement("span", { className: "tag-high" }, "High pollution");
  }

  return createElement("span", { className: "tag-veryhigh" }, "Very High pollution");
}

export function formatPopulation(population: number) {
  return `${(population / 1_000_000).toFixed(1)}M`;
}
