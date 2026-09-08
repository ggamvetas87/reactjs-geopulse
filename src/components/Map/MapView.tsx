// components/Map/MapView.tsx

import { MapContainer, TileLayer } from "react-leaflet";
import { useCitiesQuery } from "@/hooks/useCitiesQuery";
import { useFilteredCities } from "@/hooks/useFilteredCities";
import { CityMarker } from "@/components/Map/CityMarker";
import { MapController } from "@/components/Map/MapController";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/constants/maps";

export const MapView = () => {

    const {
        data: cities,
        isLoading,
        isError,
    } = useCitiesQuery();
    
    const filteredCities = useFilteredCities(cities ?? []);

    if (isLoading) {
        return <div>Loading cities...</div>;
    }

    if (isError) {
        return <div>Failed to load cities.</div>;
    }

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
