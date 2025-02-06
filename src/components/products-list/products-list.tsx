"use client";
import React from "react";
import { DataTable } from "@/components/data-table/data-table";
import withDataFetching from "@/hoc/withDataFetching";
import { User } from "@/types/types";
import { Skeleton } from "../shadcn/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../shadcn/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { Checkbox } from "../shadcn/ui/checkbox";
import { getProductsList } from "@/services/queries/get-products-list";
import DatatableSkeleton from "../data-table/data-table-skeleton";

function ProductsList({ data }: { data: User[] }) {
  const dataTableHeaders = Object.keys(data[0]);
  const columns: ColumnDef<User>[] = dataTableHeaders.map((key) => ({
    accessorKey: key,
    header: key.charAt(0).toUpperCase() + key.slice(1),
    cell: ({ row }) => <div>{row.getValue(key)}</div>,
  }));
  const newColumns: ColumnDef<User>[] = [...columns];

  return <DataTable data={data} columns={newColumns} />;
}
const ProductsListWithData = withDataFetching({
  queryKey: ["productslist"],
  queryFn: getProductsList,
  skeletonLength: 1,
  parentSkeletonStyle: "flex grow w-full lg:h-[700px] h-[300px]",
  innerSkeleton: <DatatableSkeleton />,
})(ProductsList);
export default ProductsListWithData;
