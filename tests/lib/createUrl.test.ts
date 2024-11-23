import {
  createUrl,
  ensureStartsWith,
  validateEnvironmentVariables,
} from "@/lib/utils";
import { describe, it, expect, beforeEach } from "vitest";

describe("createUrl", () => {
  it("should return pathname only when searchParams is empty", () => {
    const pathname = "/path/to/resource";
    const searchParams = new URLSearchParams();
    expect(createUrl(pathname, searchParams)).toBe(pathname);
  });

  it("should append searchParams to pathname", () => {
    const pathname = "/path/to/resource";
    const searchParams = new URLSearchParams({
      param1: "value1",
      param2: "value2",
    });
    expect(createUrl(pathname, searchParams)).toBe(
      "/path/to/resource?param1=value1&param2=value2"
    );
  });

  it("should handle special characters in searchParams", () => {
    const pathname = "/path/to/resource";
    const searchParams = new URLSearchParams({
      param1: "value1!",
      param2: "value2@",
    });
    expect(createUrl(pathname, searchParams)).toBe(
      "/path/to/resource?param1=value1%21&param2=value2%40"
    );
  });

  it("should append searchParams to pathname even if pathname already contains query string", () => {
    const pathname = "/path/to/resource?existingParam=existingValue";
    const searchParams = new URLSearchParams({
      param1: "value1",
      param2: "value2",
    });
    expect(createUrl(pathname, searchParams)).toBe(
      "/path/to/resource?existingParam=existingValue?param1=value1&param2=value2"
    );
  });

  it("should handle duplicate parameters in pathname and searchParams", () => {
    const pathname = "/path/to/resource?param1=existingValue";
    const searchParams = new URLSearchParams({
      param1: "newValue",
      param2: "value2",
    });
    expect(createUrl(pathname, searchParams)).toBe(
      "/path/to/resource?param1=existingValue?param1=newValue&param2=value2"
    );
  });
});

describe("ensureStartsWith", () => {
  it("should return the input string if it already starts with the prefix", () => {
    const input = "https://example.com";
    const prefix = "https://";
    expect(ensureStartsWith(input, prefix)).toBe(input);
  });

  it("should return the input string with the prefix added if it does not already start with the prefix", () => {
    const input = "example.com";
    const prefix = "https://";
    expect(ensureStartsWith(input, prefix)).toBe("https://example.com");
  });

  it("should return the input string with the prefix added even if it starts with a similar string", () => {
    const input = "https://example.com";
    const prefix = "https://";
    expect(ensureStartsWith(input, prefix)).toBe("https://example.com");
  });
});

describe("validateEnvironmentVariables", () => {
  beforeEach(() => {
    delete process.env.SHOPIFY_STORE_DOMAIN;
    delete process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  });

  it("should throw an error if SHOPIFY_STORE_DOMAIN is not set", () => {
    expect(() => validateEnvironmentVariables()).toThrow(
      "The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables"
    );
  });

  it("should throw an error if SHOPIFY_STOREFRONT_ACCESS_TOKEN is not set", () => {
    process.env.SHOPIFY_STORE_DOMAIN = "example.com";
    expect(() => validateEnvironmentVariables()).toThrow(
      "The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables"
    );
  });

  it("should throw an error if SHOPIFY_STORE_DOMAIN contains square brackets", () => {
    process.env.SHOPIFY_STORE_DOMAIN = "[example.com]";
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN = "access_token";
    expect(() => validateEnvironmentVariables()).toThrow(
      "Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there."
    );
  });

  it("should not throw an error if all environment variables are set correctly", () => {
    process.env.SHOPIFY_STORE_DOMAIN = "example.com";
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN = "access_token";
    expect(() => validateEnvironmentVariables()).not.toThrow();
  });
});
