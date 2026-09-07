// components/Map/CityMarker.tsx

import { Marker, Popup } from "react-leaflet";
import type { City } from "@/types/city";

interface CityMarkerProps {
  city: City;
}

export function CityMarker({ city }: CityMarkerProps) {
  return (
    <Marker position={[city.lat, city.lng]}>
      <Popup>
        <strong>{city.name}</strong>
        <br />
        {city.country}
        <br />
        Population: {city.population.toLocaleString()}
        <br />
        Pollution: {city.pollution}
        <br />
        Temperature: {city.temperature}°C
      </Popup>
    </Marker>
  );
}
