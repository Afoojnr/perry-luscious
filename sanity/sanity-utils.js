import { createClient, groq } from "next-sanity";

import clientConfig from "./config/client-config";

export async function getProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
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
      name,
      "slug": slug.current,
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

// export async function getProject(slug: string): Promise<Project> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug }
//   );
// }

// export async function getPages(): Promise<Page[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`
//   );
// }

// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
//     { slug }
//   );
// }
