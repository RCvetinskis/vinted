import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  name: string;
  subcategories?: Category[];
  items?: string[];
}

const categories: Category[] = [
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
          // Add more subcategories if needed
        ],
      },
      // Add more subcategories if needed
    ],
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

// Dummy root category
const rootCategory: Category = {
  name: "root",
  subcategories: categories,
};

const DotWalk: React.FC = () => {
  // TODO:FInish dot walk component
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const getCurrentCategory = (): Category | undefined => {
    let currentCategory: Category | undefined = rootCategory;
    for (const segment of selectedPath) {
      currentCategory = currentCategory?.subcategories?.find(
        (cat) => cat.name === segment
      );
    }
    return currentCategory;
  };

  const handleSelectCategory = (name: string) => {
    setSelectedPath([...selectedPath, name]);
    setSelectedItem(null); // Reset selected item when category changes
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    console.log(item);
  };

  const handleBack = () => {
    setSelectedPath(selectedPath.slice(0, -1));
    setSelectedItem(null);
    if (selectedPath.length === 2) {
      setSelectedPath(selectedPath.slice(0, -2));
      setSelectedItem(null);
    }
  };

  console.log(selectedPath);
  console.log(selectedItem);
  const currentCategory = getCurrentCategory();

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-4">
        {selectedPath.map((segment, index) => (
          <div key={index} className="flex items-center">
            <span>{segment}</span>
            {index < selectedPath.length - 1 && (
              <span className="mx-2">{">"}</span>
            )}
          </div>
        ))}
      </div>
      {currentCategory?.subcategories ? (
        <Select
          onValueChange={handleSelectCategory}
          value={selectedPath[selectedPath.length - 1] || ""}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {currentCategory.subcategories.map((subcategory) => (
              <SelectItem key={subcategory.name} value={subcategory.name}>
                {subcategory.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : currentCategory?.items ? (
        <Select onValueChange={handleSelectItem} value={selectedItem || ""}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Item" />
          </SelectTrigger>
          <SelectContent>
            {currentCategory.items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div>No items found</div>
      )}
      {selectedPath.length > 0 && (
        <button
          type="button"
          className="mt-4 p-2 bg-gray-200 hover:bg-gray-300"
          onClick={handleBack}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default DotWalk;
