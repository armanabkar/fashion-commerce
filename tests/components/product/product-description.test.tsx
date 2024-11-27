import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProductDescription } from "@/components/product/product-description";
import { Product } from "@/lib/types";

// Mocking child components
vi.mock("@/components/price", () => ({
  default: ({
    amount,
    currencyCode,
  }: {
    amount: string;
    currencyCode: string;
  }) => (
    <div data-testid="price">
      {currencyCode} {amount}
    </div>
  ),
}));

vi.mock("@/components/prose", () => ({
  default: ({ html, className }: { html: string; className: string }) => (
    <div
      data-testid="prose"
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ),
}));

vi.mock("../../../components/product/variant-selector.tsx", () => ({
  VariantSelector: ({
    options,
    variants,
  }: {
    options: any[];
    variants: any[];
  }) => (
    <div data-testid="variant-selector">
      {options.length} options, {variants.length} variants
    </div>
  ),
}));

const mockProduct: Product = {
  id: "1",
  title: "Sample Product",
  featuredImage: "/images/1-1.webp",
  handle: "Acme-Baby-Cap",
  price: "10",
  currencyCode: "USD",
  availableForSale: true,
  description: "sasasa",
  descriptionHtml: "Sample product description",
  images: [
    { url: "/images/1-1.webp", altText: "Acme Baby Cap" },
    { url: "/images/1-2.webp", altText: "Acme Baby Capa" },
    { url: "/images/1-3.webp", altText: "Acme Baby Cap" },
  ],
  seo: { title: "Acme Baby Cap", description: "" },
  options: [
    {
      id: "1",
      name: "Color",
      values: ["Black", "Gray", "White", "Pink"],
    },
    {
      id: "2",
      name: "Size",
      values: ["S", "M", "L", "XL", "XXL"],
    },
  ],
  variants: [
    {
      id: "1",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "Black",
        },
        {
          name: "size",
          value: "L",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
    {
      id: "2",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "White",
        },
        {
          name: "size",
          value: "XL",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
  ],
  tags: [],
  updatedAt: "",
};

describe("ProductDescription Component", () => {
  it("renders the product title", () => {
    render(<ProductDescription product={mockProduct} />);
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
  });

  it("renders the product price", () => {
    render(<ProductDescription product={mockProduct} />);
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent("USD 10");
  });

  it("renders the VariantSelector component", () => {
    render(<ProductDescription product={mockProduct} />);
    const variantSelector = screen.getByTestId("variant-selector");
    expect(variantSelector).toHaveTextContent("2 options, 2 variants");
  });

  it("renders the product description using Prose component", () => {
    render(<ProductDescription product={mockProduct} />);
    const prose = screen.getByTestId("prose");
    expect(prose).toHaveTextContent("Sample product description");
  });

  it("renders the Add to Cart button when available", () => {
    render(<ProductDescription product={mockProduct} />);
    const button = screen.getByRole("button", { name: "Add to cart" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add To Cart");
    expect(button).not.toHaveAttribute("aria-disabled", "true");
  });

  it("renders the Out of Stock button when not available", () => {
    const unavailableProduct = { ...mockProduct, availableForSale: false };
    render(<ProductDescription product={unavailableProduct} />);
    const button = screen.getByRole("button", { name: "Add to cart" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Out Of Stock");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
});
