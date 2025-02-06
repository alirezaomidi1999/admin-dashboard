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
  innerSkeleton?: React.ReactNode; // افزودن innerSkeleton به config
}) {
  return function <P extends { data: T }>(
    WrappedComponent: React.ComponentType<P>
  ) {
    return function (props: Omit<P, "data">) {
      const { data, isLoading } = useQuery({
        queryKey: config.queryKey,
        queryFn: config.queryFn,
      });

      if (isLoading) {
        return (
          <div className="flex gap-4 grow flex-wrap">
            {Array.from({ length: config.skeletonLength }).map((_, index) => (
              <Skeleton key={index} className={config.parentSkeletonStyle}>
                {/* استفاده از innerSkeleton از config */}
                {config.innerSkeleton}
              </Skeleton>
            ))}
          </div>
        );
      }

      return <WrappedComponent {...(props as P)} data={data} />;
    };
  };
}
