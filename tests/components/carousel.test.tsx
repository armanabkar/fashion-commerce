import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Carousel } from "@/components/carousel";

// Mock test data
vi.mock("@/lib/testData", () => ({
  products: [
    {
      id: "1",
      handle: "product-1",
      title: "Product 1",
      price: "19.99",
      featuredImage: "/images/product1.jpg",
    },
    {
      id: "2",
      handle: "product-2",
      title: "Product 2",
      price: "29.99",
      featuredImage: "/images/product2.jpg",
    },
  ],
}));

// Mock GridTileImage component
vi.mock("@/components/grid/tile.tsx", () => ({
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
      alt={alt}
      data-testid="grid-tile-image"
      data-label={JSON.stringify(label)}
      src={src}
    />
  ),
}));

describe("Carousel Component", () => {
  it("renders correctly with mocked products", async () => {
    render(await Carousel());

    // Check for product 1
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();

    // Check for product 2
    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("renders links to the correct product pages", async () => {
    render(await Carousel());

    // Check for links
    expect(screen.getByRole("link", { name: /Product 1/i })).toHaveAttribute(
      "href",
      "/product/product-1"
    );
    expect(screen.getByRole("link", { name: /Product 2/i })).toHaveAttribute(
      "href",
      "/product/product-2"
    );
  });

  it("applies the correct styles to the carousel container", async () => {
    render(await Carousel());

    const carouselContainer = screen.getByRole("list");
    expect(carouselContainer).toHaveClass("flex animate-carousel gap-4");
  });

  it("renders the correct number of products", async () => {
    render(await Carousel());

    const productItems = screen.getAllByRole("listitem");
    expect(productItems).toHaveLength(2);
  });
});
