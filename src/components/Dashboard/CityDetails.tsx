// components/Dashboard/CityDetails.tsx

import type { City } from "@/types/city";
import { useDashboardStore } from "@/store/dashboardStore";
import { getPollutionLabel } from "@/utils/helpers";

type CityDetailsProps = {
  cities: City[];
};

export function CityDetails({ cities = [] }: CityDetailsProps) {
    const selectedCityId = useDashboardStore(
        state => state.selectedCityId,
    );

    const selectCity = useDashboardStore(
        state => state.selectCity
    );

    const selectedCity = cities?.find(
        city => city.id === selectedCityId,
    );

    if (!selectedCity) {
        return (
            <div className="city-details-empty">
                <h3>No city selected</h3>
                <p>
                    Select a city on the map to see its details.
                </p>
            </div>
        );
    }

    return (
        <div className="city-details-card">
            <div className="city-details-header">
                <div>
                    <h2>{selectedCity.name}</h2>
                    <span>{selectedCity.country}</span>
                </div>

                <button
                    type="button"
                    onClick={() => selectCity(null)}
                    aria-label="Close city details"
                >
                    [×]
                </button>
            </div>

            <div className="city-details-body">
                <div className="city-detail">
                    <span>Population</span>
                    <strong>
                        {selectedCity.population.toLocaleString()}
                    </strong>
                </div>

                <div className="city-detail">
                    <span>Pollution</span>
                    <strong>
                        {getPollutionLabel(selectedCity.pollution)}
                    </strong>
                </div>

                <div className="city-detail">
                    <span>Temperature</span>
                    <strong>
                        {selectedCity.temperature}°C
                    </strong>
                </div>

                <div className="city-detail">
                    <span>Coordinates</span>
                    <strong>
                        {selectedCity.lat.toFixed(4)},{" "}
                        {selectedCity.lng.toFixed(4)}
                    </strong>
                </div>
            </div>
        </div>
    );
}
