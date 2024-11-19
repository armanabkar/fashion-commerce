import React from "react";
import { render } from "@testing-library/react";
import Price from "../../components/price";
import { describe, expect, it } from "vitest";

describe("Price component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Price amount="10.99" currencyCode={"USD"} />);
    expect(getByText("$10.99")).toBeInTheDocument();
    expect(getByText("USD")).toBeInTheDocument();
  });

  it("renders with custom amount prop", () => {
    const { getByText } = render(<Price amount="5.99" currencyCode={"USD"} />);
    expect(getByText("$5.99")).toBeInTheDocument();
  });

  it("renders with custom className prop", () => {
    const { getByText } = render(
      <Price amount="10.99" className="custom-class" currencyCode={"USD"} />
    );
    expect(getByText("$10.99")).toHaveClass("custom-class");
  });

  it("renders with custom currencyCode prop", () => {
    const { getByText } = render(<Price amount="10.99" currencyCode="EUR" />);
    expect(getByText("€10.99")).toBeInTheDocument();
    expect(getByText("EUR")).toBeInTheDocument();
  });

  it("renders with custom currencyCodeClassName prop", () => {
    const { getByText } = render(
      <Price
        amount="10.99"
        currencyCodeClassName="custom-currency-class"
        currencyCode={"USD"}
      />
    );
    expect(getByText("USD")).toHaveClass("custom-currency-class");
  });

  it("passes additional props to the underlying paragraph element", () => {
    const { getByText } = render(
      <Price amount="10.99" id="price-paragraph" currencyCode={"USD"} />
    );
    expect(getByText("$10.99"));
  });
});
