// App.tsx

import { MapView } from "@/components/Map/MapView";
import { CityDetails } from "@/components/Dashboard/CityDetails";
import { PollutionChart } from "@/components/Dashboard/PollutionChart";
import { CityFilters } from "@/components/Dashboard/CityFilters";
import "@/App.css";

function App() {
  return (
    <main>
      <h1>GeoPulse</h1>

      <CityFilters />
      <CityDetails />
      <MapView />
      <PollutionChart />
    </main>
  );
}

export default App;
