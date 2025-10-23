"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Zhtoton Technologies transformed our legacy systems with their Azure migration expertise. Their team ensured zero downtime and improved our cloud efficiency beyond expectations.",
    name: "David Nguyen",
  },
  {
    quote:
      "Partnering with Zhtoton for Power BI and data analytics has been a game changer. Their dashboards turned complex datasets into actionable insights for our leadership team.",
    name: "Priya Menon",
  },
  {
    quote:
      "The DevOps implementation by Zhtoton streamlined our deployment cycles and improved system reliability. Their Azure-first strategy truly elevated our development workflow.",
    name: "Jonathan Brooks",
  },
  {
    quote:
      "Their Dynamics 365 integration modernized our entire operations pipeline. Zhtoton’s consultants were responsive, highly skilled, and committed to our success.",
    name: "Amira Khalid",
  },
  {
    quote:
      "Zhtoton Technologies not only delivered a robust .NET solution but also guided us through cloud adoption seamlessly. Their professionalism and deep Azure knowledge stood out.",
    name: "Rohit Deshmukh",
  },
];
