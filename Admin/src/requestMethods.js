import axios from "axios";
const BASE_URL="http://localhost:8800/api/v1/";
export const url = "http://localhost:8800/api/v1/";

const TOKEN = "";

export const publicRequest = axios.create({
    baseURL:BASE_URL
});

export const userRequest =axios.create(
   {
    baseURL:BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
   } 
)