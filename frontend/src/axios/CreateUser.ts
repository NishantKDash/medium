import axios from "axios";
import { BACKEND_URL } from "../config.ts";
import { SignupInput } from "@lo_ewolf/medium-common";

export default async function (body: SignupInput) {
  const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, body);
  return res;
}
