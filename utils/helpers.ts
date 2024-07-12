import { SelectedObject } from "@/types";

export const getItemFromSelectedObject = (
  obj: SelectedObject | null
): string | null => {
  if (obj === null || typeof obj !== "object") {
    return null; // Return null if input is invalid
  }

  // Base case: if the object has an 'item' property, return it
  if (obj.item) {
    return obj.item;
  }

  // Recursively search through each property
  for (const key in obj) {
    const value = getItemFromSelectedObject(obj[key]);
    if (value) {
      return value; // Return the first found item
    }
  }

  return null; // Return null if no item is found
};
