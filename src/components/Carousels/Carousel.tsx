"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";

const images = [
  {
    url: "/assets/logos/logo-1.svg",
    alt: "Logo1",
  },

  {
    url: "/assets/logos/logo-2.svg",
    alt: "Logo2",
  },

  {
    url: "/assets/logos/logo-3.svg",
    alt: "Logo3",
  },

  {
    url: "/assets/logos/logo-4.svg",
    alt: "Logo4",
  },

  {
    url: "/assets/logos/logo-5.svg",
    alt: "Logo5",
  },

  {
    url: "/assets/logos/logo-6.svg",
    alt: "Logo6",
  },

  {
    url: "/assets/logos/logo-7.svg",
    alt: "Logo7",
  },

  {
    url: "/assets/logos/logo-8.svg",
    alt: "Logo8",
  },

  {
    url: "/assets/logos/logo-9.svg",
    alt: "Logo9",
  },

  {
    url: "/assets/logos/logo-10.svg",
    alt: "Logo10",
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
    <Layout>
      <div
        className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10
        bg-gradient-to-r
        from-blue-500
        to-green-300
        bg-clip-text
        text-transparent

        
        "
      >
        Brands who trust us
      </div>

      <div className="grid grid-cols-3 p-4 md:flex">
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
              className="flex items-center justify-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Carousel;
