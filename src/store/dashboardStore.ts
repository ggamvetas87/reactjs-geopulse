// store/dashboardStore.ts

import { create } from "zustand";
import type { PollutionLevel } from "@/types/pollution";

type DashboardStore = {
  selectedCityId: string | null;
  selectCity: (cityId: string | null) => void;

  pollutionFilter: PollutionFilter;
  setPollutionFilter: (filter: PollutionFilter) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  resetFilters: () => void;
};

export type PollutionFilter = "all" | PollutionLevel;

export const useDashboardStore = create<DashboardStore>(set => ({
  selectedCityId: null,
  selectCity: cityId => {
    set({ selectedCityId: cityId });
  },

  pollutionFilter: "all",
  setPollutionFilter: filter => {
    set({ pollutionFilter: filter });
  },

  searchQuery: "",
  setSearchQuery: query => {
    set({ searchQuery: query });
  },

  resetFilters: () => {
    set({
      selectedCityId: null,
      pollutionFilter: "all",
      searchQuery: ""
    });
  }
}));
