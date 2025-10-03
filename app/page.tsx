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
import { BackgroundBeamsDemo } from "@/components/LampSection";

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
          <h1 className="text-justify flex text-4xl lg:text-5xl font-bold justify-center items-center">Global Coverage</h1>
          <h1 className="mt-4 text-center text-lg text-neutral-600 dark:text-neutral-400">We serve small to medium-sized enterprises (SMEs) and growing startups across industries such as finance, healthcare, retail, and manufacturing. Our clients include businesses pursuing digital modernization, legacy system upgrades, or scalable, cloud-based technology solutions. With a client-centric approach, we deliver tailored solutions that foster innovation, efficiency, and measurable results.</h1>
        </div>
        <GlobeDemo />
      </section>
    </div>
    <div className="w-full min-h-screen ">
    <VortexDemo/>
    </div>
    <div>
 
    <BackgroundBeamsDemo/>
    </div>
    <div className="w-full min-h-screen pb-20">
    <FocusCardsDemo/>
    </div>   
    <SignupFormDemo/>
    <Footer/>
    </div>
    
  );
}
