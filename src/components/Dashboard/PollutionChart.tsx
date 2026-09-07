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
import { CustomBar } from "@/components/Dashboard/CustomBar";
import { CustomScatter } from "@/components/Dashboard/CustomScatter";
import { CustomTooltip } from "./CustomTooltip";
import { cities } from "@/data/cities";

export const PollutionChart = () => {
    const selectedCityId = useDashboardStore(state => state.selectedCityId);
    const setSelectedCityId = useDashboardStore(state => state.selectCity);
    // const filteredCities = selectedCityId ? cities.filter(city => city.id === selectedCityId) : cities;

    const onCitySelect = (id: string) => setSelectedCityId(id);

    return (
        <div className="pollution-chart-container">
            <h3>Pollution Levels</h3>
            <BarChart width={600} height={300} data={cities}>
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
                    data={cities}
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
