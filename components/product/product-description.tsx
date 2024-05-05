// import { AddToCart } from '/components/cart/add-to-cart';
import Price from "@/components/price";
import Prose from "@/components/prose";
import { Suspense } from "react";
import { VariantSelector } from "./variant-selector";
import clsx from "clsx";
import { Product } from "@/lib/types";

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
        <VariantSelector
          options={product.options}
          variants={product.variants}
        />
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
