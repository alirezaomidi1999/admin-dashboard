import React from "react";
import ReportsList from "@/components/reports-list/reports-list";
import PrefetchHydrate from "@/components/shared/prefetch-hydrate";
import { getReportsList } from "@/services/queries/get-reports-list";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl ">Reports List</h1>
      <PrefetchHydrate queryKey={["reportslist"]} queryFn={getReportsList}>
        <ReportsList/>
      </PrefetchHydrate>
    </div>
  );
}
