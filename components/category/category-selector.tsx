import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Category, SelectedPathObject } from "@/types";
import { Button } from "../ui/button";
import { useSelectCategoryStore } from "@/store/store";
import { categories } from "@/utils/categories";

// Root category
const rootCategory: Category = {
  name: "Category",
  subcategories: categories,
};
const CategorySelector = () => {
  const setSelectedObject = useSelectCategoryStore(
    (store) => store.setSelectedObject
  );
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const handleSelectCategory = (name: string) => {
    setSelectedPath([...selectedPath, name]);
    setSelectedObject(null);
  };

  const handleSelectItem = (item: string) => {
    const newSelectedObject = selectedPath.reduceRight<SelectedPathObject>(
      (acc, key) => ({ [key]: acc }),
      { item }
    );
    setSelectedObject(newSelectedObject);
  };

  const handleBack = () => {
    setSelectedPath(selectedPath.slice(0, -1));
    setSelectedObject(null);
    if (selectedPath.length === 2) {
      setSelectedPath(selectedPath.slice(0, -2));
      setSelectedObject(null);
    }
  };
  const getCurrentCategory = (): Category | undefined => {
    let currentCategory: Category | undefined = rootCategory;
    for (const segment of selectedPath) {
      currentCategory = currentCategory?.subcategories?.find(
        (cat) => cat.name === segment
      );
    }
    return currentCategory;
  };
  const currentCategory = getCurrentCategory();

  return (
    <>
      <header className="w-full shadow-lg p-2 text-vintedGreen">
        {selectedPath.length > 0 ? (
          <div className="flex  items-center justify-between  ">
            <Button
              type="button"
              onClick={handleBack}
              size={"icon"}
              variant={"outline"}
            >
              <ArrowLeft />
            </Button>

            <p>{currentCategory && currentCategory.name}</p>
          </div>
        ) : (
          <p className="text-center text-lg ">Select a category</p>
        )}
      </header>
      <div className="max-h-[400px] h-full overflow-y-auto">
        {currentCategory?.subcategories ? (
          currentCategory.subcategories.map((subcategory) => (
            <div className="w-full p-2 " key={subcategory.name}>
              <Button
                className="w-full"
                size={"lg"}
                type="button"
                variant={"ghost"}
                onClick={() => handleSelectCategory(subcategory.name)}
              >
                {subcategory.name}
              </Button>
            </div>
          ))
        ) : currentCategory?.items ? (
          <div>
            {currentCategory.items.map((item) => (
              <Button
                onClick={() => handleSelectItem(item)}
                key={item}
                className="w-full"
                size={"lg"}
                type="button"
                variant={"ghost"}
              >
                {item}
              </Button>
            ))}
          </div>
        ) : (
          <div className="w-full">No items found</div>
        )}
      </div>
    </>
  );
};

export default CategorySelector;
