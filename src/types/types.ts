export type InfoCard = {
  title: string;
  itemCount: number;
  Visual?: React.ElementType | string;
  changePercentage: number;
  comparisonPeriod:string
}
export type BarChartData = {
  month: string;
  sales: number;
};

export type PieChartData = {
  browser: string;
  visitors: number;
  fill: string;
};

export type ChartData = {
  barchart: BarChartData[];
  piechart: PieChartData[];
};