import Layout from "../Components/Layout";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  return (
    <>
      <Layout />
      <h1 className="text-3xl mt-20">Our Products</h1>
      <ProductCard />
    </>
  );
};

export default Products;
