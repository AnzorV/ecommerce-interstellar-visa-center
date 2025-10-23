'use client'

import React from 'react'
import { Product } from '@/sanity.types';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className}: Props) => {
    const isOutOfStock = product?.stock === 0;
    const handleAddToCart = () => {
      window.alert("Added to Cart");
    }
  return (
    <div>
        <Button onClick={handleAddToCart} disabled={isOutOfStock}  className={cn(
            "w-full  bg-astro-green text-shop_light_bg shadow-none border border-astro-green font-semibold tracking-wide  hover:bg-astro-green/80 hover:border-astro-green/80 hoverEffect",
            className
          )}>
            <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
    </div>
  )
}

export default AddToCartButton