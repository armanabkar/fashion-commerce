"use client";

import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

/**
 * A wrapper around the search results that adds a unique key to
 * the top-level fragment, forcing a re-render of the children
 * when the search query changes.
 *
 * This is necessary because the children of `SearchLayout` are
 * rendered on the server and hydrated on the client. When the
 * search query changes, the children are not re-rendered by
 * default, so we need to add a key to force a re-render.
 */
export default function ChildrenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  return <Fragment key={searchParams.get("q")}>{children}</Fragment>;
}
