import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import NewsCard from "../../components/News/NewsCard";
import Contacts from "../../components/Contacts/Contacts";
import News1 from "../../assets/news1.webp";
import News2 from "../../assets/news2.webp";
import News3 from "../../assets/news3.webp";
import News4 from "../../assets/news4.jpg";
import NewsImg from "../../assets/news.svg";
import SingleImg from "../../assets/single_news.jpg"
const AllNews = () => {
  const { t } = useTranslation();
  const title = t("newsPage.title");
  const subtitle = t("newsPage.subtitle");
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
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight);
    };
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    updateScrollHeight();
    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updateScrollHeight);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []);
  return (
    <section className="w-[100%] flex flex-col items-center">
        <Navbar scrollPosition={scrollPosition} />
      <div className="text-white px-[20px] relative md:px-[80px] gap-[20px] py-[80px] flex w-[100%] h-[400px] items-start justify-between flex-col md:flex-row md:items-center">
        <h1 className="text-[50px] lg:text-[70px] font-[600]">{title}</h1>
        <p className="max-w-[600px]">{subtitle}</p>
        <img src={SingleImg} alt="SingleImg" className="w-[100%] h-[100%] absolute object-cover left-0 top-0 brightness-50 z-[-1]"/>
      </div>
      <div className="py-[30px] relative w-[90%] justify-center flex-wrap 2xl:flex-nowrap mt-[200px] flex">
        <img
          src={NewsImg}
          alt="NewsImg"
          className="w-[100%] h-[100%] absolute left-0 top-0 object-cover z-[-1]"
        />
        {data?.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}
      </div>
      <Contacts />
    </section>
  );
};

export default AllNews;
