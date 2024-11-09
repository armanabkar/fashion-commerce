import { GridTileImage } from "./tile";
import Link from "next/link";
import { Product } from "@/lib/types";
import { homepageItems } from "@/lib/testData";

interface ThreeItemGridItemProp {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}

function ThreeItemGridItem({
  item,
  size,
  isPriority,
}: {
  item: Product;
  size: "full" | "half";
  isPriority?: boolean;
}) {
  const imageSizes = {
    full: "(min-width: 768px) 66vw, 100vw",
    half: "(min-width: 768px) 33vw, 100vw",
  };

  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={isPriority}
      >
        <GridTileImage
          src={item.featuredImage}
          fill
          sizes={imageSizes[size]}
          priority={isPriority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title,
            amount: item.price,
            currencyCode: item.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  const products = homepageItems;

  if (products.length < 3) return null;

  const [primaryProduct, secondaryProduct, tertiaryProduct] = products;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 lg:px-6 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={primaryProduct} isPriority={true} />
      <ThreeItemGridItem
        size="half"
        item={secondaryProduct}
        isPriority={true}
      />
      <ThreeItemGridItem size="half" item={tertiaryProduct} />
    </section>
  );
}
