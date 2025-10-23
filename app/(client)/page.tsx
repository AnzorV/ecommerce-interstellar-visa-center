import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";
import React from "react";
import { getCategories } from '@/sanity/queries';
import ShopByBrands from "@/components/ShopByBrands";
import LatestBlog from "@/components/LatestBlog";
 
const Home = async() => {
  const categories = await getCategories(6);
  return (
    <Container>
      <HomeBanner />

        <ProductGrid />
        <HomeCategories categories={categories} />
        <ShopByBrands />
        <LatestBlog />
    </Container>
  );
};

export default Home;
