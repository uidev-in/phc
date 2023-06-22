"use client";
import React, { useState } from "react";
import FAQ from "./Faq";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export default function Faq({ data }) {
  const [faqs, setFaqs] = useState(data);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <section className="pb-5 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 lg:py-2">
            <h3
              className={` ${poppins.className} font-semibold text-3xl lg:text-5xl  text-primary-gray mb-5 lg:mb-7`}
            >
              Frequently Asked Questions
            </h3>
          </div>
        </div>
        <div className="max-w-6xl mx-auto ">
          <div className="faqs p-0">
            {faqs?.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
