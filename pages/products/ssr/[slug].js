import Link from "next/link";
import { client } from "../../../lip/sanityClient";

const Product = ({ products }) => {
  console.log(products);
  return (
    <Link href={`/products/ssr/${products.slug}`}>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
      hello
    </Link>
  );
};

export default Product;

export const getServerSideProps = async () => {
  const products = await client.fetch(
    `*[_type == "product"  && defined(slug.current)  && !(_id in path("drafts.**"))]{..., "slug":slug.current}`
  );

  return {
    props: {
      products,
    },
  };
};
