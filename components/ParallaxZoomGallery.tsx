"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function ParallaxZoomGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [offsetTop, setOffsetTop] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setOffsetTop(ref.current.offsetTop);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  // Scroll progress relative to this component viewport
  const progress = useTransform(
    scrollY,
    [offsetTop, offsetTop + height],
    [0, 1]
  );

  const scale = useTransform(progress, [0, 0.5], [1, 4]);
  const opacity = useTransform(progress, [0, 0.4, 0.6, 1], [1, 0.7, 0.7, 0]);

  return (
    <div ref={ref} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <motion.img
          src="/vs3.jpg"
          style={{
            scale,
            opacity,
            transformOrigin: "center center",
            width: "30vw",
            height: "auto",
            borderRadius: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
          alt="Zoom Image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
