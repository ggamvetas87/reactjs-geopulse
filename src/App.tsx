// App.tsx

import { MapView } from "@/components/Map/MapView";
import { CityDetails } from "@/components/Dashboard/CityDetails";
import "@/App.css";

function App() {
  return (
    <main>
      <h1>GeoPulse</h1>

      <CityDetails />
      <MapView />
    </main>
  );
}

export default App;
