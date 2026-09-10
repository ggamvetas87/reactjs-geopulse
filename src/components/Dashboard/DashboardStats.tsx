// components/Dashboard/DashboardStats.tsx

import type { City } from "@/types/city";
import { useDashboardStats } from "@/hooks/useDashboardStats";
import { getPollutionLabel } from "@/utils/helpers";

type DashboardStatsProps = {
    cities: City[];
};

export const DashboardStats = ({
    cities,
}: DashboardStatsProps) => {
    const {
        totalCities,
        averagePollution,
        highestPollutionCity,
        averageTemperature,
    } = useDashboardStats(cities);

    return (
        <section className="dashboard-stats">
            <div className="stat-card">
                <span className="stat-label">
                    Cities
                </span>

                <strong className="stat-value">
                    {totalCities}
                </strong>
            </div>

            <div className="stat-card">
                <span className="stat-label">
                    Average Pollution
                </span>

                <strong className="stat-value">
                    {averagePollution.toFixed(1)}
                </strong>

                <span className="stat-meta">
                    {getPollutionLabel(averagePollution)}
                </span>
            </div>

            <div className="stat-card">
                <span className="stat-label">
                    Highest Pollution
                </span>

                {highestPollutionCity ? (
                    <>
                        <strong className="stat-value">
                            {highestPollutionCity.name}
                        </strong>

                        <span className="stat-meta">
                            {highestPollutionCity.pollution} — {" "}
                            {getPollutionLabel(
                                highestPollutionCity.pollution
                            )}
                        </span>
                    </>
                ) : (
                    <strong className="stat-value">
                        -
                    </strong>
                )}
            </div>

            <div className="stat-card">
                <span className="stat-label">
                    Average Temperature
                </span>

                <strong className="stat-value">
                    {averageTemperature.toFixed(1)}°C
                </strong>
            </div>
        </section>
    );
};
