"use client";
import React, { cache } from "react";
import { getOverview } from "@/services/queries/get-overview";
import Card from "../info-card/info-card";
import { InfoCard } from "@/types/types";
import withDataFetching from "@/hoc/withDataFetching";
import api from "@/services/api";

function Cards({ data }: { data: InfoCard[] }) {
  const getOverview = cache(async () => {
    const response = await api.get("overview");
    const data = response.data;
    console.log(data);
    return data;
  });
  getOverview();
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
  parentSkeletonStyle: "w-[300px] grow h-[170px]",
})(Cards);

export default CardsWithData;
