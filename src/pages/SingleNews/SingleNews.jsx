import React, { useEffect, useState } from "react";
import News1 from "../../assets/news1.webp";
import News2 from "../../assets/news2.webp";
import News3 from "../../assets/news3.webp";
import News4 from "../../assets/news4.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import SingleNewsImage from "../../assets/single_news.jpg";
import News from "../../components/News/News";
import Contacts from "../../components/Contacts/Contacts";
const SingleNews = () => {
  const { t } = useTranslation();
  const subtitle = t("newsPage.subtitle");
  const data = [
    {
      id: 1,
      desc: t("news.desc1"),
      subtitle: t("news.subtitle1"),
      img: News1,
      date: t("news.date1"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 2,
      desc: t("news.desc2"),
      subtitle: t("news.subtitle2"),
      img: News2,
      date: t("news.date2"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 3,
      desc: t("news.desc3"),
      subtitle: t("news.subtitle3"),
      img: News3,
      date: t("news.date3"),
      viewMore: t("news.viewMore"),
    },
    {
      id: 4,
      desc: t("news.desc4"),
      subtitle: t("news.subtitle4"),
      img: News4,
      date: t("news.date4"),
      viewMore: t("news.viewMore"),
    },
  ];
  let id = +window.location.href.split("/")[4];
  let news = data?.find((item) => item.id === id);
  console.log(news);
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
    <section className="w-[100%] overflow-hidden">
      <Navbar scrollPosition={scrollPosition}/>
      <div className="w-[100%] min-h-[400px] relative py-[100px] px-[20px] md:px-[100px]">
        <img
          src={SingleNewsImage}
          alt="SingleNewsImage"
          className="w-[100%] h-[100%] top-0 left-0 absolute z-[-1] brightness-50 object-cover"
        />
        <p className="text-[20px] mt-[100px] md:w-[70%] text-white">{subtitle}</p>
      </div>
      <div className="w-[100%] py-[100px] px-[20px] flex flex-col gap-[30px] justify-center items-center">
        <div className="max-w-[800px] md:h-[400px] overflow-hidden">
        <img src={news?.img} alt={news?.subtitle} className=" w-[100%] object-cover ease-in-out duration-300 hover:scale-110 hover:grayscale"/>
        </div>
        <p className="max-w-[800px]">{news?.desc}</p>
      </div>
      <News/>
      <Contacts/>
    </section>
  );
};

export default SingleNews;
