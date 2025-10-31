"use client";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const {items} = useStore();
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-6 hover:text-gravity-blue hoverEffect" />
      <span className="absolute -top-1 -right-1 text-xs w-3.5 h-3.5 text-center text-white bg-oxygen-blue rounded-full font-semibold flex items-center justify-center">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
