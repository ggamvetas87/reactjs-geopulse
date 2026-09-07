// components/Dashboard/CustomBar.tsx

import type { BarShapeProps } from "recharts";

type CustomBarProps = BarShapeProps & {
    // x?: number,
    // y?: number,
    // width?: number,
    // height?: number,
    // payload?: {
    //     id: string,
    //     name: string,
    //     pollution: number,
    // }
    selectedCityId: string | null;
    onBarClick?: () => void;
};

export const CustomBar = ({ x, y, width = 60, height = 200, payload, selectedCityId, onBarClick }: CustomBarProps) => {
    const isSelected = payload?.id === selectedCityId;

    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={isSelected ? "#CC0000" : "#8884d8"}
            cursor="pointer"
            onClick={onBarClick}
        />
    );
};
