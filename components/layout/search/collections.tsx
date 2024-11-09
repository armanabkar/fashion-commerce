import clsx from "clsx";
import { Suspense } from "react";
import FilterItemDropdown from "./filter/dropdown";

import FilterList from "./filter";

async function CollectionList() {
  // const collections = await getCollections();
  return (
    <FilterList
      list={[
        { title: "All", path: "/search" },
        { title: "T-Shirts", path: "/search/t-shirts" },
        { title: "Pants", path: "/search/pants" },
        { title: "Bags", path: "/search/bags" },
        { title: "Kids", path: "/search/kids" },
        { title: "Hoodies", path: "/search/hoodies" },
        { title: "Jackets", path: "/search/jackets" },
      ]}
      title="Collections"
    />
  );
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
