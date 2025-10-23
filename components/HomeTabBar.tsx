import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            className={
              `border border-astro-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-astro-green hover:border-astro-green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-astro-green text-white border-astro-green" : "bg-astro-green/20"}`
            }
            key={item?.title}
          >
            {item?.title}{" "}
          </button>
        ))}
      </div>
      <Link
        className={
          "border border-astro-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-astro-green hover:border-astro-green hover:text-white hoverEffect"
        }
        href={"/visa"}
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
