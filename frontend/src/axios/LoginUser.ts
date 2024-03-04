import axios from "axios";
import { BACKEND_URL } from "../config.ts";
import { SigninInput } from "@lo_ewolf/medium-common";

export default async function (body: SigninInput) {
  const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, body);
  return res;
}
