"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    name: "IT Consulting",
    img: "/assets/it-consulting.png",
    description:
      "Strategic guidance for leveraging IT to achieve business goals.",
  },
  {
    name: "Managed Services",
    img: "/assets/managed-services.png",
    description:
      "Outsourced management of your IT infrastructure for efficiency.",
  },
  {
    name: "Infrastructure Support & Maintenance",
    img: "/assets/structure.png",
    description:
      "Ongoing support and maintenance to keep your systems running smoothly.",
  },
  {
    name: "Web Design & Development",
    img: "/assets/webdev.png",
    description:
      "Creative and effective web solutions tailored to your business needs.",
  },
  {
    name: "Virtualized Infrastructure",
    img: "/assets/infrastructure.png",
    description:
      "Efficient utilization of virtualization technologies for optimal resource allocation.",
  },
  {
    name: "Surveillance Security System",
    img: "/assets/surveillance.png",
    description:
      "Robust security solutions to safeguard your premises and assets.",
  },
  {
    name: "Sales and Delivery of IT Equipment",
    img: "/assets/saless.png",
    description:
      "Procurement and delivery of high-quality IT equipment for your business.",
  },
];

const ServicesPage = () => {
  return (
    <div id="services" className="text-gray-800">
      <div className="flex flex-col items-center justify-center">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                gradient-text
                bg-clip-text
                text-transparent
                "
        >
          Our Services
        </div>
        <div className=" max-w-[600px] dark:text-gray-400 text-sm lg:text-base text-center">
          Our team of experts is dedicated to providing top-notch IT solutions
          that propel your business forward. We combine technical proficiency
          with industry best practices to deliver tailored services.{" "}
        </div>
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-col space-y-6 p-4 lg:p-8 border rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <Image
                src={service.img}
                alt={`${service.name} Icon`}
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <div className=" text-lg text-center lg:text-xl font-bold pb-4 bg-gradient-to-t from-black to-gray-400 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                {service.name}
              </div>
              <div className="text-sm dark:text-gray-400 lg:text-base text-center">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
