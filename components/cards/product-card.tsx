"use client";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <BackgroundGradient className="rounded-[22px] hover:cursor-pointer max-w-sm  bg-white dark:bg-zinc-900">
      <Image
        src="/jordans_white_1.jpg"
        alt="jordans"
        width={500}
        height={500}
        loading="lazy"
        className="object-contain rounded-xl "
      />

      <div className="p-2">
        <p className="text-base truncate sm:text-lg text-black my-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400  h-[100px] text-clip overflow-y-scroll ">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>

        <Button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </Button>
      </div>
    </BackgroundGradient>
  );
};

export default ProductCard;
