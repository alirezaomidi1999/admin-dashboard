import { InfoCard } from "@/types/types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const infoCards: InfoCard[] = [
    {
      title: "Total Users",
      itemCount: 40689,
      Visual: "/images/Users.png",
      changePercentage: 8.6,
      comparisonPeriod: "yesterday",
    },
    {
      title: "Total Order",
      itemCount: 10293,
      Visual: "/images/Orders.png",
      changePercentage: 1.3,
      comparisonPeriod: "past weak",
    },
    {
      title: "Total Sales",
      itemCount: 40689,
      Visual: "/images/Sales.png",
      changePercentage: -4.3,
      comparisonPeriod: "yesterday",
    },
    {
      title: "Total Pending",
      itemCount: 40689,
      Visual: "/images/Pending.png",
      changePercentage: 1.8,
      comparisonPeriod: "yesterday",
    },
  ];
  return NextResponse.json(infoCards);
}
