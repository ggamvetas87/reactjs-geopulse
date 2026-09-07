// components/Map/CityMarker.tsx

import { Marker, Popup } from "react-leaflet";
import { useDashboardStore } from "@/store/dashboardStore";
import type { City } from "@/types/city";
import { getPollutionLabel } from "@/utils/helpers";

type CityMarkerProps = {
  city: City;
};

export function CityMarker({ city }: CityMarkerProps) {
    const selectedCityId = useDashboardStore(
        state => state.selectedCityId,
    );

    const selectCity = useDashboardStore(
        state => state.selectCity,
    );

    const isSelected = selectedCityId === city.id;

    return (
        <Marker position={[city.lat, city.lng]}>
        <Popup>
            <strong>{city.name}</strong>
            <br />
            {city.country}
            <br />
            Population: {city.population.toLocaleString()}
            <br />
            Pollution: {getPollutionLabel(city.pollution)}
            <br />
            Temperature: {city.temperature}°C
            <br />
            {isSelected && <em>Selected City</em>}
            <br />
            <button onClick={() => selectCity(city.id)}>Select City</button>
        </Popup>
        </Marker>
    );
}
