import { TableData, User } from "@/types/types";
import { NextResponse } from "next/server";
export async function GET() {
  const userlist: TableData<User> = [
    {
      id: 1,
      name: "Ali",
      email: "ali@example.com",
      role: "Admin",
      status: "success",
    },
    {
      id: 2,
      name: "Sara",
      email: "sara@example.com",
      role: "User",
      status: "pending",
    },
    {
      id: 3,
      name: "Reza",
      email: "reza@example.com",
      role: "Admin",
      status: "processing",
    },
    {
      id: 4,
      name: "Mina",
      email: "mina@example.com",
      role: "User",
      status: "failed",
    },
    {
      id: 5,
      name: "Hassan",
      email: "hassan@example.com",
      role: "Admin",
      status: "success",
    },
    {
      id: 6,
      name: "Zahra",
      email: "zahra@example.com",
      role: "User",
      status: "processing",
    },
    {
      id: 7,
      name: "Mehdi",
      email: "mehdi@example.com",
      role: "Admin",
      status: "pending",
    },
    {
      id: 8,
      name: "Niloofar",
      email: "niloofar@example.com",
      role: "User",
      status: "failed",
    },
    {
      id: 9,
      name: "Omid",
      email: "omid@example.com",
      role: "Admin",
      status: "success",
    },
    {
      id: 10,
      name: "Parisa",
      email: "parisa@example.com",
      role: "User",
      status: "processing",
    },
    {
      id: 11,
      name: "Kian",
      email: "kian@example.com",
      role: "Admin",
      status: "pending",
    },
    {
      id: 12,
      name: "Elham",
      email: "elham@example.com",
      role: "User",
      status: "success",
    },
  ];
  return NextResponse.json(userlist);
}
