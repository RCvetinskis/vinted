"use client";
import CustomPopover from "../custom-popover";
import { ArrowDown } from "lucide-react";
import CategorySelector from "./category-selector";
import { useSelectCategoryStore } from "@/store/store";
import { getItemFromSelectedObject } from "@/utils/helpers";

const SelectCategory: React.FC = () => {
  const selectedObject = useSelectCategoryStore(
    (store) => store.selectedObject
  );
  const selectedItem = getItemFromSelectedObject(selectedObject);

  const triggerCategory = (
    <div className="flex items-center justify-between text-slate-400  w-full border-b p-2">
      <p>{selectedItem ? selectedItem : "Select a category"}</p>
      <ArrowDown size={20} />
    </div>
  );

  return (
    <div>
      <CustomPopover Trigger={triggerCategory}>
        <CategorySelector />
      </CustomPopover>
    </div>
  );
};

export default SelectCategory;
