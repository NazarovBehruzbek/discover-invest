import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News1 from "../../assets/news1.webp";
import News2 from "../../assets/news2.webp";
import News3 from "../../assets/news3.webp";
import News4 from "../../assets/news4.jpg";
import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";
import NewsImg from "../../assets/news.svg";
import { Link } from "react-router-dom";
import Aos from "aos";
const News = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      desc: t("news.subtitle1"),
      img: News1,
      date: t("news.date1"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 2,
      desc: t("news.subtitle2"),
      img: News2,
      date: t("news.date2"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 3,
      desc: t("news.subtitle3"),
      img: News3,
      date: t("news.date3"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 4,
      desc: t("news.subtitle4"),
      img: News4,
      date: t("news.date4"),
      viewMore: t("news.viewMore"),
    },
  ];
  const title = t("news.title");
  const btn = t("news.btn");
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    initialSlide: 0,
    type: "bool",
    default: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <section className="slider-container relative w-[100%] px-[5%] my-[40px]">
      <img
        src={NewsImg}
        alt="NewsImg"
        className="w-[100%] h-[100%] absolute left-0 top-0 object-cover"
      />
      <div data-aos="fade-right" className="flex items-center gap-[10px]">
        <div className="h-[3px] bg-purple-600 w-[35px]"></div>
        <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
      </div>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return <div key={index} className="px-[15px]">
            <NewsCard item={item} />
          </div>
        })}
      </Slider>
      <div className="w-[100%] flex justify-center mt-[30px]">
        <Link
          to="/news"
          className="px-[16px] w-[170px] h-[50px] border border-purple-600 relative group mt-[20px]"
        >
          <span className="absolute bg-white group-hover:text-white group-hover:bg-purple-600 group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[170px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]">
            {btn}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default News;
