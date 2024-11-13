import { describe, it, expect } from "vitest";
import {
  products,
  menu,
  pages,
  product,
  homepageItems,
  cartItems,
} from "../../lib/testData";

describe("Products", () => {
  it("should have the correct number of products", () => {
    expect(products).toHaveLength(12);
  });

  it("should have the correct properties for each product", () => {
    const productKeys = [
      "id",
      "title",
      "featuredImage",
      "handle",
      "price",
      "currencyCode",
      "availableForSale",
      "description",
      "descriptionHtml",
      "images",
      "options",
      "variants",
      "tags",
      "updatedAt",
      "seo",
    ];

    products.forEach((product) => {
      expect(Object.keys(product)).toEqual(expect.arrayContaining(productKeys));
    });
  });
});

describe("Menu", () => {
  it("should have the correct number of menu items", () => {
    expect(menu).toHaveLength(6);
  });

  it("should have the correct properties for each menu item", () => {
    const menuKeys = ["title", "path"];

    menu.forEach((item) => {
      expect(Object.keys(item)).toEqual(expect.arrayContaining(menuKeys));
    });
  });
});

describe("Pages", () => {
  it("should have the correct number of pages", () => {
    expect(pages).toHaveLength(5);
  });

  it("should have the correct properties for each page", () => {
    const pageKeys = [
      "title",
      "path",
      "seo",
      "body",
      "bodySummary",
      "createdAt",
      "updatedAt",
    ];

    pages.forEach((page) => {
      expect(Object.keys(page)).toEqual(expect.arrayContaining(pageKeys));
    });
  });
});

describe("Product", () => {
  it("should have the correct properties", () => {
    const productKeys = [
      "id",
      "title",
      "featuredImage",
      "handle",
      "price",
      "currencyCode",
      "availableForSale",
      "description",
      "descriptionHtml",
      "images",
      "seo",
      "options",
      "variants",
      "tags",
      "updatedAt",
    ];

    expect(Object.keys(product)).toEqual(expect.arrayContaining(productKeys));
  });
});

describe("HomepageItems", () => {
  it("should have the correct number of items", () => {
    expect(homepageItems).toHaveLength(3);
  });

  it("should have the correct properties for each item", () => {
    const itemKeys = [
      "id",
      "title",
      "featuredImage",
      "handle",
      "price",
      "currencyCode",
      "availableForSale",
      "description",
      "descriptionHtml",
      "images",
      "options",
      "variants",
      "tags",
      "updatedAt",
      "seo",
    ];

    homepageItems.forEach((item) => {
      expect(Object.keys(item)).toEqual(expect.arrayContaining(itemKeys));
    });
  });
});

describe("CartItems", () => {
  it("should have the correct properties", () => {
    const cartKeys = ["id", "checkoutUrl", "cost", "lines", "totalQuantity"];

    expect(Object.keys(cartItems)).toEqual(expect.arrayContaining(cartKeys));
  });

  it("should have the correct properties for each line item", () => {
    const lineItemKeys = ["id", "quantity", "cost", "merchandise"];

    cartItems.lines.forEach((lineItem) => {
      expect(Object.keys(lineItem)).toEqual(
        expect.arrayContaining(lineItemKeys)
      );
    });
  });
});
