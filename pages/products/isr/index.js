import Link from "next/link";
import { client } from "../../../lip/sanityClient";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div>
      hello SSR
      {products.map((product) => (
        <Link href={`/products/isr/${product.slug}`} key={product._id}>
          <p>{product.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const products = await client.fetch(
    `*[_type == "product"  && defined(slug.current)  && !(_id in path("drafts.**"))]{..., "slug":slug.current}`
  );

  return {
    props: {
      products,
    },
  };
};
