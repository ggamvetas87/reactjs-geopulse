// components/Dashboard/CityFilters.tsx

import { useDashboardStore } from "@/store/dashboardStore";
import type { PollutionFilter } from "@/store/dashboardStore";

export const CityFilters = () => {
    const pollutionFilter = useDashboardStore(state => state.pollutionFilter);
    const setPollutionFilter = useDashboardStore(state => state.setPollutionFilter);

    const setSelectedCity = useDashboardStore(state => state.selectCity);

    return (
        <select
            value={pollutionFilter}
            onChange={(event) => {
                setPollutionFilter(event.target.value as PollutionFilter);
                setSelectedCity(null);
            }}
        >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
        </select>
    );
};
