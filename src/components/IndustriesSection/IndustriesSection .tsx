"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industriesData = [
  {
    img: "/assets/hr-consulting.png",
    title: "HR Consulting",
    description:
      "Elevate your HR processes with strategic IT solutions. Streamline recruitment, enhance employee engagement, and optimize workflows for a dynamic workforce.",
  },
  {
    img: "/assets/tech.png",

    title: "Tech",
    description:
      "Your go-to partner for tech solutions. From IT consulting to managed services, we offer innovative technology solutions for startups and established tech companies.",
  },
  {
    img: "/assets/saless.png",

    title: "FMCG",
    description:
      "Stay competitive in the fast-paced FMCG sector. Our services, including web design, surveillance security, and IT support, are tailored to enhance efficiency.",
  },
  {
    img: "/assets/finance.png",
    title: "Finance",
    description:
      "Ensure secure and reliable financial operations. TechBazr provides IT solutions for infrastructure support, virtualized systems, and security, meeting the highest industry standards.",
  },
];

const IndustriesSection = () => {
  return (
    <div className="scroll-mt-20 scroll-smooth " id="industries">
      <h3
        className=" header-text flex justify-center font-bold pt-5 pb-10 bg-clip-text
         gradient-text text-transparent my-4"
      >
        Industries We Serve
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {industriesData.map((industry, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-black dark:border p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
          >
            <h3 className=" flex h-fit items-center text-xl font-semibold mb-4">
              <Image
                src={industry.img}
                alt="Image for "
                width={30}
                height={30}
                className="object-contain"
              />
              {industry.title}
            </h3>
            <p className="text-gray-700 dark:text-inherit ">
              {industry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesSection;
