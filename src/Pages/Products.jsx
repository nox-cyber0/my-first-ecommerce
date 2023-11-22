import React from 'react';
import Layout from '../Components/Layout';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  return (
    <>
      <Layout>
        <section>
          <h1 className="text-3xl mb-6 font-semibold text-amber-500">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 xl:gap-12">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;