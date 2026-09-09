// utils/filters.ts

import type { City } from "@/types/city";
import type { PollutionFilter } from "@/store/dashboardStore";
import { getPollutionLevel } from "@/utils/helpers";

export function filterCitiesByPollution(
    cities: City[],
    filter: PollutionFilter
): City[] {
    if (filter === "all") {
        return cities;
    }

    return cities.filter(
        city => getPollutionLevel(city.pollution) === filter
    );
}
