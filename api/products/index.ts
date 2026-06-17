import axios from "@/api";
import { routes } from "./routes";


export const productsAPI = {
    all: () => axios.get<Product[]>(routes.resource)
}