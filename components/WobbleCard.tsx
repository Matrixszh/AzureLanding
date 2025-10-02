"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Digital Transformation & Talent Solutions
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Zhtoton Technologies LLC delivers end-to-end services including Azure cloud migration, Power BI analytics, data migration & ETL, Dynamics 365, ERP/CRM implementations, DevOps, and .NET development.
          </p>
        </div>
        <img
          src="/vs2.jpg"
          width={500}
          height={500}
          alt="Zhtoton Technologies services"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Trusted Partner for SMEs & Startups
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          We combine technical expertise with strategic consulting to drive innovation, efficiency, and growth for businesses navigating digital transformation.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gain Insights. Drive Innovation.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Explore our thought leadership on cloud technology, data analytics, ETL processes, DevOps practices, .NET development, and ERP/CRM trends. Stay ahead with expert insights tailored for forward-thinking organizations.
          </p>
        </div>
        <img
          src="/vs3.jpg"
          width={500}
          height={500}
          alt="Zhtoton Technologies insights"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
