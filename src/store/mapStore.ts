// store/mapStore.ts

import { create } from "zustand";

interface MapState {
    showHeatmap: boolean;
    toggleHeatmap: () => void;
}

export const useMapStore = create<MapState>((set) => ({
    showHeatmap: true,

    toggleHeatmap: () =>
        set((state) => ({
            showHeatmap: !state.showHeatmap,
        }))
}));
