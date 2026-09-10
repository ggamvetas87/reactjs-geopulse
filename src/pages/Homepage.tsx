// pages/Homepage.tsx

import { useCitiesQuery } from "@/hooks/useCitiesQuery";
import { MainLayout } from "@/layouts/MainLayout";
import { DashboardStats } from "@/components/Dashboard/DashboardStats";
import { MapView } from "@/components/Map/MapView";
import { CityDetails } from "@/components/Dashboard/CityDetails";
import { PollutionChart } from "@/components/Dashboard/PollutionChart";
import { CityFilters } from "@/components/Dashboard/CityFilters";
import { LoadingOrError } from "@/components/LoadingOrError";

export const Homepage = () => {
  const {
    data: cities,
    isLoading,
    isError,
  } = useCitiesQuery();

  if (isLoading || isError) {
    return (
      <MainLayout>
        <LoadingOrError
          isLoading={isLoading}
          isError={isError}
        />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <CityFilters />

      <DashboardStats cities={cities ?? []} />
      <div className="dashboard-map">
        <MapView cities={cities ?? []} />

        <aside className="city-details">
          <CityDetails cities={cities ?? []} />
        </aside>
      </div>
      
      <PollutionChart cities={cities ?? []} />
    </MainLayout>
  );
};
