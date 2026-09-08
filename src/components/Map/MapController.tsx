// components/Map/MapController.tsx

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { cities } from "@/data/cities";
import { useDashboardStore } from "@/store/dashboardStore";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/constants/maps";

export function MapController() {
    const map = useMap();

    const selectedCityId = useDashboardStore(
        state => state.selectedCityId
    );

    const selectedCity = cities.find(
        city => city.id === selectedCityId
    );

    useEffect(() => {
        if (!selectedCity) {
            map.flyTo(DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM);
            return;
        }

        map.flyTo(
            [selectedCity.lat, selectedCity.lng],
            8
        );
    }, [selectedCity, map]);

    return null;
}
