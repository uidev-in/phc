import React from "react";
import Slider from "react-slick";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export default function RelatedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 lg:pt-36 [&>li]:!w-auto [&>li>div]:bg-secondary-gray [&>li.slick-active>div]:bg-primary-orange ">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="h-1 w-10"></div>,
  };

  return (
    <section className="px-5 md:py-10 lg:16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
        <h2 className={`${poppins.className} font-bold text-3xl`}>
          RELATED PRODUCTS
        </h2>
        <Slider {...settings} className="lg:pb-16 ">
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <div class="mt-11 w-80 mr-1 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  Product Name
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                  </p>
                  <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                  </p>
                  <p class="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
