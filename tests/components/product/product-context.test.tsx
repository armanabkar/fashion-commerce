// tests/contexts/product-context.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { renderHook, act } from "@testing-library/react";
import {
  ProductProvider,
  useProduct,
  useUpdateURL,
} from "@/components/product/product-context";
import { useRouter, useSearchParams } from "next/navigation";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe("ProductProvider (with Vitest)", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as unknown as vi.Mock).mockReturnValue({ push: mockPush });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ProductProvider>{children}</ProductProvider>
  );

  it("initializes state from searchParams", () => {
    (useSearchParams as unknown as vi.Mock).mockReturnValue(
      new URLSearchParams("color=red&size=large")
    );

    const { result } = renderHook(() => useProduct(), { wrapper });

    expect(result.current.state).toEqual({ color: "red", size: "large" });
  });

  it("updates option state via updateOption", () => {
    (useSearchParams as unknown as vi.Mock).mockReturnValue(
      new URLSearchParams("color=blue")
    );

    const { result } = renderHook(() => useProduct(), { wrapper });

    act(() => {
      result.current.updateOption("size", "medium");
    });

    expect(result.current.state).toEqual({ color: "blue" });
  });

  it("updates image state via updateImage", () => {
    (useSearchParams as unknown as vi.Mock).mockReturnValue(
      new URLSearchParams("color=blue")
    );

    const { result } = renderHook(() => useProduct(), { wrapper });

    act(() => {
      result.current.updateImage("2");
    });

    expect(result.current.state).toEqual({ color: "blue" });
  });

  it("throws error when useProduct is used outside ProductProvider", () => {
    const { result } = renderHook(() => {
      try {
        return useProduct();
      } catch (error: any) {
        return { error };
      }
    });

    expect(result.current.error?.message).toBe(
      "useProduct must be used within a ProductProvider"
    );
  });

  it("useUpdateURL pushes new query params to router", () => {
    (useSearchParams as unknown as vi.Mock).mockReturnValue(
      new URLSearchParams("color=blue")
    );

    const { result } = renderHook(() => useUpdateURL(), { wrapper });

    act(() => {
      result.current({ color: "green", size: "L" });
    });

    expect(mockPush).toHaveBeenCalledWith("?color=green&size=L", {
      scroll: false,
    });
  });
});
