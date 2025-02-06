import { Report, TableData } from "@/types/types";
import { NextResponse } from "next/server";
export async function GET() {
    const reportsList:TableData<Report> = [
        { id: 1, date: '2024-02-01', type: 'Sales', description: 'Monthly sales report', status: 'Completed' },
        { id: 2, date: '2024-02-02', type: 'Inventory', description: 'Stock level analysis', status: 'Pending' },
        { id: 3, date: '2024-02-03', type: 'Users', description: 'Active vs inactive users', status: 'Completed' },
        { id: 4, date: '2024-02-04', type: 'Orders', description: 'Cancelled orders analysis', status: 'In Progress' },
        { id: 5, date: '2024-02-05', type: 'Revenue', description: 'Quarterly revenue breakdown', status: 'Completed' },
        { id: 6, date: '2024-02-06', type: 'Support', description: 'Customer support tickets', status: 'Pending' },
        { id: 7, date: '2024-02-07', type: 'Marketing', description: 'Ad campaign performance', status: 'Completed' },
        { id: 8, date: '2024-02-08', type: 'Products', description: 'Low stock products list', status: 'In Progress' },
        { id: 9, date: '2024-02-09', type: 'Feedback', description: 'Customer feedback summary', status: 'Completed' },
        { id: 10, date: '2024-02-10', type: 'Expenses', description: 'Monthly expenses overview', status: 'Pending' },
      ];
  return NextResponse.json(reportsList);
}
