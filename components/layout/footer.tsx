import Link from "next/link";
import FooterMenu from "./footer-menu";
import LogoSquare from "../logo-square";
import { Suspense } from "react";
import { menu } from "@/lib/testData";

const { COMPANY_NAME, SITE_NAME, OWNER_NAME } = process.env;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
              <div className="w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700" />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p className="text-center">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
          <p className="md:ml-auto">
            <span className="text-black dark:text-white">
              Designed by ▲ {OWNER_NAME}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
