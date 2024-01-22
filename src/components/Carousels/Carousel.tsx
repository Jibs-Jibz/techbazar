"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";

const images = [
  {
    url: "/assets/logos/cvmedik.png",
    alt: "Logo1",
  },

  {
    url: "/assets/logos/yimika.jpg",
    alt: "Logo2",
  },
  {
    url: "/assets/logos/yomi-visuals.jpg",
    alt: "Logo3",
  },
  {
    url: "/assets/logos/publicity-house.png",
    alt: "Logo3",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout className="mt-12">
      <div
        className="items-center justify-center flex header-text font-bold md:pb-10 px-10
        bg-gradient-to-r
        gradient-text
        bg-clip-text
        text-transparent"
      >
        Brands who trust us
      </div>

      <div className="grid grid-cols-3 p-4 md:flex gap-x-8 md:justify-center ">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center  w-[150px]"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={150}
                height={150}
                className="object-contain aspect-video items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Carousel;
