import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import LogoSquare from "@/components/logo-square";

describe("LogoSquare", () => {
  it("renders with default size when no size is provided", () => {
    const { container } = render(<LogoSquare />);
    const wrapper = container.firstChild as HTMLElement;
    const logoIcon = wrapper.querySelector("svg");

    expect(wrapper.className).toContain("h-[40px]");
    expect(wrapper.className).toContain("w-[40px]");
    expect(wrapper.className).toContain("rounded-xl");

    expect(
      logoIcon?.className.baseVal || logoIcon?.getAttribute("class") || ""
    ).toContain("h-[16px]");
    expect(
      logoIcon?.className.baseVal || logoIcon?.getAttribute("class") || ""
    ).toContain("w-[16px]");
  });

  it('renders with small size when size="sm" is provided', () => {
    const { container } = render(<LogoSquare size="sm" />);
    const wrapper = container.firstChild as HTMLElement;
    const logoIcon = wrapper.querySelector("svg");

    expect(wrapper.className).toContain("h-[30px]");
    expect(wrapper.className).toContain("w-[30px]");
    expect(wrapper.className).toContain("rounded-lg");

    expect(
      logoIcon?.className.baseVal || logoIcon?.getAttribute("class") || ""
    ).toContain("h-[10px]");
    expect(
      logoIcon?.className.baseVal || logoIcon?.getAttribute("class") || ""
    ).toContain("w-[10px]");
  });

  it("applies correct border and background classes", () => {
    const { container } = render(<LogoSquare />);
    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper.className).toContain("border");
    expect(wrapper.className).toContain("border-neutral-200");
    expect(wrapper.className).toContain("bg-white");
    expect(wrapper.className).toContain("dark:border-neutral-700");
    expect(wrapper.className).toContain("dark:bg-black");
  });
});
