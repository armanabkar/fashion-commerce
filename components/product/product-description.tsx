// import { AddToCart } from '/components/cart/add-to-cart';
import Price from "@/components/price";
import Prose from "@/components/prose";
import { Suspense } from "react";
import { VariantSelector } from "./variant-selector";
import clsx from "clsx";
import { Product } from "@/lib/types";

export function ProductDescription({ product }: { product: Product }) {
  const {
    title,
    price,
    currencyCode,
    descriptionHtml,
    options,
    variants,
    availableForSale,
  } = product;

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={price} currencyCode={currencyCode} />
        </div>
      </div>
      <Suspense fallback={null}>
        <VariantSelector options={options} variants={variants} />
      </Suspense>

      {descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={descriptionHtml}
        />
      ) : null}

      <Suspense fallback={null}>
        <button
          aria-label="Add to cart"
          aria-disabled={!availableForSale}
          className={clsx(buttonClasses, {
            "hover:opacity-90": availableForSale,
            disabledClasses: !availableForSale,
          })}
        >
          <div className="absolute left-0 ml-4"></div>
          {availableForSale ? "Add To Cart" : "Out Of Stock"}
        </button>
      </Suspense>
    </>
  );
}

const buttonClasses =
  "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";
