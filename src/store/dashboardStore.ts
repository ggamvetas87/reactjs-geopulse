// store/dashboardStore.ts

import { create } from "zustand";

type DashboardStore = {
  selectedCityId: string | null;
  selectCity: (cityId: string | null) => void;
  pollutionFilter: PollutionFilter;
  setPollutionFilter: (filter: PollutionFilter) => void;
};

export type PollutionFilter = "all" | "low" | "moderate" | "high";

export const useDashboardStore = create<DashboardStore>(set => ({
  selectedCityId: null,
  selectCity: cityId => {
    set({ selectedCityId: cityId });
  },

  pollutionFilter: "all",
  setPollutionFilter: filter => {
    set({ pollutionFilter: filter });
  },
}));
