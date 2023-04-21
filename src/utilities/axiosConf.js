import axios from "axios";
import { useAuthUser } from "../stores/auth";


const BASEURL = 'http://74.235.75.24/solutech_task_app/public/api/';
//const BASEURL = 'http://localhost/solutech_task_app/public/api/';

const axiosApi = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "Application/json", Accept: "application/json", },
});

const axiosAuthApi = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "Application/json",
    Accept: "application/json",
  },
});

axiosAuthApi.interceptors.request.use((config) => {
  const userStore = useAuthUser();
  const token = userStore.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

const getErrorMessageFromList = (list) => {
  if(!Boolean(list))
  {
    return "";
  }
  return list.join("\n")
}
export { axiosAuthApi, axiosApi, getErrorMessageFromList};
