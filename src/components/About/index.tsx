import Layout from "@/layouts/Layout";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <h3
        className="
         text-3xl
         flex
         justify-center
         md:text-5xl
         font-bold
         pt-5
         pb-10
         bg-gradient-to-tl from-green-400 via-orange-300 to-green-400
         bg-clip-text
         text-transparent
         my-4"
      >
        {/* //  bg-gradient-to-r from-purple-400 to-blue-800 */}
        Frequently Asked Questions
      </h3>
    </Layout>
  );
};

export default AboutUs;
