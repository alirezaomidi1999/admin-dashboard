"use client";
import React from "react";
import { Barchart } from "./bar-chart";
import { Piechart } from "./pie-chart";
import withDataFetching from "@/hoc/withDataFetching";
import { getCharts } from "@/services/queries/getCharts";
import { ChartData } from "@/types/types";

function Charts({ data }: { data: ChartData }) {
  return (
    <div className="flex gap-4 flex-wrap">
      <Barchart data={data.barchart} />
      <Piechart data={data.piechart} />
    </div>
  );
}
const ChartsWithData = withDataFetching({
  queryKey: ["charts"],
  queryFn: getCharts,
  skeletonLength: 2,
  skeletonStyle: "flex grow w-[300px] lg:h-[400px] h-[300px]",
})(Charts);
export default ChartsWithData;
