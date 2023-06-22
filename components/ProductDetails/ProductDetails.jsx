"use client";
import React, { useState, useRef } from "react";
import { Poppins } from "next/font/google";
import Rupee from "../Icons/Rupee";
import { nanoid } from "nanoid";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ProductDetailTab(props) {
  const { title, slug, product_details } = props.data;
  const [active, setActive] = useState(0);
  const onChange = (index) => () => {
    setActive(index);
  };

  const [activePrice, setActivePrice] = useState(0);

  const priceOnChange = (index) => () => {
    setActivePrice(index);
  };

  console.log("Props", props);
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 ">
          <div className="flex  justify-center gap-10">
            <div className="flex items-center shadow-lg rounded-md ">
              <img
                src={product_details?.image}
                alt={title}
                width={587}
                height="auto"
              />
            </div>
            <div className={` ${poppins.className} flex-1`}>
              <h1 className="font-semibold text-xl pb-2">{title}</h1>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </div>
              <div className={` ${poppins.className} mt-5`}>
                <div className=" p-2 my-3">
                  <span className="font-semibold">Select gram : </span>
                </div>
                <div className="flex gap-5">
                  {product_details?.priceList?.map((item, idx) => (
                    <div
                      key={item?.id}
                      onClick={priceOnChange(idx, item)}
                      className={`p-2 bg-gray-50 min-w-[80px] text-center border shadow-md rounded-md cursor-pointer  ${
                        activePrice === idx
                          ? "font-bold  border-purple-500"
                          : ""
                      }`}
                    >
                      {item?.weight}
                    </div>
                  ))}
                </div>
              </div>
              <div className={` ${poppins.className} mt-3 ml-1`}>
                <div className="flex flex-start items-center gap-5">
                  <span className="font-semibold text-4xl">
                    ₹ {product_details?.priceList[activePrice]?.price}
                  </span>
                  <span className="text-red-600 line-through text-2xl">
                    ₹ {product_details?.priceList[activePrice]?.strike_price}
                  </span>

                  {product_details?.priceList[activePrice]?.in_stock ===
                  true ? (
                    <div className="bg-orange-400 w-[80px] text-center p-1 my-2 rounded-md">
                      <span className="font-semibold text-white text-xs">
                        IN STOCK
                      </span>
                    </div>
                  ) : (
                    <div className="bg-red-400 w-[120px] text-center p-1 my-2 rounded-md">
                      <span className="font-semibold text-white text-xs">
                        OUT OF STOCK
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <p className="py-5 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="text-gray-500">
                <p className="pb-2 font-semibold">Benefits:</p>
                <ui className="leading-[2rem] list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]">
                  {product_details?.benefits.map((list, idx) => (
                    <li key={list}>{list}</li>
                  ))}
                </ui>
              </div>
            </div>
          </div>

          {/* /tab code */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="flex w-full relative">
              {product_details?.tab_details?.map((item, index) => (
                <div
                  key={item}
                  onClick={onChange(index, item)}
                  className={`${poppins.className} ${
                    active === index
                      ? "text-primary-purple"
                      : "text-primary-gray/30"
                  } border-b-4 border-b-primary-gray/30 text-lg py-3 pr-5 font-semibold cursor-pointer w-1/2`}
                >
                  <div
                    className={`${poppins.className} max-w-full font-normal text-sm lg:text-2xl mb-5 flex flex-col gap-2 md:gap-5 `}
                  >
                    <p>{item.name}</p>
                  </div>
                </div>
                // border-b-primary-green
              ))}
              <div
                className={`bg-primary-orange h-1 w-1/2 absolute bottom-0 left-0 transition-all ${
                  active === 0 ? "translate-x-[0]" : "translate-x-[100%]"
                }`}
              ></div>
            </div>

            <div className="block mt-10">
              <div className="px-5">
                {/* <p>{tab_details[active]?.content}</p> */}
                {"content" in product_details?.tab_details[active] ? (
                  <p>{product_details?.tab_details[active]?.content}</p>
                ) : (
                  // <img src={product_details?.tab_details[active]?.table_img} />
                  <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div class="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                      <table class="min-w-full">
                        <thead>
                          <tr class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                            {product_details?.tab_details[
                              active
                            ]?.table_data?.column?.map((item, idx) => (
                              <th
                                class="px-6 py-3 text-left font-medium"
                                key={idx}
                              >
                                {item?.column_name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          {product_details?.tab_details[
                            active
                          ]?.table_data?.column_data.map((item, idx) => (
                            <tr key={idx}>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                  {item.nutrients}
                                </div>
                              </td>
                              {slug === "neofeed" ? (
                                ""
                              ) : (
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <div class="text-sm leading-5 text-gray-900">
                                    {item.unit}
                                  </div>
                                </td>
                              )}
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                  {item.per_100_gm}
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                  {item.per_15_gm}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* /tab code */}
        </div>
      </section>
    </>
  );
}
