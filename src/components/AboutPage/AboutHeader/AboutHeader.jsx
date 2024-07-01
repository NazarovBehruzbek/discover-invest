import React, { useEffect, useState } from "react";
import AboutImg from "../../../assets/about_img.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { RiDownloadCloud2Line } from "react-icons/ri";

const AboutHeader = () => {
  const { t } = useTranslation();
  const title = t("aboutPage.title");
  const subtitle = t("aboutPage.subtitle");
  const btn = t("aboutPage.btn");
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
    <header className="w-[100%] min-h-[120vh] flex justify-start items-center relative py-[100px] px-[20px] md:px-[100px]">
      <Navbar scrollPosition={scrollPosition}/>
      <img
        src={AboutImg}
        alt="AboutImg"
        className="w-[100%] h-[100%] absolute left-0 top-0 object-cover brightness-50 z-[-1]"
      />
      <div className="flex flex-col items-center md:items-start gap-[20px] max-w-[600px] text-white">
        <h1 className="text-center md:text-left text-[40px] md:text-[80px] font-[600]">{title}</h1>
        <p className="text-center md:text-left text-[18px]">{subtitle}</p>
        <a
          href="https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf"
          className="px-[16px] whitespace-nowrap block w-[240px] h-[50px] border border-purple-600 relative group mt-[20px]"
        >
          <div className="absolute text-white group-hover:text-white bg-purple-600 group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[240px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]">
            {btn}
            <RiDownloadCloud2Line className="text-[20px] ml-[10px]"/>
          </div>
        </a>
      </div>
    </header>
  );
};

export default AboutHeader;
