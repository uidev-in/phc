"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Poppins } from "next/font/google";
import CallIcon from "@/components/Icons/CallIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import {
  rowService,
  rowPolicies,
  socialLinks,
  company,
  rowServiceMobile,
  rowPoliciesMobile,
} from "@/constant/footer.constant";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons/SocialIcons";
import toast from "react-hot-toast";
import { MapIcon } from "../Icons/MapIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

function Footer() {
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbxS235syDZMhwVHi5fZNUY0-FGDcCMcRUkYdh87Osf9H1gbgcJgjshYhNfmck9M22f8gA/exec",
  //       {
  //         method: "POST",
  //         body: new FormData(e.currentTarget),
  //       }
  //     );
  //     const { result } = await response.json();
  //     if (result === "success") {
  //       e.target.querySelector("input").value = "";
  //       toast.success("Email Submitted successfully!");
  //     }
  //   } catch (e) {
  //     toast.error(e);
  //   }
  // };

  return (
    <>
      <footer className="py-5 lg:py-20 bg-black ">
        <section className="max-w-7xl mx-auto px-5 ">
          {/* footer-header */}
          <div className="pb-10" style={{ borderBottom: "1px solid #373636" }}>
            <div className="flex justify-between gap-5">
              <a
                href={`mailto:${company.email}`}
                className="text-white flex items-center  w-2/4 gap-5"
              >
                <MapIcon className="w-7 mr-3 text-primary-orange" />
                <div className={`${poppins.className}`}>
                  <p className="font-bold text-xl">Find Us</p>
                  <p className="text-md">{company.address}</p>
                </div>
              </a>
              <a
                href={`tel:${company.contact}`}
                className="text-white flex items-center mr-9 gap-5"
              >
                <CallIcon className="w-6 mr-3 text-primary-orange" />
                <div className={`${poppins.className}`}>
                  <p className="font-bold text-xl">Call us</p>
                  <p className="text-md">{company.contactDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="text-white flex items-center gap-5"
              >
                <MessageIcon className="w-6 mr-3 text-primary-orange" />
                <div className={`${poppins.className}`}>
                  <p className="font-bold text-xl">Mail us</p>
                  <p className="text-md"> {company.email}</p>
                </div>
              </a>
            </div>
          </div>
          {/* main-Footer */}
          <div className="flex flex-wrap mt-10">
            <div className="flex flex-col  justify-center gap-10">
              <div className="w-[150px] lg:w-[250px]">
                <a href="/" aria-label="Purable Health Care">
                  <img
                    src="/footer_purable_logo.png"
                    className="w-full max-w-[240px] block"
                    alt="ExMyB"
                    loading="lazy"
                    decoding="async"
                    width={170}
                    height={214}
                  />
                </a>
              </div>

              <div className="flex items-center justify-center mt-5">
                <a
                  href={socialLinks.facebook}
                  rel="noopener"
                  target={"_blank"}
                  className="px-3"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="w-6 text-white" />
                </a>
                <a
                  href={socialLinks.instagram}
                  rel="noopener"
                  target={"_blank"}
                  className="px-3"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="w-6 text-white" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  rel="noopener"
                  target={"_blank"}
                  className="px-3"
                >
                  <span className="sr-only">LinkedIn</span>
                  <TwitterIcon className="h-6 text-white fill-current" />
                </a>
                <a
                  href={socialLinks.youtube}
                  rel="noopener"
                  target={"_blank"}
                  className="px-3"
                >
                  <span className="sr-only">Youtube</span>
                  <YoutubeIcon className="h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="grow pl-16">
              <p
                className={`${poppins.className} text-white font-bold text-xl mb-5`}
              >
                Useful Links
              </p>
              <div className="md:flex lg:-mb-5">
                <ul className="w-full">
                  {rowService.map((row) => (
                    <li key={row.name}>
                      <a
                        className={`${poppins.className} block py-3 text-white text-sm`}
                        href={row.url}
                      >
                        {row.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="w-full  text-white">
                  {rowPolicies.map((row) => (
                    <li key={row.name}>
                      <a
                        className={`${poppins.className} block py-3 text-sm`}
                        href={row.url}
                      >
                        {row.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-[520px]">
              <div>
                <p
                  className={`${poppins.className} text-white font-bold text-xl mb-5`}
                >
                  Subscribe
                </p>
                <p
                  className={`${poppins.className} text-gray-400 text-md mb-5`}
                >
                  Don’t miss to subscribe to our newsletter, kindly fill the
                  form below for Offers.
                </p>
                {/* <form className="w-full md:flex items-center" onSubmit={onSubmit}> */}
                <form className="w-full md:flex items-center">
                  <input
                    type="email"
                    name="email"
                    className="p-2 border-none focus:ring-transparent h-14 focus:outline-none md:mr-5 w-full md:w-3/5 text-white bg-black border-b-2 "
                    style={{ borderBottom: "1px solid #fff" }}
                    placeholder="E-mail"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  <button
                    type="submit"
                    className={`text-white border-0 tex-sm bg-primary-purple cursor-pointer rounded-3xl px-2 py-2.5 lg:inline-flex`}
                  >
                    Get Updates
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Sub-footer */}
      <div className="w-full mx-auto  text-center py-5 bg-primary-orange">
        <p className={`${poppins.className} text-white`}>
          Copyright © {company.copyright} 2023, All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
