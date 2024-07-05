"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const SearchInput = (props: Props) => {
  const queryCategories = ["Products", "Users"];
  const [queryCategory, setQueryCategory] = useState("Products");
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="flex gap-1 w-full mx-4">
      <Select
        onValueChange={(value: string) => setQueryCategory(value)}
        defaultValue={queryCategory}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder={queryCategory} />
        </SelectTrigger>
        <SelectContent>
          {queryCategories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="relative  w-full">
        <Input
          className="w-full px-4 py-2 "
          onChange={handleInputChange}
          placeholder="Search..."
          type="text"
          value={query}
        />
        {query && (
          <Button
            className="absolute top-0 right-0 h-full px-3"
            variant={"ghost"}
            onClick={() => setQuery("")}
          >
            <X />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
