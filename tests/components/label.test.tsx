import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Label from "@/components/label";

vi.mock("../../components/price.tsx", () => ({
  default: ({
    amount,
    currencyCode,
  }: {
    amount: string;
    currencyCode: string;
  }) => (
    <div>
      {currencyCode} {amount}
    </div>
  ),
}));

describe("Label Component", () => {
  it("renders the title and price correctly", () => {
    render(<Label title="Product Title" amount="19.99" currencyCode="USD" />);

    // Assert title is rendered
    const titleElement = screen.getByText("Product Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("line-clamp-2");

    // Assert price is rendered
    const priceElement = screen.getByText("USD 19.99");
    expect(priceElement).toBeInTheDocument();
  });

  it("applies default bottom positioning classes", () => {
    render(
      <Label title="Default Position" amount="29.99" currencyCode="USD" />
    );

    const container = screen.getByText("Default Position").closest("div");
    expect(container).toHaveClass(
      "flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"
    );
    expect(container).not.toHaveClass("lg:px-20 lg:pb-[35%]");
  });

  it("applies center positioning classes when position is 'center'", () => {
    render(
      <Label
        title="Centered Label"
        amount="39.99"
        currencyCode="USD"
        position="center"
      />
    );

    const container = screen.getByText("Centered Label").closest("div");
    expect(container).toHaveClass(
      "flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"
    );
  });

  it("renders with the dark mode styles", () => {
    render(<Label title="Dark Mode Test" amount="49.99" currencyCode="USD" />);

    const label = screen.getByText("Dark Mode Test").closest("div");
    expect(label).toHaveClass(
      "dark:border-neutral-800 dark:bg-black/70 dark:text-white"
    );
  });

  it("handles long titles gracefully", () => {
    const longTitle =
      "This is a very long product title that should be truncated properly.";
    render(<Label title={longTitle} amount="59.99" currencyCode="USD" />);

    const titleElement = screen.getByText(longTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("line-clamp-2");
  });
});
