import axios from "axios";
import { BACKEND_URL } from "../config.ts";

export default async function () {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}
