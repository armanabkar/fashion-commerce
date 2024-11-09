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
    <Grid>
      {products.map((product) => (
        <Grid.Item key={product.id}>
          <Link href={`/product/${product.handle}`}>
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
    </Grid>
  );
}
