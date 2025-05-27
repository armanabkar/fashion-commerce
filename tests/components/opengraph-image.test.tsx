import { describe, it, expect, vi, beforeEach } from "vitest";
import getOpenGraphImage from "@/components/opengraph-image";
import { ImageResponse } from "next/og";

vi.mock("./icons/logo", () => ({
  default: () => <svg data-testid="logo-icon" />,
}));

// Mock ImageResponse class to inspect its constructor arguments
vi.mock("next/og", () => {
  return {
    ImageResponse: vi.fn(),
  };
});

describe("getOpenGraphImage", () => {
  const mockFontData = new ArrayBuffer(8);

  beforeEach(() => {
    vi.resetAllMocks();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        arrayBuffer: () => Promise.resolve(mockFontData),
      })
    ) as any;
  });

  it("uses the provided titleOverride when given", async () => {
    const title = "Custom Title";

    await getOpenGraphImage({ title });

    const responseCall = (ImageResponse as unknown as vi.Mock).mock.calls[0];
    const jsx = responseCall[0];
    const config = responseCall[1];

    expect(jsx.props.children[1].props.children).toBe(title);
    expect(config).toMatchObject({
      width: 1200,
      height: 630,
    });
  });

  it("uses process.env.SITE_NAME when titleOverride is not provided", async () => {
    const fallbackTitle = "My Default Site";
    process.env.SITE_NAME = fallbackTitle;

    await getOpenGraphImage();

    const responseCall = (ImageResponse as unknown as vi.Mock).mock.calls[0];
    const jsx = responseCall[0];

    expect(jsx.props.children[1].props.children).toBe(fallbackTitle);
  });

  it("fetches and embeds the Inter font", async () => {
    await getOpenGraphImage({ title: "Test" });

    const responseCall = (ImageResponse as unknown as vi.Mock).mock.calls[0];
    const config = responseCall[1];

    expect(global.fetch).toHaveBeenCalled();
    expect(config.fonts[0]).toMatchObject({
      name: "Inter",
      weight: 700,
      style: "normal",
      data: mockFontData,
    });
  });

  it("returns an ImageResponse instance", async () => {
    // Fake return value
    const fakeResponse = { fake: true };
    (ImageResponse as unknown as vi.Mock).mockReturnValue(fakeResponse);

    const result = await getOpenGraphImage({ title: "Hello" });
    expect(result).toBe(fakeResponse);
  });
});
