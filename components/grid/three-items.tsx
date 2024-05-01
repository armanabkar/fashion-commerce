import { GridTileImage } from "./tile";
import Link from "next/link";

interface Product {
  title: string;
  featuredImage: string;
  handle: string;
  price: string;
  currencyCode: string;
}

interface ThreeItemGridItemProp {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}

function ThreeItemGridItem({ item, size, priority }: ThreeItemGridItemProp) {
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
      >
        <GridTileImage
          src={item.featuredImage}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            // amount: item.priceRange.maxVariantPrice.amount,
            // currencyCode: item.priceRange.maxVariantPrice.currencyCode,
            amount: item.price,
            currencyCode: item.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // const homepageItems = await getCollectionProducts({
  //   collection: "hidden-homepage-featured-items",
  // });

  // if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  // const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 lg:px-6 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem
        size="full"
        item={{
          title: "Acme Drawstring T-Shirt",
          featuredImage: "/images/7.webp",
          handle: "string",
          price: "20",
          currencyCode: "USD",
        }}
        priority={true}
      />
      <ThreeItemGridItem
        size="half"
        item={{
          title: "Acme Drawstring Bag",
          featuredImage: "/images/3.webp",
          handle: "string",
          price: "12",
          currencyCode: "USD",
        }}
        priority={true}
      />
      <ThreeItemGridItem
        size="half"
        item={{
          title: "Acme Cup",
          featuredImage: "/images/4.webp",
          handle: "string",
          price: "15",
          currencyCode: "USD",
        }}
      />
    </section>
  );
}
