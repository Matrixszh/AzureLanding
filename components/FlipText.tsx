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
        Zhtoton Technologies LLC is a forward-thinking IT services firm dedicated to driving digital transformation and delivering top-tier talent solutions. We empower businesses to achieve operational excellence and innovation through cutting-edge technology and strategic expertise.The primary goal of the Zhtoton Technologies LLC website is to drive lead generation while establishing a robust brand presence. The website will showcase our comprehensive services, including Azure cloud migration, Power BI solutions, data migration and ETL processes, Dynamics 365 and ERP/CRM implementations, DevOps services, .NET development, consulting, and recruiting, in a clear and client-centric manner. By highlighting our expertise and success stories, the website will position us as a trusted partner for digital transformation and talent solutions. Additionally, it will serve as a platform for thought leadership, sharing insights on cloud technology, data analytics, ETL processes, DevOps practices, .NET development, and ERP/CRM trends to engage and educate our target audience of SMEs and startups, ultimately converting visitors into clients.
      </p>
    </div>
  );
}
