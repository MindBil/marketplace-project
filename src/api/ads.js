import axios from "axios";
import { API } from "./const";

export const fetchAds = async () => {
  const response = await axios.get(`${API}/ads`);
  return response.data;
};