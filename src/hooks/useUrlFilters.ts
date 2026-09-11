// hooks/useUrlFilters.ts

import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDashboardStore, type PollutionFilter } from "@/store/dashboardStore";

export const useUrlFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = useDashboardStore(
        state => state.searchQuery
    );

    const pollutionFilter = useDashboardStore(
        state => state.pollutionFilter
    );

    const setSearchQuery = useDashboardStore(
        state => state.setSearchQuery
    );

    const setPollutionFilter = useDashboardStore(
        state => state.setPollutionFilter
    );

    const initialized = useRef(false);

    // URL -> Zustand
    useEffect(() => {
        if (initialized.current) {
            return;
        }

        const urlSearch = searchParams.get("search");
        const urlPollution = searchParams.get("pollution");

        if (urlSearch !== null) {
            setSearchQuery(urlSearch);
        }

        if (
            urlPollution === "all" ||
            urlPollution === "low" ||
            urlPollution === "moderate" ||
            urlPollution === "high" ||
            urlPollution === "veryhigh"
        ) {
            setPollutionFilter(
                urlPollution as PollutionFilter
            );
        }

        initialized.current = true;
    }, [
        searchParams,
        setSearchQuery,
        setPollutionFilter
    ]);

    // Zustand -> URL
    useEffect(() => {
        if (!initialized.current) {
            return;
        }

        const params = new URLSearchParams();

        if (searchQuery) {
            params.set("search", searchQuery);
        }

        if (pollutionFilter !== "all") {
            params.set("pollution", pollutionFilter);
        }

        setSearchParams(params, { replace: true });
    }, [
        searchQuery,
        pollutionFilter,
        setSearchParams,
    ]);
};
