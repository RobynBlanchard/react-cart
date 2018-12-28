import axios from "axios";
import { AWS_PRODUCT_API_URL, AWS_PRODUCT_API_KEY } from "./config";

export function fetchProducts() {
  return axios.get(
    AWS_PRODUCT_API_URL,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": AWS_PRODUCT_API_KEY
      }
    }
  );
}
