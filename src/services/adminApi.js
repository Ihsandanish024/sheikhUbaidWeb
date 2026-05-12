import api from "./api"; // your main axios instance

// 🔐 Admin Login
export const loginAdmin = async (loginData) => {
  const response = await api.post("/admin/login", loginData);
  return    response.data;
};

