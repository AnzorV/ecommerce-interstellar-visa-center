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
  // Handle unlimited vs limited stock logic
  const isUnlimited = product.stockType === "unlimited";
  const stockAmount = product.stock ?? 0;
  const isOutOfStock = !isUnlimited && stockAmount <= 0;

  return (
    <div className="text-sm border-[1px] border-oxygen-blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt={product?.name || "Product image"}
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
                ${!isOutOfStock ? "group-hover:scale-105" : "opacity-50"}`}
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
              ?.map((cat: any) => (typeof cat === "string" ? cat : cat?.title))
              .join(", ")}
          </p>
        )}

        <Title className="text-sm line-clamp-1">{product?.name}</Title>

        {/* Rating */}
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

        {/* Stock Display */}
        <div className="flex items-center gap-2.5">
          <p className="font-medium">Stock:</p>
          {isUnlimited ? (
            <p className="text-astro-green/50 font-semibold">Unlimited</p>
          ) : (
            <p
              className={`${
                isOutOfStock
                  ? "text-red-600"
                  : "text-astro-green/50 font-semibold"
              }`}
            >
              {isOutOfStock ? "Unavailable" : stockAmount}
            </p>
          )}
        </div>

        {/* Price */}
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />

        {/* Add To Cart */}
        <AddToCartButton
          product={product}
          className="w-36 rounded-full"
          disabled={isOutOfStock && !isUnlimited}
        />
      </div>
    </div>
  );
};

export default ProductCard;
