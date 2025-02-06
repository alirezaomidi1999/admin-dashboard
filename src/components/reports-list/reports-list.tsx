"use client";
import React from "react";
import { DataTable } from "@/components/data-table/data-table";
import withDataFetching from "@/hoc/withDataFetching";
import { User } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { getReportsList } from "@/services/queries/get-reports-list";
import DatatableSkeleton from "../data-table/data-table-skeleton";

function ReportsList({ data }: { data: User[] }) {
  const dataTableHeaders = Object.keys(data[0]);
  const columns: ColumnDef<User>[] = dataTableHeaders.map((key) => ({
    accessorKey: key,
    header: key.charAt(0).toUpperCase() + key.slice(1),
    cell: ({ row }) => <div>{row.getValue(key)}</div>,
  }));
  const newColumns: ColumnDef<User>[] = [...columns];

  return <DataTable data={data} columns={newColumns} />;
}
const ReportsListWithData = withDataFetching({
  queryKey: ["reportslist"],
  queryFn: getReportsList,
  skeletonLength: 1,
  parentSkeletonStyle: "flex grow w-full lg:h-[700px] h-[300px]",
  innerSkeleton: <DatatableSkeleton />,
})(ReportsList);
export default ReportsListWithData;
