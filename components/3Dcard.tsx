"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonHref?: string;
  ctaText?: string;
}

// Single 3D Card Component
export const ThreeDCard = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText = "Try now →",
  buttonHref = "#",
  ctaText = "Sign up" 
}: CardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={buttonHref}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {buttonText}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {ctaText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

// Sample card data
const cardData = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonHref: "https://twitter.com/mannupaaji"
  },
  {
    title: "Digital Art Creation",
    description: "Transform your ideas into stunning digital masterpieces with AI",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Create now →"
  },
  {
    title: "Mountain Adventures",
    description: "Explore breathtaking landscapes and discover hidden gems",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Explore →"
  },
  {
    title: "Ocean Depths",
    description: "Dive into the mysterious world beneath the waves",
    imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Dive in →"
  },
  {
    title: "Urban Exploration",
    description: "Discover the hidden beauty in modern cityscapes",
    imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Discover →"
  },
  {
    title: "Space Journey",
    description: "Embark on an interstellar adventure beyond imagination",
    imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Launch →"
  }
];

// Main Demo Component with Multiple Cards
export function ThreeDCardDemo() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        
        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {cardData.map((card, index) => (
            <div key={index} className="mix-h-[70vh] w-full max-w-sm">
              <ThreeDCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                buttonHref={card.buttonHref}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}