import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ThreeItemGrid } from "@/components/grid/three-items";

// Mock `homepageItems` data
vi.mock("@/lib/testData", () => ({
  homepageItems: [
    {
      id: "1",
      handle: "primary-product",
      title: "Primary Product",
      price: "99.99",
      currencyCode: "USD",
      featuredImage: "/images/primary.jpg",
    },
    {
      id: "2",
      handle: "secondary-product",
      title: "Secondary Product",
      price: "49.99",
      currencyCode: "USD",
      featuredImage: "/images/secondary.jpg",
    },
    {
      id: "3",
      handle: "tertiary-product",
      title: "Tertiary Product",
      price: "29.99",
      currencyCode: "USD",
      featuredImage: "/images/tertiary.jpg",
    },
  ],
}));

// Mock `GridTileImage`
vi.mock("../../../components/grid/tile.tsx", () => ({
  GridTileImage: ({
    src,
    alt,
    label,
  }: {
    src: string;
    alt: string;
    label: { title: string; amount: string; currencyCode: string };
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      data-testid="grid-tile-image"
      data-label={JSON.stringify(label)}
    />
  ),
}));

describe("ThreeItemGrid Component", () => {
  it("renders three grid items when `homepageItems` has at least 3 products", async () => {
    render(await ThreeItemGrid());

    // Check that all three grid items are rendered
    const images = screen.getAllByTestId("grid-tile-image");
    expect(images).toHaveLength(3);

    // Validate each image
    expect(images[0]).toHaveAttribute("src", "/images/primary.jpg");
    expect(images[0]).toHaveAttribute("alt", "Primary Product");

    expect(images[1]).toHaveAttribute("src", "/images/secondary.jpg");
    expect(images[1]).toHaveAttribute("alt", "Secondary Product");

    expect(images[2]).toHaveAttribute("src", "/images/tertiary.jpg");
    expect(images[2]).toHaveAttribute("alt", "Tertiary Product");
  });

  it("applies correct layout classes for `full` and `half` grid items", async () => {
    render(await ThreeItemGrid());

    const items = screen.getAllByRole("link");

    // First item (primary product) should have `full` layout
    expect(items[0].closest("div")).toHaveClass("md:col-span-4 md:row-span-2");

    // Second and third items (secondary and tertiary) should have `half` layout
    expect(items[1].closest("div")).toHaveClass("md:col-span-2 md:row-span-1");
    expect(items[2].closest("div")).toHaveClass("md:col-span-2 md:row-span-1");
  });

  it("passes the correct `label` props to `GridTileImage`", async () => {
    render(await ThreeItemGrid());

    const images = screen.getAllByTestId("grid-tile-image");

    // Validate label props for the primary product
    expect(images[0]).toHaveAttribute(
      "data-label",
      JSON.stringify({
        position: "center",
        title: "Primary Product",
        amount: "99.99",
        currencyCode: "USD",
      })
    );

    // Validate label props for the secondary product
    expect(images[1]).toHaveAttribute(
      "data-label",
      JSON.stringify({
        position: "bottom",
        title: "Secondary Product",
        amount: "49.99",
        currencyCode: "USD",
      })
    );

    // Validate label props for the tertiary product
    expect(images[2]).toHaveAttribute(
      "data-label",
      JSON.stringify({
        position: "bottom",
        title: "Tertiary Product",
        amount: "29.99",
        currencyCode: "USD",
      })
    );
  });
});
