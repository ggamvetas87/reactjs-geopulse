// components/Dashboard/PollutionChart.tsx

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ScatterChart,
    Scatter,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import { useDashboardStore } from "@/store/dashboardStore";
import { useFilteredCities } from "@/hooks/useFilteredCities";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CustomBar } from "@/components/Dashboard/CustomBar";
import { CustomScatter } from "@/components/Dashboard/CustomScatter";
import { CustomTooltip } from "@/components/Dashboard/CustomTooltip";
import type { City } from "@/types/city";

type PollutionChartProps = {
  cities: City[];
};

const primaryColor = "#8884d8";
const marginStyles = { top: 10, right: 20, bottom: 10, left: 10, };

const AxisElements = ({ isMobile = false }: { isMobile?: boolean }) => isMobile ? (
    <>
        <XAxis type="number" />
        <YAxis
            type="category"
            dataKey="name"
            width={80}
        />
    </>
) : (
    <>
        <XAxis dataKey="name" />
        <YAxis />
    </>
);

export const PollutionChart = ({ cities = [] }: PollutionChartProps) => {
    const selectedCityId = useDashboardStore(state => state.selectedCityId);
    const selectCity = useDashboardStore(state => state.selectCity);

    const onCitySelect = (id: string) => selectCity(id);

    const filteredCities = useFilteredCities(cities ?? []);
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <div className="pollution-chart-container">
            <div className="chart-card">
                <h3>Pollution Levels</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart 
                        data={filteredCities}
                        layout={isMobile ? "vertical" : "horizontal"}
                        margin={marginStyles}
                    >
                        <AxisElements isMobile={isMobile} />
                        <Tooltip />
                        <Bar 
                            dataKey="pollution"
                            fill={primaryColor}
                            shape={props => (
                                <CustomBar {...props} selectedCityId={selectedCityId} onBarClick={() => onCitySelect(props.payload.id)} />
                            )}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-card">
                <h3>Population vs Pollution</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart margin={marginStyles}>
                        <CartesianGrid strokeDasharray="1 10" />
                        <XAxis dataKey="population" tickFormatter={(value) => `${value / 1_000_000}M`} />
                        <YAxis dataKey="pollution" />
                        <Tooltip content={<CustomTooltip />} />
                        <Scatter 
                            data={filteredCities}
                            fill={primaryColor}
                            line={true}
                            shape={props => (
                                <CustomScatter {...props} selectedCityId={selectedCityId} />
                            )}
                            onClick={data => onCitySelect(data.payload.id)}
                        />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
