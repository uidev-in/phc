"use client";
import React, { useEffect } from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  useEffect(() => {
    const declaration = document.documentElement.style;
    declaration.setProperty("--bg-image", `url("/down_arrow.png")`);
  }, []);

  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={`faq-question text-xl`}>{faq.question}</div>
      <div className="faq-answer pt-1">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
