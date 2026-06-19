import axios from "@/api";
import { routes } from "./routes";

export const ordersAPI = {
    submitOrder : (order: Orders) => axios.post(routes.resource, order )
}