import { checkoutUserSchema } from "@/schemas/checkoutSchema";
import z from "zod";

type Order = {
    userInfo: z.infer<typeof checkoutUserSchema>,
    products: Pick<Product, "id" | "qty">[]
}