"use client";
import api from "../api";

export const getReportsList = async () => {
  const response = await api.get("/reportslist");
  const data = response.data;
  return data;
};
