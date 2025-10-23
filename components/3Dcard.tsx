"use client";

import React from "react";
import { CardBody, CardContainer, CardItem  } from "@/components/ui/3d-card";
import { HoverBorderGradientDemo } from "./Buttonh1";

// Card data array
const cardData = [
  {
    title: "Azure Cloud Migration",
    description: "Seamless migration of workloads, applications, and infrastructure to Microsoft Azure, ensuring minimal downtime, enhanced security, and cost efficiency",
    image: "/acurecm.png",
    primaryButton: "Try now →",
    secondaryButton: "Sign up"
  },
  {
    title: "Power BI Solutions",
    description: "Custom-built interactive dashboards, data visualizations, and business intelligence tools to unlock actionable insights from complex datasets, enabling informed decision-making.",
    image: "/bi.png",
    primaryButton: "Explore →",
    secondaryButton: "Learn More"
  },
  {
    title: "Data Migration & ETL Processes",
    description: "Secure, efficient data transfers across systems and platforms, coupled with robust Extract, Transform, Load (ETL) processes to ensure data accuracy, compliance, and scalability.",
    image: "/dm.png",
  },
  {
    title: "DevOps Services",
    description: "Streamlined development and operations through CI/CD pipelines, automation, containerization, and infrastructure-as-code, optimizing software delivery and system reliability in cloud environments.",
    image: "/devop.png",
  },
  {
    title: ".NET Development",
    description: "Custom development and modernization of applications using the .NET framework, delivering scalable, high-performance solutions tailored to business needs.",
    image: "/net.png",
    primaryButton: "Discover →",
    secondaryButton: "Book Demo"
  },
  {
    title: "Consulting Services",
    description: "Strategic IT advisory, including digital transformation, process optimization, and system architecture, to align technology with business objectives.",
    image: "/conserv.png",
    primaryButton: "Install →",
    secondaryButton: "Documentation"
  },
    {
    title: "Recruiting Services",
    description: "Specialized talent acquisition for IT roles, connecting clients with top professionals in cloud, data, BI, ERP, CRM, DevOps, and .NET domains to build high-performing teams.",
    image: "/recr.png",
    primaryButton: "Install →",
    secondaryButton: "Documentation"
  },  
  {
    title: "Dynamics 365 & ERP/CRM",
    description: "Expert implementation, customization, and integration of Microsoft Dynamics 365 and other ERP/CRM platforms to streamline operations, enhance customer relationships, and drive business growth.",
    image: "/365.png",
    primaryButton: "Install →",
    secondaryButton: "Documentation"
  }
];

// Individual Card Component with Fixed Sizing
function SingleCard({ 
  title, 
  description, 
  image
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <CardContainer 
      className="inter-var w-full" 
      containerClassName="py-8 px-2"
    >
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm mx-auto h-auto md:h-[70vh] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-10"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="240"
            width="400"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Main Component with Proper Spacing
export function ThreeDCardDemo() {
  return (
    <div className="w-full min-h-screen  py-12 px-4" id="services">
      {/* Header Section */}


      {/* Cards Grid with Proper Spacing */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {cardData.map((card, index) => (
            <div key={index} className="w-full">
              <SingleCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
          
        </div>
      </div>

      {/* Footer Section */}

    </div>
  );
}
