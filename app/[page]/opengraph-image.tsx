import OpengraphImage from "@/components/opengraph-image";
// import { getPage } from "lib/shopify";
import { pages } from "@/lib/testData";

export const runtime = "edge";

export default async function Image({ params }: { params: { page: string } }) {
  //   const page = await getPage(params.page);
  const page = pages.find((page) => page.path === params.page);

  if (!page) {
    return null;
  }
  
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
