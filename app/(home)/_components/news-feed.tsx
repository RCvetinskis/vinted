import ProductCard from "@/components/cards/product-card";
import React from "react";

type Props = {};

const NewsFeed = (props: Props) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default NewsFeed;
