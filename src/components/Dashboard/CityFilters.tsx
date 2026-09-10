// components/Dashboard/CityFilters.tsx

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useDashboardStore } from "@/store/dashboardStore";
import { useMapStore } from "@/store/mapStore";
import type { PollutionFilter } from "@/store/dashboardStore";

export const CityFilters = () => {
    const pollutionFilter = useDashboardStore(state => state.pollutionFilter);
    const setPollutionFilter = useDashboardStore(state => state.setPollutionFilter);

    const setSelectedCity = useDashboardStore(state => state.selectCity);

    const showHeatmap = useMapStore(state => state.showHeatmap);
    const toggleHeatmap = useMapStore(state => state.toggleHeatmap);

    const searchQuery = useDashboardStore(
        state => state.searchQuery
    );

    const setSearchQuery = useDashboardStore(
        state => state.setSearchQuery
    );

    const resetFilters = useDashboardStore(
        state => state.resetFilters
    );

    const [searchInput, setSearchInput] = useState(searchQuery);
    const debouncedSearch = useDebounce(searchInput, 300);

    const handleResetFilters = () => {
        setSearchInput("");
        resetFilters();
    };

    useEffect(() => {
        setSearchQuery(debouncedSearch);
    }, [debouncedSearch, setSearchQuery]);

    return (
        <div className="city-filters">
            <div className="city-filter-group">
                <label htmlFor="city-search">
                    Search city:
                </label>

                <input
                    id="city-search"
                    type="search"
                    value={searchInput}
                    placeholder="Search city..."
                    onChange={(event) => {
                        setSearchInput(event.target.value);
                        setSelectedCity(null);
                    }}
                />

                {searchInput && (
                    <button
                        type="button"
                        className="city-search-clear"
                        onClick={() => {
                            setSearchInput("");
                            setSelectedCity(null);
                        }}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>

            <div className="city-filter-group">
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
                    <option value="veryhigh">Very High</option>
                </select>

                <label className="city-filter-checkbox">
                    <input
                        type="checkbox"
                        checked={showHeatmap}
                        onChange={toggleHeatmap}
                    />
                    {" "}<span>Show heatmap</span>
                </label>
            </div>

            <button
                type="button"
                className="city-filters-reset"
                onClick={handleResetFilters}
            >
                Reset filters
            </button>
        </div>
    );
};
