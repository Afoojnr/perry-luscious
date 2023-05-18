// import Image from 'next/image'
// import styles from './page.module.css'



import { getProducts } from "@/sanity/sanity-utils";
import { getBanner } from "@/sanity/sanity-utils";
import { Product, FooterBanner, HeroBanner } from "@/components";

export default async function Home() {
  const products = await getProducts();
  const bannerData = await getBanner();
  // console.log(bannerData);
  // console.log(products);

  return (
    <>
      <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </>
  );
}
