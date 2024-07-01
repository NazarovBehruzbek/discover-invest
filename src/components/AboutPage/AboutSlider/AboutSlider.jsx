import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImg from "../../../assets/about6.png";
import YearsBg from "../../../assets/years_bg.jpg";
const AboutSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      year: 2008,
      desc: "In 2008 the construction company Discover Invest was established.",
    },
    {
      year: 2009,
      desc: "In 2009 working on project began at the first construction site. It was a factory for the production of aluminum profiles.",
    },
    {
      year: 2011,
      desc: "In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.",
    },
    {
      year: 2013,
      desc: "In 2013 the design and architecture department was formed.",
    },
    {
      year: 2008,
      desc: "In 2008 the construction company Discover Invest was established.",
    },
    {
      year: 2009,
      desc: "In 2009 working on project began at the first construction site. It was a factory for the production of aluminum profiles.",
    },
    {
      year: 2011,
      desc: "In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.",
    },
    {
      year: 2013,
      desc: "In 2013 the design and architecture department was formed.",
    },
    {
      year: 2008,
      desc: "In 2008 the construction company Discover Invest was established.",
    },
    {
      year: 2009,
      desc: "In 2009 working on project began at the first construction site. It was a factory for the production of aluminum profiles.",
    },
    {
      year: 2011,
      desc: "In 2011 the need for a car park arose and was built so everyone can imagine how big the company is.",
    },
    {
      year: 2013,
      desc: "In 2013 the design and architecture department was formed.",
    },
  ];
  const handleAfterChange = (current) => {
    setActiveIndex(current);
  };
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 1400,
    infinite: true,
    slidesToShow: 12,
    centerMode: true,
    centerPadding: "60px",
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 4,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative py-[50px]">
      <img
        src={YearsBg}
        alt="YearsBg"
        className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
      />
      <Slider
        {...sliderSettings}
        className="f border-b-[5px] border-b-purple-600 border-dashed"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "pt-[20px]" : ""
            } transition-all font-serif w-[100%] h-[80px] flex items-center justify-center relative`}
          >
            <p
              className={`${
                index === activeIndex
                  ? "text-[30px] text-purple-600"
                  : "text-gray-500"
              } text-center transition-all text-[24px] font-[500] `}
            >
              {item.year}
            </p>
            <div
              className={`${
                activeIndex === index ? "" : "opacity-0"
              } transition-all w-[20px] h-[20px] bg-purple-600 rounded-full absolute z-[20] bottom-[-10px] left-[45%]`}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="mt-[100px] w-[100%] flex justify-center flex-wrap px-[20px] gsp-[20px] md:gap-[100px] items-center">
        <img src={AboutImg} alt="AboutImg" className="w-[250px] h-[250px]" />
        <div className="flex flex-col items-center md:items-start gap-[20px] max-w-[400px]">
          <p className="text-[28px] font-serif font-[500]">
            {data[activeIndex]?.year}
          </p>
          <p className="text-center md:text-left font-sans text-[16px] font-[500]">
            {data[activeIndex]?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
