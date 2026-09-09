// components/Map/HeatmapLayer.tsx

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import type { HeatMapOptions } from "leaflet";
import type { City } from "@/types/city";

type HeatmapLayerProps = {
  cities: City[];
  heatMapOptions?: HeatMapOptions;
};

export const HeatmapLayer = ({ cities, heatMapOptions }: HeatmapLayerProps) => {
    const { 
        radius = 20,
        blur = 10,
        maxZoom = 10,
        max = 1,
        minOpacity = 0.5
    } = heatMapOptions || {};
    
    const map = useMap();

    useEffect(() => {
        if (cities.length === 0) return;

        const pollutionValues = cities.map(city => city.pollution);

        const min = Math.min(...pollutionValues);
        const max = Math.max(...pollutionValues);

        const points = cities.map(city => {
            const normalized =
            max === min
                ? 1
                : (city.pollution - min) / (max - min);

            const intensity = Math.sqrt(normalized);

            return [city.lat, city.lng, intensity] as [
                number,
                number,
                number
            ];
        });

        const heatLayer = L.heatLayer(points, {
            radius,
            blur,
            maxZoom,
            max,
            minOpacity
        });

        heatLayer.addTo(map);

        return () => {
            map.removeLayer(heatLayer);
        };
    }, [map, cities, radius, blur, maxZoom, max, minOpacity]);

    return null;
};
