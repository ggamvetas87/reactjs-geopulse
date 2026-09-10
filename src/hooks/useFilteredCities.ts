// hooks/useFilteredCities.ts

import { useMemo } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import type { City } from "@/types/city";
import { filterCitiesByPollution, filterCitiesBySearch } from "@/utils/filters";

export const useFilteredCities = (cities: City[]): City[] => {
  const pollutionFilter = useDashboardStore(
    state => state.pollutionFilter
  );
  const searchQuery = useDashboardStore(
    state => state.searchQuery
  );

  return useMemo(() => {
    const pollutionFilteredCities =
      filterCitiesByPollution(
        cities,
        pollutionFilter
      );

    return filterCitiesBySearch(
      pollutionFilteredCities,
      searchQuery
    );
  }, [
    cities,
    pollutionFilter,
    searchQuery
  ]);
};
