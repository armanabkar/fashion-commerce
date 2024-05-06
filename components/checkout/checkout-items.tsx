"use client";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { cartItems } from "@/lib/testData";
import Price from "@/components/price";
import { DEFAULT_OPTION } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import Link from "next/link";
import { DeleteItemButton } from "@/components/cart/delete-item-button";
import { EditItemQuantityButton } from "@/components/cart/edit-item-quantity-button";
import { MerchandiseSearchParams } from "@/lib/types";

export default function CheckoutItems() {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <p className="lg:hidden flex justify-between items-center">
        <button
          className="text-blue-600 flex items-center gap-2"
          onClick={() => setHidden(!hidden)}
        >
          <ShoppingCartIcon className="h-4" />
          {hidden ? "Show Order Summary" : "Hide Order Summary"}
        </button>
        <span className="text-xl font-bold dark:text-white">$30.00</span>
      </p>

      <div className={`${hidden ? "hidden lg:block" : "block"}`}>
        {cartItems.lines.map((item, i) => {
          const merchandiseSearchParams = {} as MerchandiseSearchParams;

          item.merchandise.selectedOptions.forEach(({ name, value }) => {
            if (value !== DEFAULT_OPTION) {
              merchandiseSearchParams[name.toLowerCase()] = value;
            }
          });

          const merchandiseUrl = createUrl(
            `/product/${item.merchandise.product.handle}`,
            new URLSearchParams(merchandiseSearchParams)
          );

          return (
            <li
              key={i}
              className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
            >
              <div className="relative flex w-full flex-row justify-between px-1 py-4">
                <div className="absolute z-40 -mt-2 ml-[55px]">
                  <DeleteItemButton item={item} />
                </div>
                <Link
                  href={merchandiseUrl}
                  className="z-30 flex flex-row space-x-4"
                >
                  <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <Image
                      className="h-full w-full object-cover"
                      width={64}
                      height={64}
                      alt={
                        // item.merchandise.product.featuredImage
                        //   .altText || item.merchandise.product.title
                        item.merchandise.product.title
                      }
                      src={item.merchandise.product.featuredImage}
                    />
                  </div>

                  <div className="flex flex-1 flex-col text-base">
                    <span className="leading-tight">
                      {item.merchandise.product.title}
                    </span>
                    {item.merchandise.title !== DEFAULT_OPTION ? (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.merchandise.title}
                      </p>
                    ) : null}
                  </div>
                </Link>
                <div className="flex h-16 flex-col justify-between">
                  <Price
                    className="flex justify-end space-y-2 text-right text-sm"
                    amount={item.cost.totalAmount.amount}
                    currencyCode={item.cost.totalAmount.currencyCode}
                  />
                  <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                    <EditItemQuantityButton item={item} type="minus" />
                    <p className="w-6 text-center">
                      <span className="w-full text-sm">{item.quantity}</span>
                    </p>
                    <EditItemQuantityButton item={item} type="plus" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}

        <div className="dark:text-white">
          <div className="flex justify-between items-center py-2 pt-8">
            <p>Shipping</p>
            <p className="text-gray-400 dark:text-gray-500">
              Calculated at next step
            </p>
          </div>
          <div className="flex justify-between items-center text-2xl font-bold">
            <p>Total</p>
            <p>
              <span className="text-base text-sm text-gray-400 dark:text-gray-500">
                USD
              </span>{" "}
              $30.00
            </p>
          </div>

          <hr className="my-4 mb-6 border-l border-neutral-300 dark:border-neutral-700 lg:hidden" />
        </div>
      </div>
    </>
  );
}
