"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { formValidation } from "@/Utils/validations";
import { useFormik } from "formik";
import axios from "axios";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

const initialState = {
  first_name: "",
  last_name: "",
  mobile: {},
  email: "",
  message: "",
  newsletter: true,
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: formValidation,
    onSubmit: (values) => {
      // debugger;
      console.log("Data", values);
      const bodyFormData = new FormData();
      bodyFormData.append("Name", values.first_name + " " + values.last_name);
      bodyFormData.append("Email", values.email);
      bodyFormData.append("Contact", values.mobile);
      bodyFormData.append("Message", values.message);
      bodyFormData.append("Newsletter", values.newsletter);
      // fetch(
      //   "https://script.google.com/macros/s/AKfycbyqFyvRh3hPDnwApQsKsjKKKoexdNo770NNoKhBSlORnGYQHgxPObKLVfKId8iu-zFr/exec",
      //   {
      //     method: "POST",
      //     body: bodyFormData,
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res);
      //   });
      axios({
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbyqFyvRh3hPDnwApQsKsjKKKoexdNo770NNoKhBSlORnGYQHgxPObKLVfKId8iu-zFr/exec",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log("Response", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  // console.log("Data", formik.values);

  return (
    <>
      <section className="" id="serviceForm">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className={`h-[20rem] lg:h-[40rem] relative`}>
              <picture>
                <source srcSet="/phc_form.avif" type="image/avif" />
                <source srcSet="/phc_form.webp" type="image/webp" />
                <img
                  className="absolute -z-10 object-cover object-left top-0 left-0 w-full h-full"
                  loading="lazy"
                  decoding="async"
                  src="/phc_form.jpg"
                  alt=""
                  width={589}
                  height={307}
                />
              </picture>
              <div
                className={`px-4 lg:p-20 flex flex-col justify-center h-full bg-primary-purple bg-opacity-30 `}
              >
                <h3
                  className={` ${poppins.className} leading-normal font-semibold text-4xl text-white mb-5 lg:mb-7`}
                >
                  LIVE HEALTHY?
                </h3>
                <p
                  className={` ${poppins.className} font-normal text-2xl  text-white mb-5 lg:mb-7`}
                >
                  Try our products and enjoy the healthiest life!
                </p>
              </div>
            </div>
            <div className="p-5 lg:p-20">
              <div className="">
                <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="first_name"
                        type="text"
                        placeholder="Radhe"
                        name="first_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                      />
                      {formik.touched.first_name &&
                        formik.errors.first_name && (
                          <span className="text-red-400">
                            {formik.errors.first_name}
                          </span>
                        )}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="last_name"
                        type="text"
                        placeholder="Krishna"
                        name="last_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                      />
                      {formik.touched.last_name && formik.errors.last_name && (
                        <span className="text-red-400">
                          {formik.errors.last_name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="email"
                        type="email"
                        placeholder="demo@gmail.com"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <span className="text-red-400">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="mobile"
                      >
                        Phone
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="mobile"
                        type="number"
                        placeholder="9999XXXX810"
                        name="mobile"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                      />
                      {formik.touched.mobile && formik.errors.mobile && (
                        <span className="text-red-400">
                          {formik.errors.mobile}
                        </span>
                      )}
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <span className="text-red-400">
                          {formik.errors.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="flex flex-wrap text-start -mx-3 mb-6 px-5">
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                      <input
                        class="mr-2 leading-tight"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newsletter}
                        name="newsletter"
                        checked={
                          formik.values.newsletter === true ? "checked" : ""
                        }
                      />
                      <span class="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <div class="flex flex-wrap text-center -mx-3 my-6 ">
                    <div class="w-full px-3">
                      <button
                        className={`${poppins.className} w-full  bg-primary-orange hover:bg-primary-purple/90 font-semibold text-white text-base px-7 py-4 rounded-full`}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
