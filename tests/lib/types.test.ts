import { describe, it, expect } from "vitest";
import {
  Product,
  SEO,
  ProductOption,
  ProductVariant,
  Menu,
  Cart,
  CartItem,
  Money,
  Page,
  Image,
  MerchandiseSearchParams,
} from "@/lib/types";

describe("Product", () => {
  it("should have the correct properties", () => {
    const product: Product = {
      id: "1",
      handle: "product-handle",
      availableForSale: true,
      title: "Product Title",
      description: "Product Description",
      descriptionHtml: "<p>Product Description</p>",
      options: [
        { id: "1", name: "Color", values: ["Red", "Blue"] },
        { id: "2", name: "Size", values: ["S", "M", "L"] },
      ],
      price: "10.99",
      featuredImage: "/images/product.jpg",
      images: [
        { url: "/images/product-1.jpg", altText: "Product Image 1" },
        { url: "/images/product-2.jpg", altText: "Product Image 2" },
      ],
      variants: [
        {
          id: "1",
          title: "Red / S",
          availableForSale: true,
          selectedOptions: [
            { name: "Color", value: "Red" },
            { name: "Size", value: "S" },
          ],
          price: { amount: "10.99", currencyCode: "USD" },
        },
      ],
      currencyCode: "USD",
      tags: ["tag1", "tag2"],
      updatedAt: "2022-01-01T00:00:00Z",
      seo: {
        title: "Product SEO Title",
        description: "Product SEO Description",
      },
    };

    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("handle");
    expect(product).toHaveProperty("availableForSale");
    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("description");
    expect(product).toHaveProperty("descriptionHtml");
    expect(product).toHaveProperty("options");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("featuredImage");
    expect(product).toHaveProperty("images");
    expect(product).toHaveProperty("variants");
    expect(product).toHaveProperty("currencyCode");
    expect(product).toHaveProperty("tags");
    expect(product).toHaveProperty("updatedAt");
    expect(product).toHaveProperty("seo");
  });
});

describe("SEO", () => {
  it("should have the correct properties", () => {
    const seo: SEO = {
      title: "SEO Title",
      description: "SEO Description",
    };

    expect(seo).toHaveProperty("title");
    expect(seo).toHaveProperty("description");
  });
});

describe("ProductOption", () => {
  it("should have the correct properties", () => {
    const productOption: ProductOption = {
      id: "1",
      name: "Color",
      values: ["Red", "Blue"],
    };

    expect(productOption).toHaveProperty("id");
    expect(productOption).toHaveProperty("name");
    expect(productOption).toHaveProperty("values");
  });
});

describe("ProductVariant", () => {
  it("should have the correct properties", () => {
    const productVariant: ProductVariant = {
      id: "1",
      title: "Red / S",
      availableForSale: true,
      selectedOptions: [
        { name: "Color", value: "Red" },
        { name: "Size", value: "S" },
      ],
      price: { amount: "10.99", currencyCode: "USD" },
    };

    expect(productVariant).toHaveProperty("id");
    expect(productVariant).toHaveProperty("title");
    expect(productVariant).toHaveProperty("availableForSale");
    expect(productVariant).toHaveProperty("selectedOptions");
    expect(productVariant).toHaveProperty("price");
  });
});

describe("Menu", () => {
  it("should have the correct properties", () => {
    const menu: Menu = {
      title: "Menu Title",
      path: "/menu",
    };

    expect(menu).toHaveProperty("title");
    expect(menu).toHaveProperty("path");
  });
});

describe("Cart", () => {
  it("should have the correct properties", () => {
    const cart: Cart = {
      id: "1",
      checkoutUrl: "/checkout",
      cost: {
        subtotalAmount: { amount: "21.98", currencyCode: "USD" },
        totalAmount: { amount: "23.98", currencyCode: "USD" },
        totalTaxAmount: { amount: "2.00", currencyCode: "USD" },
      },
      lines: [
        {
          id: "1",
          quantity: 1,
          cost: { totalAmount: { amount: "10.99", currencyCode: "USD" } },
          merchandise: {
            id: "1",
            title: "Red / S",
            selectedOptions: [
              { name: "Color", value: "Red" },
              { name: "Size", value: "S" },
            ],
            product: {
              id: "",
              handle: "",
              availableForSale: false,
              title: "",
              description: "",
              descriptionHtml: "",
              options: [],
              price: "",
              featuredImage: "",
              images: [],
              variants: [],
              currencyCode: "",
              tags: [],
              updatedAt: "",
              seo: { description: "", title: "" },
            },
          },
        },
      ],
      totalQuantity: 1,
    };

    expect(cart).toHaveProperty("id");
    expect(cart).toHaveProperty("checkoutUrl");
    expect(cart).toHaveProperty("cost");
    expect(cart).toHaveProperty("lines");
    expect(cart).toHaveProperty("totalQuantity");
  });
});

describe("CartItem", () => {
  it("should have the correct properties", () => {
    const cartItem: CartItem = {
      id: "1",
      quantity: 1,
      cost: { totalAmount: { amount: "10.99", currencyCode: "USD" } },
      merchandise: {
        id: "1",
        title: "Red / S",
        selectedOptions: [
          { name: "Color", value: "Red" },
          { name: "Size", value: "S" },
        ],
        product: {
          id: "",
          handle: "",
          availableForSale: false,
          title: "",
          description: "",
          descriptionHtml: "",
          options: [],
          price: "",
          featuredImage: "",
          images: [],
          variants: [],
          currencyCode: "",
          tags: [],
          updatedAt: "",
          seo: { title: "", description: "" },
        },
      },
    };

    expect(cartItem).toHaveProperty("id");
    expect(cartItem).toHaveProperty("quantity");
    expect(cartItem).toHaveProperty("cost");
    expect(cartItem).toHaveProperty("merchandise");
  });
});

describe("Money", () => {
  it("should have the correct properties", () => {
    const money: Money = {
      amount: "10.99",
      currencyCode: "USD",
    };

    expect(money).toHaveProperty("amount");
    expect(money).toHaveProperty("currencyCode");
  });
});

describe("Page", () => {
  it("should have the correct properties", () => {
    const page: Page = {
      id: "1",
      title: "Page Title",
      handle: "page-handle",
      body: "<p>Page Body</p>",
      bodySummary: "Page Summary",
      seo: { title: "Page SEO Title", description: "Page SEO Description" },
      createdAt: "2022-01-01T00:00:00Z",
      updatedAt: "2022-01-01T00:00:00Z",
    };

    expect(page).toHaveProperty("id");
    expect(page).toHaveProperty("title");
    expect(page).toHaveProperty("handle");
    expect(page).toHaveProperty("body");
    expect(page).toHaveProperty("bodySummary");
    expect(page).toHaveProperty("seo");
    expect(page).toHaveProperty("createdAt");
    expect(page).toHaveProperty("updatedAt");
  });
});

describe("Image", () => {
  it("should have the correct properties", () => {
    const image: Image = {
      url: "/images/image.jpg",
      altText: "Image Alt Text",
      width: 800,
      height: 600,
    };

    expect(image).toHaveProperty("url");
    expect(image).toHaveProperty("altText");
    expect(image).toHaveProperty("width");
    expect(image).toHaveProperty("height");
  });
});

describe("MerchandiseSearchParams", () => {
  it("should be an object with string keys and values", () => {
    const merchandiseSearchParams: MerchandiseSearchParams = {
      color: "Red",
      size: "S",
    };

    expect(typeof merchandiseSearchParams).toBe("object");
    expect(
      Object.keys(merchandiseSearchParams).every(
        (key) => typeof key === "string"
      )
    ).toBe(true);
    expect(
      Object.values(merchandiseSearchParams).every(
        (value) => typeof value === "string"
      )
    ).toBe(true);
  });
});
