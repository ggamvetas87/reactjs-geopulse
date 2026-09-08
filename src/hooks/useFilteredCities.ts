// hooks/useFilteredCities.ts

import { useMemo } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import type { City } from "@/types/city";
import { filterCitiesByPollution } from "@/utils/filters";

export const useFilteredCities = (cities: City[]): City[] => {
  const pollutionFilter = useDashboardStore(
    state => state.pollutionFilter
  );

  return useMemo(
    () => filterCitiesByPollution(cities, pollutionFilter),
    [cities, pollutionFilter]
  );
};
