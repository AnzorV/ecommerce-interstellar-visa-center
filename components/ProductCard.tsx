"use client";

import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductSideMenu from "./ProductSideMenu";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  // --- Stock Logic ---
  const isUnlimited = product?.stockType === "unlimited";
  const stockAmount = product?.stock ?? 0;
  const isOutOfStock = !isUnlimited && stockAmount <= 0;
  // --------------------

  return (
    <div className="text-sm border-[1px] border-oxygen-blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="ProductImage"
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
                ${
                  !isOutOfStock
                    ? "group-hover:scale-105"
                    : "opacity-50 cursor-not-allowed"
                }`}
            />
          </Link>
        )}
        <ProductSideMenu product={product} />

        {product?.status === "sale" ? (
          <p className="absolute top-2 left-2 z-10 text-xs border border-black px-2 rounded-full group-hover:border-green-300 hover:text-astro-green hoverEffect">
            Sale!
          </p>
        ) : (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-astro-orange/50 p-1 rounded-full group-hover:border-astro-orange hover:text-astro-green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-astro-orange/50 group-hover:text-astro-orange hoverEffect"
            />
          </Link>
        )}
      </div>

      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {product?.categories
              .map((cat: { title?: string } | string) =>
                typeof cat === "string" ? cat : cat?.title
              )
              .join(", ")}
          </p>
        )}

        <Title className="text-sm line-clamp-1">{product?.name}</Title>

        {/* Star Ratings */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4 ? "text-astro-green" : "text-shop_light_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">
            5 Reviews
          </p>
        </div>

        {/* Stock Info */}
        <div className="flex items-center gap-2.5">
          {isUnlimited ? (
            <>
              <p className="font-semibold text-astro-green/80">In Stock</p>
              <p className="text-xs font-medium text-shop_light_text">
                (Unlimited)
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold">In Stock</p>
              <p
                className={`${
                  isOutOfStock
                    ? "text-red-600 font-semibold"
                    : "text-astro-green/90 font-bold"
                }`}
              >
                {isOutOfStock ? "unavailable" : stockAmount}
              </p>
            </>
          )}
        </div>

        {/* Price */}
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />

        {/* Add to Cart */}
        <AddToCartButton product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
