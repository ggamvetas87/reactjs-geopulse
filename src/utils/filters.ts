// utils/filters.ts

import type { City } from "@/types/city";
import type { PollutionFilter } from "@/store/dashboardStore";

export function filterCitiesByPollution(
  cities: City[],
  filter: PollutionFilter
): City[] {
  if (filter === "all") {
    return cities;
  }

  return cities.filter((city) => {
    if (filter === "low") {
      return city.pollution <= 30;
    }

    if (filter === "moderate") {
      return city.pollution > 30 && city.pollution <= 60;
    }

    return city.pollution > 60 && city.pollution <= 90;
  });
}