import axios from "axios";


axios.defaults.baseURL = 'https://drf-api-rest-framework-9085a34ad688.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();