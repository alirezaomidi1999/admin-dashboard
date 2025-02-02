"use client";
import api from "../api";

export const getCharts = async () => {
  const response = await api.get("/charts");
  const data = response.data;
  return data;
};
