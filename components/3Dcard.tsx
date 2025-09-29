"use client";

import React from "react";
import { CardBody, CardContainer, CardItem  } from "@/components/ui/3d-card";

// Card data array
const cardData = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "Try now →",
    secondaryButton: "Sign up"
  },
  {
    title: "Interactive 3D Effects",
    description: "Experience smooth animations and perspective transformations",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "Explore →",
    secondaryButton: "Learn More"
  },
  {
    title: "Modern UI Components",
    description: "Beautiful and responsive card components for your next project",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "Get Started →",
    secondaryButton: "Download"
  },
  {
    title: "Responsive Design",
    description: "Perfectly adapted for all screen sizes and devices",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "View Demo →",
    secondaryButton: "Contact Us"
  },
  {
    title: "CSS Perspective Magic",
    description: "Advanced CSS transforms that bring your interfaces to life",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "Discover →",
    secondaryButton: "Book Demo"
  },
  {
    title: "Next.js Integration",
    description: "Seamlessly integrate with your Next.js and React applications",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "Install →",
    secondaryButton: "Documentation"
  }
];

// Individual Card Component with Fixed Sizing
function SingleCard({ 
  title, 
  description, 
  image, 
  primaryButton, 
  secondaryButton 
}: {
  title: string;
  description: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
}) {
  return (
    <CardContainer 
      className="inter-var w-full" 
      containerClassName="py-8 px-2"
    >
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm mx-auto h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3"
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
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
          >
            {primaryButton}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {secondaryButton}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Main Component with Proper Spacing
export function ThreeDCardDemo() {
  return (
    <div className="w-full min-h-screen  py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-4">
          3D Card Collection
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Experience our beautiful collection of interactive 3D cards with stunning hover effects
        </p>
      </div>

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
                primaryButton={card.primaryButton}
                secondaryButton={card.secondaryButton}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16">
        <p className="text-neutral-500 dark:text-neutral-400">
          Hover over any card to see the 3D perspective effect in action
        </p>
      </div>
    </div>
  );
}
