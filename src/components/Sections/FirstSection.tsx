"use client";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <Layout>
      <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
        <div className="container  mx-auto text-center">
          <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r gradient-text bg-clip-text text-transparent ">
            We are your everyday tech solutions provider.
          </div>
          <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent font-bold ">
            Empowering businesses with specialized IT services for growth and
            productivity.
          </p>
          <div className="flex relative gap-4 justify-center pt-10">
            <button
              onClick={() => (window.location.href = "/#services")}
              className="bg-blue-500 dark:bg-transparent   text-white px-10 py-4 rounded-md text-lg font-bold relative isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
              "
            >
              Explore Our Services
            </button>
            {/* <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
              Learn More
            </button> */}
          </div>

          <div className="pt-10 mt-10  w-full h-full max-w-[500px] max-h-[500px] flex mx-auto ">
            {/* Image Place Holder here */}
            <Image
              width={500}
              height={500}
              src="/assets/header-img.jpg"
              alt="Picture of the author"
              className=" object-cover object-center rounded-md"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FirstSection;
