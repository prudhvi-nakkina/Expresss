import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const createUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/user`, userData);
};

export const httpManager = {
  createUser
};
export default httpManager;
