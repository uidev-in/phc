"use client";
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { Poppins } from "next/font/google";
import QuoteStart from "../Icons/QuoteStart";
import QuoteEnd from "../Icons/QuoteEnd";
import GradArrow from "../Icons/GradArrow";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

function Talks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
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
    <section
      className="bg-white relative overflow-hidden py-20"
      id="testimonial"
    >
      {/* <GradArrow className="absolute left-0 h-full" /> */}
      <div className="max-w-7xl mx-auto px-4 py-5 lg:px-10 lg:py-16">
        <h2
          className={`font-semibold text-xl md:text-3xl lg:text-5xl ${poppins.className} text-primary-gray mb-5 lg:mb-14`}
        >
          What Our Clients Have to Say!
        </h2>

        <Slider {...settings} className="lg:pb-16 ">
          <div className="slide-custom">
            <div className="flex justify-center">
              <div className="w-[106px] md:w-[200px] lg:w-[358px]">
                <img
                  src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />
                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl md:text-base lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  euismod leo in rhoncus mattis. Quisque quis tellus sed odio
                  consectetur consequat. Nam scelerisque vehicula congue. Cras
                  vel ipsum cursus, varius odio id, maximus magna. Proin ut
                  risus justo. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Integer at feugiat
                  tellus, eget sollicitudin arcu. Pellentesque neque risus,
                  lobortis a finibus ac, pharetra sed ex. Ut sit amet tortor
                  pellentesque, hendrerit tortor non, placerat felis. Aliquam
                  luctus turpis purus, quis varius eros aliquet nec. Donec sit
                  amet dictum arcu.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Client Name
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Designation - Trainer
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-custom ">
            <div className="flex">
              <div className="max-w-[106px] lg:max-w-[358px]">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />

                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  Quisque quis tellus sed odio consectetur consequat. Nam
                  scelerisque vehicula congue. Cras vel ipsum cursus, varius
                  odio id, maximus magna. Proin ut risus justo. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Integer at feugiat tellus, eget sollicitudin
                  arcu. Pellentesque neque risus, lobortis a finibus ac,
                  pharetra sed ex. Ut sit amet tortor pellentesque, hendrerit
                  tortor non, placerat felis. Aliquam luctus turpis purus, quis
                  varius eros aliquet nec. Donec sit amet dictum arcu.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Client Name
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Designation - CEO - XYZ
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
          <div className="slide-custom ">
            <div className="flex">
              <div className="max-w-[106px] lg:max-w-[358px]">
                <img
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg"
                  alt="user"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 pl-5 lg:pl-14">
                <QuoteStart className="w-[23px] lg:w-[126px]" />

                <p
                  className={`text-primary-gray py-2 lg:py-5 text-xs max-w-3xl lg:text-xl slide-subtitle ${poppins.className}`}
                >
                  . Nam scelerisque vehicula congue. Cras vel ipsum cursus,
                  varius odio id, maximus magna. Proin ut risus justo.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Integer at feugiat tellus,
                  eget sollicitudin arcu. Pellentesque neque risus, lobortis a
                  finibus ac, pharetra sed ex. Ut sit amet tortor pellentesque,
                  hendrerit tortor non, placerat felis. Aliquam luctus turpis
                  purus, quis varius eros aliquet nec. Donec sit amet dictum
                  arcu.
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block mt-4 slide-name ${poppins.className}`}
                >
                  Client Name
                </p>
                <p
                  className={`text-primary-gray text-base hidden lg:block slide-name ${poppins.className}`}
                >
                  Designation - Model
                </p>
                <div className="flex justify-end">
                  <QuoteEnd className="w-[23px] lg:w-[126px] lg:-mt-6 " />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Talks;
