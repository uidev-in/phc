import React from "react";
import { Poppins } from "next/font/google";
import Delivery from "../Icons/Delivery";
import MoneyBack from "../Icons/MoneyBack";
import Discount from "../Icons/Discount";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export default function Perks() {
  return (
    <>
      <section className="px-5 md:py-10 lg:16 bg-[#f19066]">
        <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 flex-wrap rounded-md">
            <div className=" bg-white w-full justify-center gap-5 md:gap-10 p-10 md:p-16 text-center rounded-md">
              <div className="mx-auto h-24 flex items-center">
                <Delivery className="w-12 md:w-16 m-auto" />
              </div>
              <h3
                className={`${poppins.className} text-primary-orange text-sm md:text-xl font-bold mb-5`}
              >
                FREE SHIPPING
              </h3>
              <p className={`${poppins.className} text-sm md:text-xl `}>
                Shop with us and enjoy free shipping on all orders, hassle-free.
              </p>
            </div>

            <div className=" bg-white w-full justify-center gap-5 md:gap-10 p-10 md:p-16 text-center">
              <div className="mx-auto h-24 flex items-center">
                <MoneyBack className="w-20  m-auto" />
              </div>
              <h3
                className={`${poppins.className} text-primary-orange text-sm md:text-xl font-bold mb-5`}
              >
                MONEY BACK GUARANTEE
              </h3>
              <p className={`${poppins.className} text-sm md:text-xl `}>
                Enjoy a 100% money-back guarantee on all purchases.
              </p>
            </div>

            <div className=" bg-white w-full justify-center gap-5 d:gap-10 p-10 md:p-16 text-center">
              <div className="mx-auto h-24 flex items-center">
                <Discount className="w-12 md:w-16 m-auto" />
              </div>
              <h3
                className={`${poppins.className} text-primary-orange text-sm md:text-xl font-bold mb-5`}
              >
                GIFT DISCOUNT
              </h3>
              <p className={`${poppins.className} text-sm md:text-xl `}>
                Get a special gift discount with your purchase - a little
                something extra just for you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
