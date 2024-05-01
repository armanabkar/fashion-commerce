// import Cart from 'components/cart';
// import OpenCart from 'components/cart/open-cart';
import LogoSquare from "../logo-square";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";
const { SITE_NAME } = process.env;
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          {/* <MobileMenu menu={menu} /> */}
          <MobileMenu />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {/* {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null} */}
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li>
              <Link
                href=""
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                T-Shirts
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Pants
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          {/* <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense> */}
          <Suspense fallback={null}>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <ShoppingCartIcon
                className={clsx(
                  "h-4 transition-all ease-in-out hover:scale-110 "
                )}
              />
            </div>
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
