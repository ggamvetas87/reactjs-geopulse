// components/Dashboard/PollutionChart.tsx

import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { useDashboardStore } from "@/store/dashboardStore";
import { cities } from "@/data/cities";

export const PollutionChart = () => {
    const selectedCityId = useDashboardStore(state => state.selectedCityId);
    const filteredCities = selectedCityId ? cities.filter(city => city.id === selectedCityId) : cities;

    return (
        <div className="pollution-chart-container">
            <h3>Pollution Levels</h3>
            <BarChart width={600} height={300} data={filteredCities}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pollution" fill="#8884d8" />
            </BarChart>
            <br />
            <LineChart width={600} height={300} data={filteredCities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pollution" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};
