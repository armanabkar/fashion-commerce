import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductGridItems from "@/components/layout/product-grid-items";
import { Product } from "@/lib/types";

// Mock components used in ProductGridItems
vi.mock("@/components/grid", () => ({
  default: {
    Item: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className: string;
    }) => (
      <div data-testid="grid-item" className={className}>
        {children}
      </div>
    ),
  },
}));

vi.mock("@/components/grid/tile", () => ({
  GridTileImage: ({
    alt,
    label,
    src,
  }: {
    alt: string;
    label: any;
    src: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      data-testid="grid-tile-image"
      alt={alt}
      src={src}
      aria-label={label.title}
    />
  ),
}));

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Product 1",
    handle: "product-1",
    price: "100",
    currencyCode: "USD",
    featuredImage: "/images/product-1.jpg",
    availableForSale: true,
    description: "",
    descriptionHtml: "",
    images: [],
    options: [],
    variants: [],
    tags: [],
    updatedAt: "",
    seo: { title: "", description: "" },
  },
  {
    id: "2",
    title: "Product 2",
    handle: "product-2",
    price: "200",
    currencyCode: "USD",
    featuredImage: "/images/product-2.jpg",
    availableForSale: true,
    description: "",
    descriptionHtml: "",
    images: [],
    options: [],
    variants: [],
    tags: [],
    updatedAt: "",
    seo: { title: "", description: "" },
  },
];

describe("ProductGridItems Component", () => {
  it("renders the correct number of grid items", () => {
    render(<ProductGridItems products={mockProducts} />);

    const gridItems = screen.getAllByTestId("grid-item");
    expect(gridItems).toHaveLength(mockProducts.length);
  });

  it("renders the correct product links", () => {
    render(<ProductGridItems products={mockProducts} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockProducts.length);

    mockProducts.forEach((product, index) => {
      expect(links[index]).toHaveAttribute(
        "href",
        `/product/${product.handle}`
      );
    });
  });

  it("renders the GridTileImage component for each product", () => {
    render(<ProductGridItems products={mockProducts} />);

    const images = screen.getAllByTestId("grid-tile-image");
    expect(images).toHaveLength(mockProducts.length);

    mockProducts.forEach((product, index) => {
      expect(images[index]).toHaveAttribute("src", product.featuredImage);
      expect(images[index]).toHaveAttribute("alt", product.title);
    });
  });

  it("renders product labels correctly", () => {
    render(<ProductGridItems products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByLabelText(product.title)).toBeInTheDocument();
    });
  });
});
