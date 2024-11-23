import { describe, it, expect } from "vitest";
import {
  SortFilterItem,
  defaultSort,
  sorting,
  TAGS,
  HIDDEN_PRODUCT_TAG,
  DEFAULT_OPTION,
  SHOPIFY_GRAPHQL_API_ENDPOINT,
} from "@/lib/constants";

describe("SortFilterItem", () => {
  it("should have the correct properties", () => {
    const sortFilterItem: SortFilterItem = {
      title: "Sort Filter Item",
      slug: "sort-filter-item",
      sortKey: "RELEVANCE",
      reverse: false,
    };

    expect(sortFilterItem).toHaveProperty("title");
    expect(sortFilterItem).toHaveProperty("slug");
    expect(sortFilterItem).toHaveProperty("sortKey");
    expect(sortFilterItem).toHaveProperty("reverse");
  });
});

describe("defaultSort", () => {
  it("should have the correct properties", () => {
    expect(defaultSort).toHaveProperty("title");
    expect(defaultSort).toHaveProperty("slug");
    expect(defaultSort).toHaveProperty("sortKey");
    expect(defaultSort).toHaveProperty("reverse");

    expect(defaultSort.title).toBe("Relevance");
    expect(defaultSort.slug).toBeNull();
    expect(defaultSort.sortKey).toBe("RELEVANCE");
    expect(defaultSort.reverse).toBe(false);
  });
});

describe("sorting", () => {
  it("should have the correct number of items", () => {
    expect(sorting).toHaveLength(5);
  });

  it("should have the correct properties for each item", () => {
    sorting.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("slug");
      expect(item).toHaveProperty("sortKey");
      expect(item).toHaveProperty("reverse");
    });
  });
});

describe("TAGS", () => {
  it("should have the correct properties", () => {
    expect(TAGS).toHaveProperty("collections");
    expect(TAGS).toHaveProperty("products");
    expect(TAGS).toHaveProperty("cart");

    expect(TAGS.collections).toBe("collections");
    expect(TAGS.products).toBe("products");
    expect(TAGS.cart).toBe("cart");
  });
});

describe("HIDDEN_PRODUCT_TAG", () => {
  it("should be a string", () => {
    expect(typeof HIDDEN_PRODUCT_TAG).toBe("string");
  });

  it("should have the correct value", () => {
    expect(HIDDEN_PRODUCT_TAG).toBe("nextjs-frontend-hidden");
  });
});

describe("DEFAULT_OPTION", () => {
  it("should be a string", () => {
    expect(typeof DEFAULT_OPTION).toBe("string");
  });

  it("should have the correct value", () => {
    expect(DEFAULT_OPTION).toBe("Default Title");
  });
});

describe("SHOPIFY_GRAPHQL_API_ENDPOINT", () => {
  it("should be a string", () => {
    expect(typeof SHOPIFY_GRAPHQL_API_ENDPOINT).toBe("string");
  });

  it("should have the correct value", () => {
    expect(SHOPIFY_GRAPHQL_API_ENDPOINT).toBe("/api/2023-01/graphql.json");
  });
});
