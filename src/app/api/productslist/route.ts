import { Product, TableData } from "@/types/types";
import { NextResponse } from "next/server";
export async function GET() {
  const productsList: TableData<Product> = [
    { id: 1, name: "Laptop", price: 1500, stock: 5, category: "Electronics" },
    { id: 2, name: "Phone", price: 800, stock: 10, category: "Electronics" },
    { id: 3, name: "Shoes", price: 120, stock: 20, category: "Fashion" },
    {
      id: 4,
      name: "Headphones",
      price: 200,
      stock: 15,
      category: "Electronics",
    },
    { id: 5, name: "Watch", price: 300, stock: 8, category: "Accessories" },
    { id: 6, name: "Backpack", price: 90, stock: 12, category: "Fashion" },
    { id: 7, name: "Tablet", price: 600, stock: 7, category: "Electronics" },
    { id: 8, name: "Keyboard", price: 100, stock: 25, category: "Electronics" },
    {
      id: 9,
      name: "Sunglasses",
      price: 150,
      stock: 18,
      category: "Accessories",
    },
    { id: 10, name: "Chair", price: 250, stock: 5, category: "Furniture" },
  ];
  return NextResponse.json(productsList);
}
