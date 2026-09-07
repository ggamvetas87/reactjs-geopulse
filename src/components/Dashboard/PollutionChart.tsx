// components/Dashboard/PollutionChart.tsx

import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend, Cell } from "recharts";
import { useDashboardStore } from "@/store/dashboardStore";
import { CustomBar } from "@/components/Dashboard/CustomBar";
import { cities } from "@/data/cities";

export const PollutionChart = () => {
    const selectedCityId = useDashboardStore(state => state.selectedCityId);
    const setSelectedCityId = useDashboardStore(state => state.selectCity);
    // const filteredCities = selectedCityId ? cities.filter(city => city.id === selectedCityId) : cities;

    const onBarClick = (id: string) => setSelectedCityId(id);

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
                        <CustomBar {...props} selectedCityId={selectedCityId} onBarClick={() => onBarClick(props.payload.id)} />
                    )}
                />
            </BarChart>
            <br />
            <LineChart width={600} height={300} data={cities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pollution" stroke="#8884d8">
                    {cities.map((entry) => (
                        <Cell key={entry.id} fill={selectedCityId === entry.id ? "#CC0000" : "#8884d8"} />
                    ))}
                </Line>
            </LineChart>
        </div>
    );
};
