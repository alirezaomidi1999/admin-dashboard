"use client";
import api from "../api";

export const getCharts = async () => {
  const response = await api.get("/charts");
  const data = response.data;
  console.log(response,data)
  // if (response.statusText == "OK") throw new Error("دریافت اطلاعات کاربران ناموفق بود!");
  return data;
};
