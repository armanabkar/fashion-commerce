import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Grid from "@/components/grid";

describe("Grid Component", () => {
  it("renders children inside the Grid component", () => {
    render(
      <Grid>
        <Grid.Item>Item 1</Grid.Item>
        <Grid.Item>Item 2</Grid.Item>
      </Grid>
    );

    // Check that the Grid renders its children
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("applies default Grid classes", () => {
    render(
      <Grid>
        <Grid.Item>Item 1</Grid.Item>
      </Grid>
    );

    const grid = screen.getByRole("list");
    expect(grid).toHaveClass("grid grid-flow-row gap-4");
  });

  it("applies additional classes to the Grid component", () => {
    render(
      <Grid className="custom-class">
        <Grid.Item>Item 1</Grid.Item>
      </Grid>
    );

    const grid = screen.getByRole("list");
    expect(grid).toHaveClass("custom-class");
  });

  it("applies default Grid.Item classes", () => {
    render(
      <Grid>
        <Grid.Item>Item 1</Grid.Item>
      </Grid>
    );

    const item = screen.getByText("Item 1").closest("li");
    expect(item).toHaveClass("aspect-square transition-opacity");
  });

  it("applies additional classes to Grid.Item", () => {
    render(
      <Grid>
        <Grid.Item className="custom-item-class">Item 1</Grid.Item>
      </Grid>
    );

    const item = screen.getByText("Item 1").closest("li");
    expect(item).toHaveClass("custom-item-class");
  });

  it("forwards additional props to Grid", () => {
    render(
      <Grid data-testid="custom-grid">
        <Grid.Item>Item 1</Grid.Item>
      </Grid>
    );

    const grid = screen.getByTestId("custom-grid");
    expect(grid).toBeInTheDocument();
  });

  it("forwards additional props to Grid.Item", () => {
    render(
      <Grid>
        <Grid.Item data-testid="custom-item">Item 1</Grid.Item>
      </Grid>
    );

    const item = screen.getByTestId("custom-item");
    expect(item).toBeInTheDocument();
  });
});
