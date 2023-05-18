import { createClient, groq } from "next-sanity";

import clientConfig from "./config/client-config";

export async function getProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": image[].asset->url,
      price,
      details
    }`
  );
}

export async function getBanner() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "banner"]{
      _id,
      _createdAt,
      "image": image.asset->url,
      buttonText,
      product,
      desc,
      smallText,
      midText,
      largeText1,
      largeText2,
      discount,
      saleTime
    }`
  );
}

export async function getProduct(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": image[].asset->url,
      price,
      details
    }`,
    { slug }
  );
}
