import React from "react";
import { Skeleton } from "../shadcn/ui/skeleton";

export default function DatatableSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full p-8">
      <div className="flex justify-between">
        <Skeleton className="w-[400px] h-[30px] " />
        <Skeleton className="w-[200px] h-[30px] " />
      </div>
      <div className="flex w-full">
        <Skeleton className="h-12  w-full" />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex py-2">
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <Skeleton key={colIndex} className="h-8 w-1/4 mx-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
