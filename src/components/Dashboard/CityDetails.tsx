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

    const selectedCity = cities?.find(
        city => city.id === selectedCityId,
    );

    if (!selectedCity) {
        return (
            <div>
                <h3>No city selected</h3>
                <p>Select a city on the map to see its details.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>{selectedCity.name}</h2>
            <p>Country: {selectedCity.country}</p>
            <p>Population: {selectedCity.population.toLocaleString()}</p>
            <p>Pollution: {getPollutionLabel(selectedCity.pollution)}</p>
            <p>Temperature: {selectedCity.temperature}°C</p>
            <br />
        </div>
    );
}
