import OpengraphImage from "@/components/opengraph-image";
import { pages } from "@/lib/testData";

export const runtime = "edge";

export default async function OpengraphImageGenerator({
  params,
}: {
  params: { page: string };
}) {
  const pageData = pages.find((page) => page.path === params.page);

  if (!pageData) {
    return null;
  }

  const title = pageData.seo?.title ?? pageData.title;

  return OpengraphImage({ title });
}
