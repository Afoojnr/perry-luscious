// import Image from 'next/image'
// import styles from './page.module.css'

import { getProducts } from "@/sanity/sanity-utils";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.name}</div>))}
    </div>
  );
}
