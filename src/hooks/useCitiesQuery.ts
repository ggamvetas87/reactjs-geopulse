// hooks/useCitiesQuery.ts

import { useQuery } from "@tanstack/react-query";
import { getCities } from "@/api/cities";

export const useCitiesQuery = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
};
