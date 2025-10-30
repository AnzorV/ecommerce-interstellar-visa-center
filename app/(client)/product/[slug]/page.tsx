import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import FavouriteButton from "@/components/FavouriteButton";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/queries";
import { Mail, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { RxBorderSplit } from "react-icons/rx";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <Container className="flex flex-col md:flex-row gap-10 py-10">
      {product?.images && (
        <ImageView images={product?.images} isStock={product?.stock} />
      )}

      <div className="w-full md:w-1/2 flex flex-col gap-5">
        {/* Product Info */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <p className="text-sm text-gray-600 tracking-wide">
            {product?.description}
          </p>
          <div className="flex items-center gap-0.5 text-xs">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="text-shop_light_green"
                fill="#3b9c3c"
                viewBox="0 0 24 24"
                width="12"
                height="12"
              >
                <path d="M12 .587l3.668 7.568L24 9.753l-6 5.857 1.416 8.264L12 19.771l-7.416 4.103L6 15.61 0 9.753l8.332-1.598z" />
              </svg>
            ))}
            <p className="font-semibold">(120)</p>
          </div>
        </div>

        {/* Price and Availability */}
        <div className="space-y-2 border-t border-b border-gray-200 py-5">
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-lg font-bold"
          />
          <p
            className={`px-4 py-1.5 font-semibold rounded-lg ${
              product?.stock === 0
                ? "bg-red-100 text-red-600"
                : "text-green-600 bg-green-100"
            }`}
          >
            {(product?.stock as number) > 0
              ? "Available for Instant Delivery"
              : "Out of Stock"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2.5 lg:gap-3">
          <AddToCartButton product={product} />
          <FavouriteButton showProduct={true} product={product} />
        </div>

        <ProductCharacteristics product={product} />

        {/* Extra Options */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <RxBorderSplit className="text-lg" />
            <p>Compare Certificates</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <FaRegQuestionCircle className="text-lg" />
            <p>Ask about Certificate</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <FiShare2 className="text-lg" />
            <p>Share</p>
          </div>
        </div>

        {/* Certificate Info Section */}
        <div className="flex flex-col">
          <div className="border border-lightColor/25 border-b-0 p-3 flex items-center gap-2.5">
            <Mail size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">
                Instant Email Delivery
              </p>
              <p className="text-sm text-gray-500">
                Your certificate will be sent to your registered email
                immediately after purchase.
              </p>
            </div>
          </div>
          <div className="border border-lightColor/25 p-3 flex items-center gap-2.5">
            <ShieldCheck size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">
                Secure & Non-Refundable
              </p>
              <p className="text-sm text-gray-500">
                All certificates are final sale and non-refundable once
                delivered. Please verify your email before purchasing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
