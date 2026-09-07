// components/Map/CityMarker.tsx

import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type { Marker as LeafletMarker } from "leaflet";
import { 
    divIcon
    // Icon
} from "leaflet";
import { useDashboardStore } from "@/store/dashboardStore";
import type { City } from "@/types/city";
import { getPollutionLabel } from "@/utils/helpers";

type CityMarkerProps = {
  city: City;
};

// const defaultIcon = new Icon({
//   iconUrl: "/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

const defaultIcon = divIcon({
  className: "city-marker",
  html: "<div></div>",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const selectedIcon = divIcon({
  className: "city-marker selected",
  html: "<div></div>",
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

export function CityMarker({ city }: CityMarkerProps) {
    const selectedCityId = useDashboardStore(
        state => state.selectedCityId
    );

    const setSelectedCity = useDashboardStore(
        state => state.selectCity
    );

    const isSelected = selectedCityId === city.id;

    const markerRef = useRef<LeafletMarker>(null);

    useEffect(() => {
        if (isSelected && markerRef.current) {
            markerRef.current.openPopup();
        }
    }, [isSelected]);

    return (
        <Marker
            ref={markerRef}
            position={[city.lat, city.lng]}
            icon={isSelected ? selectedIcon : defaultIcon}
            eventHandlers={{
              click: () => setSelectedCity(city.id)
            }}
        >
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
                <br />
                <button className={isSelected ? "active" : ""} onClick={() => setSelectedCity(city.id)}>
                    {isSelected ? "Selected" : "Select City"}
                </button>
            </Popup>
        </Marker>
    );
}
