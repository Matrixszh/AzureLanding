import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCard";

export function VortexDemo() {
  return (
    <div className="w-[100vw] mx-auto rounded-md h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-[100vh]"
      >
        <InfiniteMovingCardsDemo/>
      </Vortex>
    </div>
  );
}
