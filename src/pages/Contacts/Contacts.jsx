import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import AboutImg from "../../assets/about_img.jpg";
import Contacts2 from "../../components/Contacts/Contacts2";
import { HiArrowDown } from "react-icons/hi";

const Contacts = () => {
  const { t } = useTranslation();
  const title = t("contactsPage.title");
  const subtitle = t("contactsPage.subtitle");
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
    <div>
      <header className="w-[100%] min-h-[120vh] flex justify-start items-center relative py-[100px] px-[20px] md:px-[100px]">
        <Navbar scrollPosition={scrollPosition} />
        <img
          src={AboutImg}
          alt="AboutImg"
          className="w-[100%] h-[100%] absolute left-0 top-0 object-cover brightness-50 z-[-1]"
        />
        <div className="flex flex-col items-center md:items-start gap-[20px] max-w-[600px] text-white">
          <h1 className="text-[50px] md:text-[80px] font-[600]">{title}</h1>
          <p className="text-center md:text-left text-[18px]">{subtitle}</p>
          <a
            href="#contacts"
            className="flex group hover:bg-purple-600 ease-in-out duration-300 justify-center items-center whitespace-nowrap w-[50px] h-[50px] border border-purple-600 relative group mt-[20px]"
          >
              <HiArrowDown className="text-[20px] group-hover:text-white ease-in-out duration-300 text-purple-600" size={24}/>
          </a>
        </div>
      </header>
      <Contacts2/>
    </div>
  );
};

export default Contacts;
