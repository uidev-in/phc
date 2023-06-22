"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Poppins } from "next/font/google";
import Slider from "react-slick";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Clients({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="m-0 lg:pt-36 [&>li]:!w-auto [&>li>div]:bg-secondary-gray [&>li.slick-active>div]:bg-primary-green ">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="h-1 w-10"></div>,
  };

  return (
    <>
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
          <h2
            className={`text-center font-semibold text-2xl lg:text-5xl ${poppins.className} text-primary-gray mb-5 lg:mb-14`}
          >
            Partners
          </h2>
          <Slider {...settings} className="lg:pb-16 slick-image-center">
            {data.map((item, idx) => (
              <div
                className="!inline-flex items-center h-full justify-center"
                key={item.id}
              >
                <img
                  src={item.image}
                  height="auto"
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="max-w-[150px] m-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
