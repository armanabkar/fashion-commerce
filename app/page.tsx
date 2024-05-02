import { Carousel } from "@/components/carousel";
import Footer from "@/components/layout/footer";
import { ThreeItemGrid } from "@/components/grid/three-items";

export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
