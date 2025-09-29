"use client"
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Picture {
  src: string;
  scale: any;
  className?: string;
}

export default function ParallaxZoomGallery() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: Picture[] = [
    {
      src: '/vs3.jpg',
      scale: scale4,
      className: 'w-[25vw] h-[25vh]'
    },
    {
      src: '/vs2.jpg',
      scale: scale5,
      className: 'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]'
    },
    {
      src: '/vs3.jpg',
      scale: scale6,
      className: 'w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]'
    },
    {
      src: '/vs2.jpg',
      scale: scale5,
      className: 'w-[25vw] h-[25vh] left-[27.5vw]'
    },
    {
      src: '/vs3.jpg',
      scale: scale6,
      className: 'w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]'
    },
    {
      src: '/vs3.jpg',
      scale: scale8,
      className: 'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]'
    },
    {
      src: '/vs2.jpg',
      scale: scale9,
      className: 'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]'
    }
  ];

  return (
    <div ref={container} className="h-[300vh] relative bg-white" id="zoomp">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {pictures.map(({ src, scale, className }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`relative ${className}`}>
              <img
                src={src}
                alt={`Architecture ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}