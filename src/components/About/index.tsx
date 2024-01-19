import Layout from "@/layouts/Layout";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
  return (
    <Layout>
      <h3
        className=" text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-clip-text
         gradient-text text-transparent my-4"
      >
        About Us
      </h3>
      <div className="flex flex-col gap-6">
        <div className=" flex flex-col gap-3 justify-center items-center ">
          <h3 className=" text-lg lg:text-2xl capitalize font-semibold ">
            our core values:
          </h3>
          <p className=" text-sm lg:text-base ">
            {" "}
            Innovation, integrity and Excellence
          </p>
        </div>

        <div className=" flex flex-col  items-center justify-center gap-3 ">
          <h3 className=" text-lg lg:text-2xl capitalize font-semibold ">
            our mission:
          </h3>
          <p className=" text-sm text-center  lg:text-base ">
            our mission is to be the unparalleled provider of everyday tech
            solutions, dedicated to delivering excellence through innovation,
            reliability, and a commitment to quality service. We strive to
            empower individuals and businesses by seamlessly integrating
            cutting-edge technology into their daily lives. With a passion for
            customer satisfaction, we pledge to uphold the highest standards of
            service, ensuring that every interaction with TechBazr is a positive
            and enriching experience. Our unwavering dedication to quality
            defines us as your trusted partner in navigating the ever-evolving
            world of technology
          </p>
          <Marquee
            className="  "
            //   className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 "
          >
            <div className=" w-[250px] mx-4 gap-3 flex flex-col items-center justify-center text-center  p-4 h-full  ">
              <Image
                src="/assets/integrity.png"
                alt="Image for "
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <h3 className=" font-semibold  ">Integrity:</h3>
              <p className=" text-sm ">
                Uphold the highest ethical standards, promoting honesty,
                transparency, and accountability in all interactions, both
                internally and externally.
              </p>
            </div>
            <div className=" w-[250px] mx-4 gap-3 flex flex-col items-center justify-center text-center  p-4 h-full  ">
              <Image
                src="/assets/innovation.png"
                alt="Image for "
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <h3 className=" font-semibold  ">Innovation:</h3>
              <p className=" text-sm ">
                Embrace a culture of continuous improvement, fostering
                creativity and forward-thinking to stay at the forefront of
                technological advancements.
              </p>
            </div>
            <div className=" w-[250px] mx-4 gap-3 flex flex-col items-center justify-center text-center  p-4 h-full  ">
              <Image
                src="/assets/quality-excellence.png"
                alt="Image for "
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <h3 className=" font-semibold  ">Quality Excellence:</h3>
              <p className=" text-sm ">
                Commit to delivering top-notch quality in every aspect of our
                products and services, ensuring that TechBazr is synonymous with
                excellence in the tech solutions industry.
              </p>
            </div>
            <div className=" w-[250px] mx-4 gap-3 flex flex-col items-center justify-center text-center  p-4 h-full  ">
              <Image
                src="/assets/community-engagement.png"
                alt="Image for "
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <h3 className=" font-semibold  ">Community Engagement:</h3>
              <p className=" text-sm ">
                Actively contribute to the community by sharing knowledge,
                supporting educational initiatives, and participating in
                philanthropic efforts that align with our values.
              </p>
            </div>
            <div className=" w-[250px] mx-4 gap-3 flex flex-col items-center justify-center text-center  p-4 h-full  ">
              <Image
                src="/assets/customer.png"
                alt="Image for "
                width={300}
                height={300}
                className="object-contain mx-auto h-20 w-20 mb-6"
              />
              <h3 className=" font-semibold  ">Customer-Centric Approach:</h3>
              <p className=" text-sm ">
                Prioritize our customers' needs and experiences, striving to
                exceed expectations through personalized service, active
                listening, and responsive solutions.
              </p>
            </div>
          </Marquee>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg lg:text-2xl capitalize font-semibold text-primary dark:text-primary-light">
            Our Vision
          </h3>
          <p className="text-sm text-center lg:text-base text-gray-600 dark:text-gray-300">
            Our vision is dedicated to shaping a connected world where
            possibilities are limitless, and the benefits of technology are
            within everyone's reach.
          </p>
          <div className="grid grid-cols-1 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold">B - Bold Innovation:</h3>
              <p>
                In our culture, we embrace bold innovation, encouraging our team
                to think creatively and push the boundaries of what's possible
                in the tech world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">A - Agile Collaboration:</h3>
              <p>
                Agility is at the core of our collaborative approach. We value
                quick adaptation to changes and seamless collaboration, ensuring
                our team can respond effectively to the dynamic tech landscape.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Z - Zealous Team Spirit:</h3>
              <p>
                Zeal runs through the veins of our team. We foster a culture of
                enthusiasm and team spirit, where every member is motivated to
                contribute their best to the collective success of TechBazr.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">R - Respectful Diversity:</h3>
              <p>
                Respect is the foundation of our diverse and inclusive culture.
                We celebrate differences, recognizing that a variety of
                perspectives enhances our creativity and problem-solving
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
