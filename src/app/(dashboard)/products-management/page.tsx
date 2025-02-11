import ProductsList from "@/components/products-list/products-list";
import PrefetchHydrate from "@/components/shared/prefetch-hydrate";
import { getProductsList } from "@/services/queries/get-products-list";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl ">Products List</h1>
      <PrefetchHydrate queryKey={["userslist"]} queryFn={getProductsList}>
        <ProductsList/>
      </PrefetchHydrate>
    </div>
  );
}
