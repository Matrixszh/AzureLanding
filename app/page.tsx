import { ThreeDCardDemo } from "@/components/3Dcard";
import { LayoutTextFlipDemo } from "@/components/FlipText";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCard";
import { NavbarDemo } from "@/components/ResizableNavbar";
import { ThreeDCardDemo as CardsShowcase } from "@/components/3Dcard";
import { GlobeDemo } from "@/components/Globe";
import { WobbleCardDemo } from "@/components/WobbleCard";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavbarDemo />
      <HeroParallaxDemo />
      <div className="pb-10" />
      <LayoutTextFlipDemo />
      <CardsShowcase />
      <WobbleCardDemo />
      <InfiniteMovingCardsDemo />
      <section className="w-full max-w-5xl h-[28rem] md:h-[32rem] lg:h-[36rem]">
        <GlobeDemo />
      </section>
    </div>
  );
}
