import api from "./api";

export const getPortfolio = async () => {
  const res = await api.get("/amdin");
  return res.data;
};