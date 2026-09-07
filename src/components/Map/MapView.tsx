// components/Map/MapView.tsx

import { MapContainer, TileLayer } from "react-leaflet";
import { cities } from "@/data/cities";
import { CityMarker } from "@/components/Map/CityMarker";
import { MapController } from "@/components/Map/MapController";

export const MapView = () => (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={4}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController />

      {cities.map((city) => (
        <CityMarker
          key={city.id}
          city={city}
        />
      ))}
    </MapContainer>
);
