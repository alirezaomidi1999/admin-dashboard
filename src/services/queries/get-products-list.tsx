"use client";
import api from "../api";

export const getProductsList = async () => {
  const response = await api.get("/productslist");
  const data = response.data;
  return data;
};
