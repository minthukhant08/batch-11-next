import axios from "@/api";
import { routes } from "./routes";

export const productAPI = {
    all: () => axios.get<Product[]>(routes.resource,),
    create: (product : Omit<Product, "id">) => axios.post<Product>(routes.resource, product),
    update: (product: Product) => axios.put<Product>(routes.resource + "/" + product.id, product) ,
    delete: (id: number) => axios.delete<Product>(routes.resource + "/" + id)
}