import axios from "@/api";
import { routes } from "./routes";


export const productsAPI = {
    all: (queryString?: string) => axios.get<Product[]>(routes.resource + queryString)
}