// components/Map/MapLegend.tsx

import { pollutionLabels, pollutionLevels } from "@/constants/pollution";


export function MapLegend() {
    return (
        <div className="map-legend">
            <strong>Pollution level</strong>

            {pollutionLevels.map((level) => (
                <div
                    key={level}
                    className="map-legend-item"
                >
                    <span
                        className={`map-legend-marker map-legend-${level}`}
                    />
                    <span>{pollutionLabels[level]}</span>
                </div>
            ))}
        </div>
    );
}
