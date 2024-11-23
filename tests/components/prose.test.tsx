import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Prose from "@/components/prose";

describe("Prose Component", () => {
  it("renders the provided HTML content", () => {
    const htmlContent = "<h1>Hello, World!</h1><p>This is a test.</p>";

    render(<Prose html={htmlContent} />);

    // Check that the content is rendered correctly
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(screen.getByText("This is a test.")).toBeInTheDocument();
  });

  it("applies default prose classes", () => {
    const htmlContent = "<h1>Title</h1>";

    render(<Prose html={htmlContent} />);

    const container = screen.getByRole("heading", {
      name: "Title",
    }).parentElement;

    // Check that the container includes the default prose class
    expect(container).toHaveClass("prose");
    expect(container).toHaveClass("mx-auto");
    expect(container).toHaveClass("max-w-6xl");
  });

  it("applies custom class names when provided", () => {
    const htmlContent = "<p>Custom class test</p>";
    const customClassName = "custom-prose-style";

    render(<Prose html={htmlContent} className={customClassName} />);

    const container = screen.getByText("Custom class test").parentElement;

    // Check that the custom class is applied
    expect(container).toHaveClass(customClassName);
  });

  it("renders safely with empty HTML", () => {
    render(<Prose html="" />);

    // Check that the component does not throw an error
    expect(screen.queryByText("Hello, World!")).not.toBeInTheDocument();
  });
});
