import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

interface PrefetchHydrateProps {
  queryKey: string[];
  queryFn: () => Promise<any>;
  children: React.ReactNode;
}

export default async function PrefetchHydrate({
  queryKey,
  queryFn,
  children,
}: PrefetchHydrateProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
