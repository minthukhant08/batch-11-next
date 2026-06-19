"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription,
    FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { checkoutAction } from "./actions";
import { checkoutUserSchema } from "@/schemas/checkoutSchema";
import { ordersAPI } from "@/api/orders";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";



type Schema = z.infer<typeof checkoutUserSchema>;

export default function CheckForm() {
    const { cartItems, clearCart } = useCartStore()
    const router = useRouter()
    const form = useForm<Schema>({
        resolver: zodResolver(checkoutUserSchema as any),
        defaultValues: {
            name: "",
            email: "",
            address: "",
        }
    });

    const {
        formState: { isSubmitting, isSubmitSuccessful },
    } = form;

    const handleSubmit = form.handleSubmit(async (data: Schema) => {
        try {
            await checkoutAction({
                userInfo: data,
                products: cartItems.map((item) => {
                    return { id: item.id, qty: item.qty }
                })
            })
            form.reset();
            clearCart()
        } catch (error) {
        }
    });

    if (isSubmitSuccessful) {
        router.push("/")
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border max-w-3xl mx-auto"
        >
            <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
                <h1 className="mt-6 mb-1 font-extrabold text-3xl tracking-tight col-span-full">
                    Checkout Form
                </h1>

                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="name">Name *</FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                type="text"
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your Name"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="email">Email *</FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                type="text"
                                onChange={(e) => {
                                    field.onChange(e.target.value);
                                }}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your Email"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="address"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="address">Address </FieldLabel>
                            <Textarea
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id="address"
                                placeholder="Enter your Address"
                            />
                            <FieldDescription>A multi-line text input field</FieldDescription>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />


            </FieldGroup>
            <div className="flex justify-end items-center w-full">
                <Button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </form>
    );
}
