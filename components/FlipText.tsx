"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div id="about">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="We Provide "
          words={["Azure Cloud Migration", "Power BI Solutions", "Data Migration","DevOps Services",".NET Developmen","Consulting Services","Consulting Services",  "Recruiting Services"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-lg text-neutral-600 dark:text-neutral-400">
        Zhtoton Technologies LLC is a forward-thinking IT firm driving digital transformation and delivering talent solutions. Our website highlights expertise in Azure cloud, Power BI, ETL, Dynamics 365, DevOps, .NET, consulting, and recruiting—engaging SMEs and startups through insights and success stories to convert visitors into clients.
      </p>
    </div>
  );
}
