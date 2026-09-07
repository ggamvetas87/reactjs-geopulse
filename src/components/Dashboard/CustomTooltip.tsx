// components/Dashboard/CustomTooltip.tsx

import type { City } from "@/types/city";
import { formatPopulation } from "@/utils/helpers";

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    payload: City;
    value: number;
    name: string;
  }[];
};

export const CustomTooltip = ({
  active,
  payload,
}: CustomTooltipProps) => {
    if (!active || !payload?.length) {
        return null;
    }

    const city = payload[0]?.payload;

    return (
        <div className="custom-tooltip">
            <strong>{city.name}</strong>
            <p>Population: {formatPopulation(city.population)}</p>
            <p>Pollution: {city.pollution}</p>
            <p>Temperature: {city.temperature}°C</p>
        </div>
    );
};
