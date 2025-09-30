import { ThreeDCardDemo } from "@/components/3Dcard";
import { LayoutTextFlipDemo } from "@/components/FlipText";
import Globe from "@/components/Globe";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCard";
import { NavbarDemo } from "@/components/ResizableNavbar";
import { WobbleCardDemo } from "@/components/WobbleCard";
import Image from "next/image";

export default function Home() {
  return (
<div>
<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <NavbarDemo/>
        <HeroParallaxDemo/>
        <div className="pb-10"></div>
        <LayoutTextFlipDemo/>
        <ThreeDCardDemo/>
        <WobbleCardDemo/>
        <InfiniteMovingCardsDemo/>

    </div>
    <div className="w-[100vw] h-[200vh]">
      <Globe/>
      </div>
    </div>
  );
}
