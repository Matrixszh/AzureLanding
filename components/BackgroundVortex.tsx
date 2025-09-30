import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { InfiniteMovingCardsDemo } from "./InfiniteCard";

export function VortexDemo() {
  return (
    <div className="w-[100vw] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex

        className="bg-grey flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <InfiniteMovingCardsDemo/>
      </Vortex>
    </div>
  );
}
