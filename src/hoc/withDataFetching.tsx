"use client";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// HOC برای اضافه کردن داده‌ها به کامپوننت
export default function withDataFetching<T>(config: {
  queryKey: string[];
  queryFn: () => Promise<T>;
  skeletonLength: number;
  parentSkeletonStyle: string;
  innerSkeleton?: React.ReactNode;
  errorComponent?: React.ReactNode;
}) {
  return function <P extends { data: T }>(
    WrappedComponent: React.ComponentType<P>
  ) {
    return function (props: Omit<P, "data">) {
      const { data, isLoading, isError, refetch } = useQuery({
        queryKey: config.queryKey,
        queryFn: config.queryFn,
      });
      console.log(isError);
      if (isLoading) {
        return (
          <div className="flex gap-4 grow flex-wrap">
            {Array.from({ length: config.skeletonLength }).map((_, index) => (
              <Skeleton key={index} className={config.parentSkeletonStyle}>
                {config.innerSkeleton}
              </Skeleton>
            ))}
          </div>
        );
      }

      if (isError) {
        return (
          config.errorComponent || (
            <>
              {/* ⚠ خطایی رخ داده است: {(error as Error).message} */}

              <div
                onClick={() => refetch()} // درخواست دوباره با refetch
                className="mt-4 px-4 py-2 bg-red-500 cursor-pointer rounded-sm text-white"
              >
                try again
              </div>
            </>
          )
        );
      }

      return <WrappedComponent {...(props as P)} data={data} />;
    };
  };
}
