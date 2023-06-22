"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

const Hero = () => {
  return (
    <section className={`${poppins.className}`}>
      <div
        className="bg-white relative z-40 py-20"
        // style={{
        //   backgroundImage: "url(slider_img_bg.png)",
        // }}
      >
        <div
          className="lg:hidden relative pt-[50.256410256410256%]"
          aria-hidden="true"
        >
          <div className="grad-white w-full h-full absolute inset-0 m-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-10 relative z-20 lg:pb-0">
          <div className="flex justify-between lg:min-h-[448px]">
            <div className="relative z-10 py-6 md:py-12">
              <h1 className="w-[80%] text-primary-gray  lg:max-w-3xl font-semibold text-3xl lg:text-6xl lg:leading-[70px]">
                Build Your{" "}
                <span className="text-primary-orange"> Perfect Body </span> With
                Us
              </h1>
              <p className="text-xl text-primary-gray mt-4 hidden lg:block lg:max-w-lg">
                Lets food be the medicine and medicine be the food
              </p>
              <button
                className={`${poppins.className} bg-primary-purple hover:bg-primary-purple/90 font-semibold text-white text-base px-7 py-4 rounded-full my-6`}
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div
            className="absolute top-0 z-40 right-14 lg:right-0 h-full mlg:max-w-[300px] lg:max-w-[350px] xl:max-w-[410px] hidden lg:block"
            aria-hidden="true"
          >
            <img src="/bg/header-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
