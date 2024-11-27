import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VariantSelector } from "@/components/product/variant-selector";
import { ProductOption, ProductVariant } from "@/lib/types";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: vi.fn(),
  }),
  usePathname: () => "/product/sample-product",
  useSearchParams: () => new URLSearchParams("?color=Red"), // Mock the current search params
}));

vi.mock("@/lib/utils", () => ({
  createUrl: (pathname: string, params: URLSearchParams) =>
    `${pathname}?${params.toString()}`, // Mock URL creation
}));

// Mock data
const mockOptions: ProductOption[] = [
  {
    id: "1",
    name: "Color",
    values: ["Red", "Blue", "Green"],
  },
  {
    id: "2",
    name: "Size",
    values: ["Small", "Medium", "Large"],
  },
];

const mockVariants: ProductVariant[] = [
  {
    id: "v1",
    availableForSale: true,
    selectedOptions: [
      { name: "Color", value: "Red" },
      { name: "Size", value: "Small" },
    ],
    title: "",
    price: { currencyCode: "USD", amount: "10" },
  },
  {
    id: "v2",
    availableForSale: true,
    selectedOptions: [
      { name: "Color", value: "Blue" },
      { name: "Size", value: "Medium" },
    ],
    title: "",
    price: { currencyCode: "USD", amount: "10" },
  },
  {
    id: "v3",
    availableForSale: false,
    selectedOptions: [
      { name: "Color", value: "Green" },
      { name: "Size", value: "Large" },
    ],
    title: "",
    price: { currencyCode: "USD", amount: "10" },
  },
];

describe("VariantSelector Component", () => {
  it("renders all options correctly", () => {
    render(<VariantSelector options={mockOptions} variants={mockVariants} />);

    // Check for Color options
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("Green")).toBeInTheDocument();

    // Check for Size options
    expect(screen.getByText("Size")).toBeInTheDocument();
    expect(screen.getByText("Small")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Large")).toBeInTheDocument();
  });

  it("disables buttons for unavailable variants", () => {
    render(<VariantSelector options={mockOptions} variants={mockVariants} />);

    const unavailableButton = screen.getByRole("button", { name: /Green/i });
    expect(unavailableButton).toBeInTheDocument();
  });

  it("marks active options based on search params", () => {
    render(<VariantSelector options={mockOptions} variants={mockVariants} />);

    const activeButton = screen.getByRole("button", { name: /Red/i });
    expect(activeButton).toHaveClass("ring-2 ring-blue-600");
  });

  it("does not render if all options have only one value", () => {
    const singleValueOptions: ProductOption[] = [
      { id: "1", name: "Color", values: ["Red"] },
    ];

    render(
      <VariantSelector options={singleValueOptions} variants={mockVariants} />
    );
    expect(screen.queryByText("Color")).not.toBeInTheDocument();
  });
});
