"use client";
import React from "react";
import { getOverview } from "@/services/queries/getOverview";
import Card from "../info-card/info-card";
import { InfoCard } from "@/types/types";
import withDataFetching from "@/hoc/withDataFetching";

type CardsProps = {
  data: InfoCard[];
};

function Cards({ data }: CardsProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          itemCount={card.itemCount}
          Visual={card.Visual}
          changePercentage={card.changePercentage}
          comparisonPeriod={card.comparisonPeriod}
        />
      ))}
    </div>
  );
}
const CardsWithData = withDataFetching({
  queryKey: ["overview"],
  queryFn: getOverview,
  skeletonLength: 4,
  skeletonStyle: "w-[300px] grow h-[170px]",
})(Cards);

export default CardsWithData;
