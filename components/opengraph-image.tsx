import { ImageResponse } from "next/og";
import LogoIcon from "./icons/logo";

export type Props = {
  title?: string;
};

/**
 * Generates an Open Graph image with the given title.
 *
 * This function creates an Open Graph image using a specified title, or falls
 * back to the site's name if no title is provided. The image is designed with
 * a black background, a centrally positioned logo, and the title displayed
 * below the logo in large white text.
 *
 * The generated image has a resolution of 1200x630 pixels, and the title is
 * rendered using the "Inter" font with bold weight.
 *
 * @param titleOverride - An optional title to be used in the image. If not
 * provided, the site's name from the environment variables is used.
 *
 * @returns A Promise that resolves to an ImageResponse object containing the
 * generated Open Graph image.
 */
export default async function getOpenGraphImage({
  title: titleOverride,
}: { title?: string } = {}): Promise<ImageResponse> {
  const title = titleOverride ?? process.env.SITE_NAME;

  return new ImageResponse(
    (
      <div className="flex h-full w-full flex-col items-center justify-center bg-black">
        <div className="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <LogoIcon width={64} height={58} fill="white" />
        </div>
        <p className="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await fetch(
            new URL("../fonts/Inter-Bold.ttf", import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
