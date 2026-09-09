// pages/Homepage.tsx

import { useCitiesQuery } from "@/hooks/useCitiesQuery";
import { MainLayout } from "@/layouts/MainLayout";
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

  let content;
  
  if (isLoading || isError) {
    content = <LoadingOrError isLoading={isLoading} isError={isError} />;
  } else {
    content = (
      <>
        <CityFilters />
        <CityDetails cities={cities ?? []} />
        <MapView cities={cities ?? []} />
        <PollutionChart cities={cities ?? []} />
      </>
    );
  }

  return (
    <MainLayout>
      {content}
    </MainLayout>
  );
};
