import { SelectedPathObject } from "@/types";
import { create } from "zustand";

interface CategorySelectStore {
  selectedObject: SelectedPathObject | null;
  setSelectedObject: (item: SelectedPathObject | null) => void;
}

export const useSelectCategoryStore = create<CategorySelectStore>((set) => ({
  selectedObject: null,
  setSelectedObject: (object) => set({ selectedObject: object }),
}));
