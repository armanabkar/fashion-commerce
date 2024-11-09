import Grid from "@/components/grid";
import { GridTileImage } from "@/components/grid/tile";
import Link from "next/link";
import { Product } from "@/lib/types";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product, index) => (
        <Grid.Item key={index} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.price,
                currencyCode: product.currencyCode,
              }}
              src={product.featuredImage}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
