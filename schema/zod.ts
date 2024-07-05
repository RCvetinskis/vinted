import * as z from "zod";
export const itemFormSchema = z.object({
  title: z
    .string()
    .max(40, {
      message: "Title should be at most 40 characters long.",
    })
    .min(2, {
      message: "Title should be at least 2 characters long.",
    }),
  description: z.string().max(255, {
    message: "Description should be at most 255 characters long.",
  }),
  category: z.string().max(255, {
    message: "Category should be at most 255 characters long.",
  }),
  brand: z.string().max(50, {
    message: "Brand should be at most 50 characters long.",
  }),
  condition: z.string().max(50, {
    message: "Condition should be at most 50 characters long.",
  }),
  size: z
    .string()
    .max(50, {
      message: "Size should be at most 50 characters long.",
    })
    .optional(),
  colors: z
    .array(z.string())
    .max(2, {
      message: "You can select up to 2 colors.",
    })
    .optional(),
  materials: z
    .array(z.string())
    .max(3, {
      message: "You can select up to 3 materials.",
    })
    .optional(),
  price: z
    .string()
    .min(1, {
      message: "Price is required.",
    })
    .regex(/^\d*\.?\d{0,2}$/, {
      message: "Invalid price format.",
    }),
  parcelSize: z.string().max(50, {
    message: "Parcel size should be at most 50 characters long.",
  }),
});
