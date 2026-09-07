// store/dashboardStore.ts

import { create } from "zustand";

type DashboardStore = {
  selectedCityId: string | null;
  selectCity: (cityId: string | null) => void;
};

export const useDashboardStore = create<DashboardStore>(set => ({
  selectedCityId: null,

  selectCity: cityId => {
    set({ selectedCityId: cityId });
  },
}));
