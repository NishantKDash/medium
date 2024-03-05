import axios from "axios";
import { BACKEND_URL } from "../config.ts";
import { CreateBlogInput } from "@lo_ewolf/medium-common";

export default async function (body: CreateBlogInput) {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}
