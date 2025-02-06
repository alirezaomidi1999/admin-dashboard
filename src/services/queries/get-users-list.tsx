"use client";
import api from "../api";

export const getUsersList = async () => {
  const response = await api.get("/userslist");
  const data = response.data;
  return data;
};
