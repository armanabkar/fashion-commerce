import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { GridTileImage } from "@/components/grid/tile";
import Label from "@/components/label";

// Mock Next.js `Image` component
vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

// Mock `Label` component
vi.mock("../../../components/label.tsx", () => ({
  default: ({
    title,
    amount,
    currencyCode,
  }: {
    title: string;
    amount: string;
    currencyCode: string;
  }) => (
    <div data-testid="label">
      <span>{title}</span>
      <span>{amount}</span>
      <span>{currencyCode}</span>
    </div>
  ),
}));

describe("GridTileImage Component", () => {
  it("renders an image with the provided props", () => {
    render(
      <GridTileImage
        src="/test-image.jpg"
        alt="Test Image"
        width={200}
        height={200}
      />
    );

    // Check if the image is rendered
    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
  });

  it("applies the interactive hover effect if `interactive` is true", () => {
    render(
      <GridTileImage src="/test-image.jpg" alt="Test Image" interactive />
    );

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass(
      "transition duration-300 ease-in-out group-hover:scale-105"
    );
  });

  it("does not apply the hover effect if `interactive` is false", () => {
    render(
      <GridTileImage
        src="/test-image.jpg"
        alt="Test Image"
        interactive={false}
      />
    );

    const image = screen.getByAltText("Test Image");
    expect(image).not.toHaveClass("group-hover:scale-105");
  });

  it("applies active border styles when `isActive` is true", () => {
    render(<GridTileImage src="/test-image.jpg" alt="Test Image" isActive />);

    const container = screen.getByAltText("Test Image").closest("div");
    expect(container).toHaveClass("border-2 border-blue-600");
  });

  it("applies inactive border styles when `isActive` is false", () => {
    render(
      <GridTileImage src="/test-image.jpg" alt="Test Image" isActive={false} />
    );

    const container = screen.getByAltText("Test Image").closest("div");
    expect(container).toHaveClass("border-neutral-200 dark:border-neutral-800");
  });

  it("renders the `Label` component when label props are provided", () => {
    render(
      <GridTileImage
        src="/test-image.jpg"
        alt="Test Image"
        label={{
          title: "Product Title",
          amount: "19.99",
          currencyCode: "USD",
        }}
      />
    );

    const label = screen.getByTestId("label");
    expect(label).toBeInTheDocument();
    expect(screen.getByText("Product Title")).toBeInTheDocument();
    expect(screen.getByText("19.99")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("does not render the `Label` component if no label props are provided", () => {
    render(<GridTileImage src="/test-image.jpg" alt="Test Image" />);

    expect(screen.queryByTestId("label")).not.toBeInTheDocument();
  });
});
