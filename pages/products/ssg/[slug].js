import React from "react";
import { client } from "../../../lip/sanityClient";
import Link from "next/link";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      Slug product
      <div>
        {product.title}
        {product.description}
        {product.slug}
        {product.publishedAt}
      </div>
    </div>
  );
};

export default Product;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const product = await client.fetch(
    `*[_type == "product" && defined(slug.current) && !(_id in path("draft.**")) && slug.current == $slug][0]{..., "slug":slug.current}`,
    { slug }
  );

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "product"  && defined(slug.current)  && !(_id in path("drafts.**"))]{"params": {"slug":slug.current}}`
  );

  return {
    paths,
    fallback: false,
  };
};
