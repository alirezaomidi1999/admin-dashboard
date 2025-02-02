import Cards from "@/components/cards/cards";
import { Barchart } from "@/components/charts/bar-chart";
import { Piechart } from "@/components/charts/pie-chart";
import Card from "../components/info-card/info-card";

import api from "@/services/api";
import { getOverview } from "@/services/queries/getOverview";
import { InfoCard } from "@/types/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { unstable_cache } from "next/cache";
import { getCharts } from "@/services/queries/getCharts";
import Charts from "@/components/charts/charts";

export default async function Home() {
  // const getOverview = unstable_cache(
  //   async () => {
  //     const response = await api.get("overview");
  //     const data = response.data;
  //     return data;
  //   },
  //   ["overview"],
  //   { tags: ["overview"], revalidate: 2 }
  // );
  // const data = await getOverview();
  // const data = response;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["overview"],
    queryFn: getOverview,
  });
  await queryClient.prefetchQuery({
    queryKey: ["charts"],
    queryFn: getCharts,
  });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl ">Dashboard</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Cards />
      </HydrationBoundary>

      {/* <div className="flex flex-col gap-4 xl:flex-row"> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Charts />
      </HydrationBoundary>
      {/* </div> */}
    </div>
  );
}
