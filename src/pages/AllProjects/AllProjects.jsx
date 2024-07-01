import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import Projects from "../../components/Projects/Projects";
import Contacts from "../../components/Contacts/Contacts";
import SingleImg from "../../assets/single_news.jpg"

const AllProjects = () => {
  const { t } = useTranslation();
  const title = t("projectsPage.title");
  const subtitle = t("projectsPage.subtitle");
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
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', updateScrollHeight);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', updateScrollHeight);
    };
  }, []);
  return (
    <section className="">
        <Navbar scrollPosition={scrollPosition}/>
      <div className="text-white pt-[150px] h-[400px] px-[20px] relative md:px-[80px] gap-[20px] py-[80px] flex w-[100%] items-start md:justify-between flex-col xl:items-center xl:flex-row md:items-start">
        <h1 className="text-[50px] lg:text-[70px] font-[600]">{title}</h1>
        <p className="max-w-[600px]">{subtitle}</p>
        <img src={SingleImg} alt="SingleImg" className="w-[100%] h-[100%] absolute object-cover left-0 top-0 brightness-50 z-[-1]"/>
      </div>
      <Projects />
      <Contacts />
    </section>
  );
};

export default AllProjects;
