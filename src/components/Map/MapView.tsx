// components/Map/MapView.tsx

import { MapContainer, TileLayer } from "react-leaflet";
import { cities } from "@/data/cities";
import { CityMarker } from "@/components/Map/CityMarker";

export function MapView() {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={4}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <CityMarker
          key={city.id}
          city={city}
        />
      ))}
    </MapContainer>
  );
};
