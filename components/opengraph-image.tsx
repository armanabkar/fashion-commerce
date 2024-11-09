import { ImageResponse } from "next/og";
import LogoIcon from "./icons/logo";

export type Props = {
  title?: string;
};

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
