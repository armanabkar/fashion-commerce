import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LogoIcon from "@/components/icons/logo";

vi.stubEnv("SITE_NAME", "Test Site");

describe("LogoIcon Component", () => {
  it("renders the SVG element with default attributes", () => {
    render(<LogoIcon />);

    // Ensure the SVG element is rendered
    const svgElement = screen.getByLabelText(`${process.env.SITE_NAME} logo`);
    expect(svgElement).toBeInTheDocument();

    // Check default classes
    expect(svgElement).toHaveClass("h-4 w-4 fill-black dark:fill-white");
  });

  it("applies additional classes passed via the `className` prop", () => {
    render(<LogoIcon className="custom-class" />);

    const svgElement = screen.getByLabelText(`${process.env.SITE_NAME} logo`);
    expect(svgElement).toHaveClass("custom-class");
  });

  it("forwards additional props to the SVG element", () => {
    render(<LogoIcon data-testid="custom-logo" />);

    const svgElement = screen.getByTestId("custom-logo");
    expect(svgElement).toBeInTheDocument();
  });

  it("renders the correct path elements inside the SVG", () => {
    render(<LogoIcon />);

    // Verify the paths exist
    const paths = screen
      .getByLabelText(`${process.env.SITE_NAME} logo`)
      .querySelectorAll("path");
    expect(paths).toHaveLength(2);

    // Verify path d attributes
    expect(paths[0]).toHaveAttribute(
      "d",
      "M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"
    );
    expect(paths[1]).toHaveAttribute(
      "d",
      "M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"
    );
  });
});
