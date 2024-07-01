import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team1 from "../../assets/team1.webp";
import Team2 from "../../assets/team2.webp";
import Team3 from "../../assets/team3.webp";
import Team4 from "../../assets/team4.webp";
import Team5 from "../../assets/team5.webp";
import { useTranslation } from "react-i18next";
import Aos from "aos";
const Team = () => {
  const { t } = useTranslation();
  const data = [
    {name: t("team.name1"), desc: t("team.desc2"), img: Team1},
    {name: t("team.name2"), desc: t("team.desc1"), img: Team2},
    {name: t("team.name3"), desc: t("team.desc2"), img: Team3},
    {name: t("team.name4"), desc: t("team.desc1"), img: Team4},
    {name: t("team.name5"), desc: t("team.desc2"), img: Team5},
  ]
  const title = t("team.title")
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
      duration: 800, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div className="slider-container w-[90%] ml-[5%] my-[40px]">
        <div data-aos="fade-right" className="flex items-center mb-[40px] gap-[10px]">
          <div className="h-[3px] bg-purple-600 w-[35px]"></div>
          <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
        </div>
      <Slider {...settings}>
        {
            data?.map((item,index)=> {
                return <div key={index}className="mx-[10px] pr-[20px] group cursor-pointer">
                    <img src={item?.img} alt={item?.name} className="max-w-[400px] w-[100%] h-[350px] object-cover"/>
                    <div className="flex flex-col mt-[20px]">
                        <h1 className="text-[17px] font-[500] group-hover:text-purple-600 ease-in-out duration-300">{item?.name}</h1>
                        <p className="text-[13px]">{item?.desc}</p>
                    </div>
                </div>
            })
        }
      </Slider>
    </div>
  );
};

export default Team;
