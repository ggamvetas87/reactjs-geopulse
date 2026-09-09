// components/Map/CityMarker.tsx

import { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type { Marker as LeafletMarker } from "leaflet";
import { divIcon } from "leaflet";
import { useDashboardStore } from "@/store/dashboardStore";
import type { City } from "@/types/city";
import type { PollutionLevel } from "@/types/pollution";
import { getPollutionLevel, getPollutionLabel } from "@/utils/helpers";

type CityMarkerProps = {
  city: City;
};

const createMarkerIcon = (level: PollutionLevel, selected = false) =>
  divIcon({
    className: `city-marker city-marker-${level}${selected ? " selected" : ""}`,
    html: "<div></div>",
    iconSize: selected ? [26, 26] : [20, 20],
    iconAnchor: selected ? [13, 13] : [10, 10],
  });

const markerIcons: Record<PollutionLevel, ReturnType<typeof divIcon>> = {
  low: createMarkerIcon("low"),
  moderate: createMarkerIcon("moderate"),
  high: createMarkerIcon("high"),
  veryhigh: createMarkerIcon("veryhigh"),
};

const selectedMarkerIcons: Record<
  PollutionLevel,
  ReturnType<typeof divIcon>
> = {
  low: createMarkerIcon("low", true),
  moderate: createMarkerIcon("moderate", true),
  high: createMarkerIcon("high", true),
  veryhigh: createMarkerIcon("veryhigh", true),
};

export function CityMarker({ city }: CityMarkerProps) {
    const selectedCityId = useDashboardStore(
        state => state.selectedCityId
    );

    const setSelectedCity = useDashboardStore(
        state => state.selectCity
    );

    const pollutionLevel = getPollutionLevel(city.pollution) ?? "low";
    const isSelected = selectedCityId === city.id;
    const markerRef = useRef<LeafletMarker>(null);

    useEffect(() => {
        if (!markerRef.current) return;

        if (isSelected) {
            markerRef?.current.openPopup();
        } else {
            markerRef?.current.closePopup();
        }
    }, [isSelected]);

    return (
        <Marker
            ref={markerRef}
            position={[city.lat, city.lng]}
            icon={
                isSelected
                    ? selectedMarkerIcons[pollutionLevel]
                    : markerIcons[pollutionLevel]
            }
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
            </Popup>
        </Marker>
    );
}
