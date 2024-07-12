import { Category } from "@/types";

export const categories: Category[] = [
  {
    name: "Men",
    subcategories: [
      {
        name: "Outerwear",
        subcategories: [
          {
            name: "Jackets",
            items: ["Jacket 1", "Jacket 2", "Jacket 3"],
          },

          {
            name: "Shirts",
            items: ["Shirts 1", "Shirts 2", "Shirts 3"],
          },
        ],
      },

      // Add more subcategories if needed
    ],
  },
  {
    name: "Jackets",
    items: ["Jacket 1", "Jacket 2", "Jacket 3"],
  },
  {
    name: "Women",
    subcategories: [
      {
        name: "Outerwear",
        subcategories: [
          {
            name: "Jackets",
            items: ["Jacket 1", "Jacket 2", "Jacket 3"],
          },
          // Add more subcategories if needed
        ],
      },
      // Add more subcategories if needed
    ],
  },
  // Add more main categories if needed
];
