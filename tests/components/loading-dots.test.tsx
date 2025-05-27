import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import LoadingDots from "@/components/loading-dots";

describe("LoadingDots", () => {
  it("renders three dot elements", () => {
    const { container } = render(<LoadingDots className="" />);
    const dotSpans = container.querySelectorAll("span > span");
    expect(dotSpans.length).toBe(3);
  });

  it("applies base dot styles to each dot", () => {
    const { container } = render(<LoadingDots className="" />);
    const dotSpans = container.querySelectorAll("span > span");

    dotSpans.forEach((dot) => {
      expect(dot.className).toContain("mx-[1px]");
      expect(dot.className).toContain("inline-block");
      expect(dot.className).toContain("h-1");
      expect(dot.className).toContain("w-1");
      expect(dot.className).toContain("animate-blink");
      expect(dot.className).toContain("rounded-md");
    });
  });

  it("applies correct animation delays to second and third dots", () => {
    const { container } = render(<LoadingDots className="" />);
    const dotSpans = container.querySelectorAll("span > span");

    expect(dotSpans[1].className).toContain("animation-delay-[200ms]");
    expect(dotSpans[2].className).toContain("animation-delay-[400ms]");
  });

  it("applies custom className to all dots", () => {
    const customClass = "text-red-500";
    const { container } = render(<LoadingDots className={customClass} />);
    const dotSpans = container.querySelectorAll("span > span");

    dotSpans.forEach((dot) => {
      expect(dot.className).toContain(customClass);
    });
  });
});
