import { InfoCard } from "@/types/types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const chartsData = {
    barchart: [
      { month: "January", sales: 186 },
      { month: "February", sales: 305 },
      { month: "March", sales: 237 },
      { month: "April", sales: 73 },
      { month: "May", sales: 209 },
      { month: "June", sales: 214 },
    ],
    piechart: [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ],
  };
  return NextResponse.json(chartsData);
}
