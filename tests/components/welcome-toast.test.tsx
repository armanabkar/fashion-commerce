import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { WelcomeToast } from "@/components/welcome-toast";
import { toast } from "sonner";

// Mock the toast function from 'sonner'
vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

describe("WelcomeToast", () => {
  const originalCookie = document.cookie;
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    (toast as vi.Mock).mockClear();
    document.cookie = "";
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800, // default value
    });
  });

  afterEach(() => {
    document.cookie = originalCookie;
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: originalInnerHeight,
    });
  });

  it("shows welcome toast when height is sufficient and cookie is not set", () => {
    render(<WelcomeToast />);
    expect(toast).toHaveBeenCalledWith(
      "🛍️ Welcome to Fashion Commerce!",
      expect.objectContaining({
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: expect.any(Function),
        description: expect.anything(),
      })
    );
  });

  it("does not show toast if window.innerHeight is too small", () => {
    window.innerHeight = 600;
    render(<WelcomeToast />);
    expect(toast).not.toHaveBeenCalled();
  });

  it("does not show toast if cookie is already set", () => {
    document.cookie = "welcome-toast=2";
    render(<WelcomeToast />);
    expect(toast).not.toHaveBeenCalled();
  });

  // it("onDismiss sets the welcome-toast cookie correctly", () => {
  //   render(<WelcomeToast />);
  //   const lastCall = (toast as vi.Mock).mock.calls[0];
  //   const options = lastCall[1];

  //   // Simulate dismiss
  //   options.onDismiss();
  //   expect(document.cookie).toContain("welcome-toast=2");
  // });
});
