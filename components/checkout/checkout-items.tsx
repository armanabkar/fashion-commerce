"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <Image
                className="h-full w-full object-cover"
                width={64}
                height={64}
                alt="cap"
                src="/images/1-1.webp"
              />
            </div>
            <div className="pl-2">
              <p className="dark:text-white">Acme Circles T-Shirt</p>
              <p className="text-gray-400 dark:text-gray-500">Black / XS</p>
            </div>
          </div>
          <div>
            <p className="dark:text-white">$30.00</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <Image
                className="h-full w-full object-cover"
                width={64}
                height={64}
                alt="cap"
                src="/images/1-1.webp"
              />
            </div>
            <div className="pl-2">
              <p className="dark:text-white">Acme Circles T-Shirt</p>
              <p className="text-gray-400 dark:text-gray-500">Black / XS</p>
            </div>
          </div>
          <div>
            <p className="dark:text-white">$30.00</p>
          </div>
        </div>

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

          <hr className="my-4 mb-6 border-l border-neutral-400 dark:border-neutral-700 lg:hidden" />
        </div>
      </div>
    </>
  );
}
