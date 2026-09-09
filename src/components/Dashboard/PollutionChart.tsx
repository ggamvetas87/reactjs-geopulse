// components/Dashboard/PollutionChart.tsx

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ScatterChart,
    Scatter,
    CartesianGrid
} from "recharts";
import { useDashboardStore } from "@/store/dashboardStore";
import { useFilteredCities } from "@/hooks/useFilteredCities";
import { CustomBar } from "@/components/Dashboard/CustomBar";
import { CustomScatter } from "@/components/Dashboard/CustomScatter";
import { CustomTooltip } from "@/components/Dashboard/CustomTooltip";
import type { City } from "@/types/city";

type PollutionChartProps = {
  cities: City[];
};

export const PollutionChart = ({ cities = [] }: PollutionChartProps) => {
    const selectedCityId = useDashboardStore(state => state.selectedCityId);
    const selectCity = useDashboardStore(state => state.selectCity);

    const onCitySelect = (id: string) => selectCity(id);

    const filteredCities = useFilteredCities(cities ?? []);

    return (
        <div className="pollution-chart-container">
            <h3>Pollution Levels</h3>
            <BarChart width={600} height={300} data={filteredCities}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                    dataKey="pollution"
                    fill="#8884d8"
                    shape={props => (
                        <CustomBar {...props} selectedCityId={selectedCityId} onBarClick={() => onCitySelect(props.payload.id)} />
                    )}
                />
            </BarChart>
            <br />

            <h3>Population vs Pollution</h3>
            <ScatterChart width={600} height={300}>
                <CartesianGrid strokeDasharray="1 10" />
                <XAxis dataKey="population" tickFormatter={(value) => `${value / 1_000_000}M`} />
                <YAxis dataKey="pollution" />
                <Tooltip content={<CustomTooltip />} />
                <Scatter 
                    data={filteredCities}
                    fill="#787797"
                    line={true}
                    shape={props => (
                        <CustomScatter {...props} selectedCityId={selectedCityId} />
                    )}
                    onClick={data => onCitySelect(data.payload.id)}
                />
            </ScatterChart>
        </div>
    );
};
