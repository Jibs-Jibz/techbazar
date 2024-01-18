"use client";
import { useState } from "react";
import Accordion from "../Accordion";

const faqs = [
  {
    id: 1,
    question: "What industries do you specialize in?",
    answer:
      "We serve clients across various industries, including finance, healthcare, retail, manufacturing, education, government, and energy.",
  },
  {
    id: 2,
    question: "How can your IT solutions benefit my business?",
    answer:
      "Our IT solutions are designed to enhance efficiency, improve security, streamline operations, and drive business growth. We analyze your unique requirements to deliver tailored solutions that meet your goals.",
  },
  {
    id: 3,
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive support and maintenance services to ensure the smooth functioning of your IT infrastructure. Our dedicated team is available to address any issues and provide timely assistance.",
  },
  {
    id: 4,
    question: "Can you handle both small and large-scale projects?",
    answer:
      "Absolutely! We have experience working with businesses of all sizes. Whether you have a small project or require enterprise-level solutions, we have the expertise to deliver exceptional results.",
  },
  {
    id: 5,
    question: "How can I get started with TechBazr?",
    answer:
      "Simply contact us via phone, email, or the contact form on our website. We will schedule a consultation to understand your requirements and recommend the most suitable IT solutions for your business.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<boolean | number>(0);

  return (
    <div
      id="faq"
      className=" w-full py-8 lg:py-20 flex flex-col text-center items-center  px-6 lg:px-14 "
    >
      <div>
        <p
          className="
         text-3xl
         flex
         justify-center
         md:text-5xl
         font-bold
         pt-5
         pb-10
         bg-gradient-to-r
         from-purple-400
         to-blue-800
         bg-clip-text
         text-transparent
        my-4"
        >
          Frequently Asked Questions
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full mx-auto items-center mt-8 lg:mt-12">
        {faqs.map((val) => {
          return (
            <Accordion
              i={val.id}
              key={val.id}
              expanded={expanded}
              setExpanded={setExpanded}
              title={val.question}
              content={val.answer}
            />
          );
        })}
      </div>
    </div>
  );
}
