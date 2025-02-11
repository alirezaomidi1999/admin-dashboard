import Cards from "@/components/cards/cards";
import { getOverview } from "@/services/queries/get-overview";
import { getCharts } from "@/services/queries/get-charts";
import Charts from "@/components/charts/charts";
import PrefetchHydrate from "@/components/shared/prefetch-hydrate";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl ">Dashboard</h1>
      <PrefetchHydrate queryKey={["overviews"]} queryFn={getOverview}>
        <Cards />
      </PrefetchHydrate>
      <PrefetchHydrate queryKey={["charts"]} queryFn={getCharts}>
        <Charts />
      </PrefetchHydrate>
    </div>
  );
}
