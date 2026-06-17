import axios from "axios";
import { redirect } from "next/navigation";


const authInstant = axios.create({
  baseURL: process.env.BASE_URL,
});

export const withoutAuthInstant = axios.create({
  baseURL: process.env.BASE_URL,
});

export const clientInstant = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const userClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_BASE_URL,
});


authInstant.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = `Bearer ssdaf adf asdf `;
    config.headers['X-App-Version'] = '1.0.0';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authInstant.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response.status == 404){
    //   redirect("/")
    // }
    console.log("error..", error.response)
    return Promise.reject(error);
  }
);


export default authInstant
