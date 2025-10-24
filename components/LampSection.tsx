"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/lamp";

export function BackgroundBeamsDemo() {
  return (
    <div id="blogs">
      <h1 className="relative z-10 text-4xl md:text-5xl bg-gradient-to-b from-gray-500 via-gray-400 to-gray-100 bg-clip-text text-transparent  text-center font-sans font-bold ">
          Blogs
        </h1>
    <div className="h-[80vh] w-full rounded-md bg-neutral-950 relative flex flex-col lg:flex-row items-center justify-center antialiased">
      
      <div className="max-w-2xl mx-auto p-4">
        
        <h1 className="relative z-10 text-2xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Target Audience
        </h1>
        <p></p>
        <p className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We serve small to medium-sized enterprises (SMEs) and growing startups across industries such as finance, healthcare, retail, and manufacturing. Our clients include businesses pursuing digital modernization, legacy system upgrades, or scalable, cloud-based technology solutions. With a client-centric approach, we deliver tailored solutions that foster innovation, efficiency, and measurable results.
        </p>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Goals
        </h1>
        <p></p>
        <p className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          The primary goal of the Zhtoton Technologies LLC is to drive lead generation while establishing a robust brand presence. It showcases our comprehensive services, including Azure cloud migration, Power BI solutions, data migration and ETL processes, Dynamics 365 and ERP/CRM implementations, DevOps services, .NET development, consulting, and recruiting, in a clear and client-centric manner.Additionally, it is a platform for thought leadership, sharing insights on cloud technology, data analytics, ETL processes, DevOps practices, .NET development, and ERP/CRM trends to engage and educate our target audience of SMEs and startups, ultimately converting visitors into clients
        </p>
      </div>
      <BackgroundBeams />
    </div>
    </div>
  );
}
