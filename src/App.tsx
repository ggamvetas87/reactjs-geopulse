// App.tsx

import { MapView } from "@/components/Map/MapView";
import { CityDetails } from "@/components/Dashboard/CityDetails";
import { PollutionChart } from "@/components/Dashboard/PollutionChart";
import "@/App.css";

function App() {
  return (
    <main>
      <h1>GeoPulse</h1>

      <CityDetails />
      <MapView />
      <PollutionChart />
    </main>
  );
}

export default App;
