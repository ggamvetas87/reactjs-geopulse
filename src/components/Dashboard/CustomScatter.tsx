// components/Dashboard/CustomScatter.tsx

import type { ScatterPointItem } from "recharts";

type CustomScatterProps = ScatterPointItem & {
  selectedCityId: string | null;
};

export const CustomScatter = ({
  cx,
  cy,
  selectedCityId,
  payload,
}: CustomScatterProps) => {
  const isSelected = payload?.id === selectedCityId;

  return (
    <circle
        cx={cx}
        cy={cy}
        r={isSelected ? 8 : 5}
        fill={isSelected ? "#CC0000" : "#8884d8"}
        cursor="pointer"
    />
  );
};
