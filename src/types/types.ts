export type InfoCard = {
  title: string;
  itemCount: number;
  Visual?: React.ElementType | string;
  changePercentage: number;
  comparisonPeriod: string;
};
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
export type TableData<T> = T[];
export type User = {
  id: number;
  name: string;
  role:string;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}
export type Report = {
  id: number;
  date: string;
  type: 'Sales' | 'Inventory' | 'Users' | 'Orders' | 'Revenue' | 'Support' | 'Marketing' | 'Products' | 'Feedback' | 'Expenses';
  description: string;
  status: 'Completed' | 'Pending' | 'In Progress';
};