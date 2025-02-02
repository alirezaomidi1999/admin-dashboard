"use client";

import api from "../api";

export const getOverview = async () => {
  const response = await api.get("/overview");
  const data = response.data;
  return data;
};
