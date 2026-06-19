import z from "zod";

export const checkoutUserSchema = z.object({
  name: z.string("This field is required"),
  email: z.email("should be email").min(1, 'sdf'),
  address: z.string({ error: "This field is required" }).optional(),
});
