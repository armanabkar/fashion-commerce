import { describe, it, expect, vi } from "vitest";
import {
  products,
  menu,
  homepageItems,
  cartItems,
  fetchProducts,
} from "@/lib/testData";

describe("testData", () => {
  describe("products", () => {
    it("should have a list of products", () => {
      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);

      // Check structure of the first product
      const product = products[0];
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("title");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("currencyCode");
      expect(product).toHaveProperty("featuredImage");
    });
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

  describe("menu", () => {
    it("should have a list of menu items", () => {
      expect(menu).toBeDefined();
      expect(Array.isArray(menu)).toBe(true);
      expect(menu.length).toBeGreaterThan(0);

      // Check structure of the first menu item
      const menuItem = menu[0];
      expect(menuItem).toHaveProperty("title");
      expect(menuItem).toHaveProperty("path");
    });

    it("should include specific menu items", () => {
      const menuTitles = menu.map((item) => item.title);
      expect(menuTitles).toContain("Home");
      expect(menuTitles).toContain("FAQ");
    });
  });

  describe("homepageItems", () => {
    it("should have a list of homepage items", () => {
      expect(homepageItems).toBeDefined();
      expect(Array.isArray(homepageItems)).toBe(true);
      expect(homepageItems.length).toBeGreaterThan(0);

      // Check structure of the first homepage item
      const homepageItem = homepageItems[0];
      expect(homepageItem).toHaveProperty("id");
      expect(homepageItem).toHaveProperty("title");
      expect(homepageItem).toHaveProperty("price");
      expect(homepageItem).toHaveProperty("currencyCode");
      expect(homepageItem).toHaveProperty("featuredImage");
    });
  });

  describe("cartItems", () => {
    it("should have a cart with lines and cost", () => {
      expect(cartItems).toBeDefined();
      expect(cartItems).toHaveProperty("lines");
      expect(cartItems).toHaveProperty("cost");

      // Check structure of a cart line
      const cartLine = cartItems.lines[0];
      expect(cartLine).toHaveProperty("id");
      expect(cartLine).toHaveProperty("quantity");
      expect(cartLine).toHaveProperty("cost");
      expect(cartLine).toHaveProperty("merchandise");
      expect(cartLine.merchandise).toHaveProperty("product");
    });

    it("should calculate total quantity and cost correctly", () => {
      const totalQuantity = cartItems.lines.reduce(
        (sum, line) => sum + line.quantity,
        0
      );
      expect(totalQuantity).toBe(cartItems.totalQuantity);

      const totalCost = cartItems.lines.reduce(
        (sum, line) => sum + parseFloat(line.cost.totalAmount.amount),
        0
      );
      expect(totalCost).toBe(parseFloat(cartItems.cost.totalAmount.amount));
    });
  });

  describe("fetchProducts", () => {
    it("should return a promise that resolves to a list of products", async () => {
      vi.useFakeTimers(); // Mock timers for the test

      const promise = fetchProducts();
      vi.runAllTimers(); // Fast-forward the timer
      const result = await promise;

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);

      const product = result[0];
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("title");
      expect(product).toHaveProperty("price");

      vi.useRealTimers(); // Restore real timers
    });
  });
});
