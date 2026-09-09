// components/Map/MapView.tsx

import { MapContainer, TileLayer } from "react-leaflet";
import { useFilteredCities } from "@/hooks/useFilteredCities";
import { CityMarker } from "@/components/Map/CityMarker";
import { MapController } from "@/components/Map/MapController";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/constants/maps";
import type { City } from "@/types/city";

export const MapView = ({ cities = [] }: { cities: City[] }) => {

    const filteredCities = useFilteredCities(cities ?? []);

    return (
        <MapContainer
            center={DEFAULT_MAP_CENTER}
            zoom={DEFAULT_MAP_ZOOM}
            style={{ height: "600px", width: "100%" }}
        >
        <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController />

        {filteredCities.map((city) => (
            <CityMarker
                key={city.id}
                city={city}
            />
        ))}
        </MapContainer>
    );
};
