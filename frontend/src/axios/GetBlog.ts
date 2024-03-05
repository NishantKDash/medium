import axios from "axios";
import { BACKEND_URL } from "../config.ts";

export default async function (id: string) {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}
