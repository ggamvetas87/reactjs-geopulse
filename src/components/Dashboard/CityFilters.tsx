// components/Dashboard/CityFilters.tsx

import { useDashboardStore } from "@/store/dashboardStore";
import { useMapStore } from "@/store/mapStore";
import type { PollutionFilter } from "@/store/dashboardStore";

export const CityFilters = () => {
    const pollutionFilter = useDashboardStore(state => state.pollutionFilter);
    const setPollutionFilter = useDashboardStore(state => state.setPollutionFilter);

    const setSelectedCity = useDashboardStore(state => state.selectCity);

    const showHeatmap = useMapStore(state => state.showHeatmap);
    const toggleHeatmap = useMapStore(state => state.toggleHeatmap);

    return (
        <div className="city-filters">
            <label style={{ marginRight: 8 }} htmlFor="pollution-filter">Pollution Filter:</label>
            <select
                id="pollution-filter"
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

            <label style={{ marginLeft: 16 }}>
                <input
                    type="checkbox"
                    checked={showHeatmap}
                    onChange={toggleHeatmap}
                />
                {" "}Show heatmap
            </label>
        </div>
    );
};
