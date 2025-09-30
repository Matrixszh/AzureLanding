import { ThreeDCardDemo } from "@/components/3Dcard";
import { LayoutTextFlipDemo } from "@/components/FlipText";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCard";
import { NavbarDemo } from "@/components/ResizableNavbar";
import { ThreeDCardDemo as CardsShowcase } from "@/components/3Dcard";
import { GlobeDemo } from "@/components/Globe";
import { WobbleCardDemo } from "@/components/WobbleCard";
import { VortexDemo } from "@/components/BackgroundVortex";
import ParallaxZoomGallery from "@/components/ParallaxZoomGallery";
import { FocusCardsDemo } from "@/components/FocusCards";
import { SignupFormDemo } from "@/components/Form";
import { Vortex } from "@/components/ui/vortex";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavbarDemo />
      <HeroParallaxDemo />
      <div className="pb-10" />
      <LayoutTextFlipDemo />
      <CardsShowcase />
      <WobbleCardDemo />
        <section className="w-full max-w-5xl h-[28rem] md:h-[32rem] lg:h-[36rem]">
        <div>
          <h1 className="text-justify flex text-5xl font-medium justify-center items-center">Title</h1>
          <h1 className="pt-4 text-justify flex text-xl font-normal justify-center items-center">SubTitle</h1>
        </div>
        <GlobeDemo />
      </section>
    </div>
    <div className="w-full min-h-screen ">
    <VortexDemo/>
    </div>
    <div className="w-full min-h-screen pb-20">
    <FocusCardsDemo/>
    </div>   
    <SignupFormDemo/>
    <Footer/>
    </div>
    
  );
}
