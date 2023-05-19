import { getProduct, getProducts } from "@/sanity/sanity-utils";

import ProductInfo from "@/components/ProductInfo";

export default async function ProductDetails({ params: { slug } }) {
  const products = await getProducts();
  const product = await getProduct(slug);

  return (
    <>
      <ProductInfo product={product} products={products} />
    </>
  );
}
