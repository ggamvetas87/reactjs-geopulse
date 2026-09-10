// hooks/useDashboardStats.ts

import type { City } from "@/types/city";

type DashboardStats = {
    totalCities: number;
    averagePollution: number;
    highestPollutionCity: City | null;
    averageTemperature: number;
};

export const useDashboardStats = (
    cities: City[]
): DashboardStats => {
    if (cities.length === 0) {
        return {
            totalCities: 0,
            averagePollution: 0,
            highestPollutionCity: null,
            averageTemperature: 0,
        };
    }

    const totalCities = cities.length;

    const totalPollution = cities.reduce(
        (sum, city) => sum + city.pollution,
        0
    );

    const averagePollution = totalPollution / totalCities;

    const highestPollutionCity = cities.reduce(
        (highest, city) =>
            city.pollution > highest.pollution
                ? city
                : highest
    );

    const totalTemperature = cities.reduce(
        (sum, city) => sum + city.temperature,
        0
    );

    const averageTemperature = totalTemperature / totalCities;

    return {
        totalCities,
        averagePollution,
        highestPollutionCity,
        averageTemperature,
    };
};
