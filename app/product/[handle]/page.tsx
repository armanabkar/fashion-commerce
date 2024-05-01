import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GridTileImage } from "@/components/grid/tile";
import Footer from "@/components/footer";
import { Gallery } from "@/components/product/gallery";
import { ProductDescription } from "@/components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants";
// import { Image } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import { Image } from "@/lib/shopify/types";

interface Product {
  title: string;
  featuredImage: string;
  handle: string;
  price: string;
  currencyCode: string;
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {
//   const product = await getProduct(params.handle);

//   if (!product) return notFound();

//   const { url, width, height, altText: alt } = product.featuredImage || {};
//   const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//   return {
//     title: product.seo.title || product.title,
//     description: product.seo.description || product.description,
//     robots: {
//       index: indexable,
//       follow: indexable,
//       googleBot: {
//         index: indexable,
//         follow: indexable,
//       },
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt,
//             },
//           ],
//         }
//       : null,
//   };
// }

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = {
    id: "1",
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
    availableForSale: true,
    description: "sasasa",
    descriptionHtml: "<small>100% combed ringspun cotton</small>",
    images: [
      { url: "/images/1-1.webp", altText: "Acme Baby Cap" },
      { url: "/images/1-2.webp", altText: "Acme Baby Capa" },
      { url: "/images/1-3.webp", altText: "Acme Baby Cap" },
    ],
  };

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.currencyCode,
      highPrice: product.price,
      lowPrice: product.price,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-6">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.map((image: any) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  // const relatedProducts = await getProductRecommendations(id);

  const relatedProducts: Product[] = [
    {
      title: "Acme Baby Cap",
      featuredImage: "/images/1-1.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
    {
      title: "Acme Mug",
      featuredImage: "/images/6.webp",
      handle: "string",
      price: "15",
      currencyCode: "USD",
    },
    {
      title: "Acme Hoodie",
      featuredImage: "/images/5.webp",
      handle: "string",
      price: "50",
      currencyCode: "USD",
    },
    {
      title: "Acme Baby Onesie",
      featuredImage: "/images/2.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
    {
      title: "Acme Baby Cap",
      featuredImage: "/images/1-1.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
    {
      title: "Acme Mug",
      featuredImage: "/images/6.webp",
      handle: "string",
      price: "15",
      currencyCode: "USD",
    },
    {
      title: "Acme Hoodie",
      featuredImage: "/images/5.webp",
      handle: "string",
      price: "50",
      currencyCode: "USD",
    },
    {
      title: "Acme Baby Onesie",
      featuredImage: "/images/2.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
    {
      title: "Acme Baby Cap",
      featuredImage: "/images/1-1.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
    {
      title: "Acme Mug",
      featuredImage: "/images/6.webp",
      handle: "string",
      price: "15",
      currencyCode: "USD",
    },
    {
      title: "Acme Hoodie",
      featuredImage: "/images/5.webp",
      handle: "string",
      price: "50",
      currencyCode: "USD",
    },
    {
      title: "Acme Baby Onesie",
      featuredImage: "/images/2.webp",
      handle: "string",
      price: "10",
      currencyCode: "USD",
    },
  ];

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
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
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
