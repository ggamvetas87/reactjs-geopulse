// components/Dashboard/CityDetails.tsx

// import { cities } from "@/data/cities";
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
        return <h3>No city selected</h3>;
    }

    return (
        <div>
            <h2 style={{ marginTop: 20 }}>{selectedCity.name}</h2>
            <p>Country: {selectedCity.country}</p>
            <p>Population: {selectedCity.population.toLocaleString()}</p>
            <p>Pollution: {getPollutionLabel(selectedCity.pollution)}</p>
            <p>Temperature: {selectedCity.temperature}°C</p>
            <br />
        </div>
    );
}
