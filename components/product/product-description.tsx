// import { AddToCart } from '/components/cart/add-to-cart';
import Price from "@/components/price";
import Prose from "@/components/prose";
// import { Product } from "@/lib/shopify/types";
import { Suspense } from "react";
import { VariantSelector } from "./variant-selector";
import clsx from "clsx";

interface Product {
  title: string;
  featuredImage: string;
  handle: string;
  price: string;
  currencyCode: string;
  descriptionHtml?: string;
}

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={product.price} currencyCode={product.currencyCode} />
        </div>
      </div>
      <Suspense fallback={null}>
        {/* <VariantSelector
          options={product.options}
          variants={product.variants}
        /> */}
        <dl className="mb-8">
          <dt className="mb-4 text-sm uppercase tracking-wide">Color</dt>
          <dd className="flex flex-wrap gap-3">
            <button
              aria-disabled={true}
              disabled={false}
              title={"Blue"}
              className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              Black
            </button>
            <button
              aria-disabled={true}
              disabled={false}
              title={"Blue"}
              className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
            >
              Gray
            </button>
            <button
              aria-disabled={true}
              disabled={false}
              title={"Blue"}
              className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 cursor-default ring-2 ring-blue-600"
            >
              White
            </button>
          </dd>
        </dl>
      </Suspense>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <Suspense fallback={null}>
        {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
        <button
          aria-label="Add to cart"
          aria-disabled={false}
          className={clsx(buttonClasses, {
            "hover:opacity-90": true,
          })}
        >
          <div className="absolute left-0 ml-4"></div>
          Add To Cart
        </button>
      </Suspense>
    </>
  );
}

const buttonClasses =
  "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";
