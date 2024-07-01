import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { RiCloseFill, RiInstagramFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { switchLang } from "../../plugins/changeLang";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { setLoad } from "../../App";

const Navbar = ({ scrollPosition }) => {
  const { t } = useTranslation();
  const navbarLink = [
    { path: "/about", text: t("navbar.item1"), target: false },
    { path: "/projects", text: t("navbar.item2"), target: false },
    { path: "https://hr.di.uz/", text: t("navbar.item3"), target: true },
    { path: "/news", text: t("navbar.item4"), target: false },
    {
      path: "/contacts",
      path2: "#contacts",
      text: t("navbar.item5"),
      target: false,
    },
  ];
  const languages = [
    { id: "en", lang: "EN" },
    { id: "ru", lang: "RU" },
    { id: "uz", lang: "UZ" },
  ];
  const url = window.location.href.split("/")[3];
  const [activeLang, setActiveLang] = useState("EN");
  useEffect(() => {
    let lang = sessionStorage.getItem("lang");
    if (lang) {
      setActiveLang(lang);
    } else {
      setActiveLang("EN");
    }
  }, []);
  const changeLang = (id, lang) => {
    switchLang(id);
    setActiveLang(lang);
    sessionStorage.setItem("lang", lang);
    setLangVisible(!langVisible);
    setLoad();
  };
  const [sideBar, setSideBar] = useState(false);
  const [langVisible, setLangVisible] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const closeSideBar = () => {
    setSideBar(!sideBar);
    handleScrollToTop();
  };
  return (
    <nav
      className={`${scrollPosition > 20
          ? "bg-white text-black"
          : "text-white bg-transparent"
        } flex w-[100%] py-[20px] px-[10px] sm:px-[20px] md:px-[40px] xl:px-[100px] items-center justify-between left-0 top-0 fixed z-[30]`}
    >
      <Link
        onClick={handleScrollToTop}
        to={"/"}
        className="cursor-pointer flex items-center"
      >
        <img
          src={Logo}
          alt="logo"
          onClick={setLoad}
          className="w-[60px] h-[60px] mix-blend-multiply"
        />
        <h2 className="hidden sm:block uppercase font-[500] w-[100px]">
          discover invest
        </h2>
      </Link>
      <ul className="hidden lg:flex gap-[30px] xl:gap-[50px]">
        {navbarLink?.map((item, index) => {
          return (
            <li
              onClick={handleScrollToTop}
              key={index}
              className="group relative flex gap-[5px] items-center"
            >
              <Link onClick={setLoad} to={item?.path}>
                {item?.text}
              </Link>
              <div
                className={`absolute w-[6px] h-[6px] opacity-0 group-hover:opacity-100 ease-in-out duration-500 rotate-[45deg] bg-purple-600 left-[-15px] ${"/" + url === item?.path ||
                    "/" + url === item?.path + item?.path2
                    ? " opacity-100"
                    : ""
                  }`}
              ></div>
            </li>
          );
        })}
      </ul>
      <div className={`${sideBar ? "hidden" : ""} hidden xl:flex gap-[10px] ml-[10px] xl:ml-[50px] text-[18px]`}>
        <a href="https://t.me/Bexruzbek_Nazarov">
          <FaFacebookF />
        </a>
        <a href="https://t.me/Bexruzbek_Nazarov">
          <RiInstagramFill />
        </a>
        <a href="https://t.me/Bexruzbek_Nazarov">
          <BiLogoTelegram />
        </a>
      </div>
      <div className={`relative cursor-pointer z-30 mr-[60px] sm:mr-0 flex ${sideBar && langVisible ? "hidden" : ""}`}>
        <p
          onClick={() => setLangVisible(!langVisible)}
          className={`flex gap-[10px] items-center text-[14px] ease-in-out duration-500 ${sideBar ? "hidden" : ""
            }`}
        >
          {activeLang} <IoIosArrowDown className=" text-purple-600" size={20} />
        </p>
        <ul
          className={`absolute bg-purple-600 text-white p-[20px] top-[30px] transition-all left-[-10px] ${langVisible ? "" : "hidden"
            }`}
        >
          {languages?.map((item, index) => {
            return (
              <li
                className="hover:underline"
                key={index}
                onClick={() => changeLang(item?.id, item?.lang)}
              >
                {item?.lang}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-[20px]">
        <a
          href="tel:+998(71)2888888"
          className="font-bold text-[18px] whitespace-nowrap"
        >
          + 998 (90) 866 60 51
        </a>
        <Link to="tel:+998908666051"> <button className="p-[10px] text-white bg-purple-600">
          <FaPhoneAlt />
        </button></Link>
      </div>
      <a
        href="tel: + 998 (71) 288 88 88"
        className={`tel p-[10px] sm:p-[15px] fixed z-50 top-[30px] lg:top-[85vh] right-[20%] sm:right-[70px] md:right-[100px] lg:right-[100px] bg-purple-600 text-white ${sideBar ? "hidden" : ""
          }`}
      >
        <FaPhoneAlt size={14} />
      </a>
      <button
        onClick={() => setSideBar(!sideBar)}
        className={`${sideBar ? "opacity-0" : ""
          } lg:hidden ease-in-out duration-500 relative z-30`}
      >
        <HiMiniBars3BottomRight size={24} />
      </button>
      <aside
        className={`${sideBar ? " left-0" : "left-[-2000px] z-[-1]"
          } top-0 ease-in-out duration-500 z-[20] bg-purple-600 fixed w-[100%] max-w-[350px] overflow-auto h-[100vh] shadow-md text-black flex py-[40px] items-center flex-col gap-[10px]`}
      >
        <button
          className="text-[28px] absolute top-[35px] right-[10px] text-white"
          onClick={() => setSideBar(!sideBar)}
        >
          <RiCloseFill />
        </button>
        <ul className="flex flex-col gap-[10px]">
          {navbarLink?.map((item, index) => {
            return (
              <li
                key={index}
                className="group relative flex gap-[5px] items-center text-[16px] text-white font-[500]"
                onClick={closeSideBar}
              >
                <Link
                  onClick={setLoad}
                  target={item?.target ? "blank" : ""}
                  to={item?.path}
                >
                  {item?.text}
                </Link>
                <div
                  className={`${"/" + url === item?.path ||
                      "/" + url === item?.path + item?.path2
                      ? " opacity-100"
                      : ""
                    } absolute w-[6px] h-[6px] opacity-0 group-hover:opacity-100 ease-in-out duration-500 rotate-[45deg] bg-white left-[-25px]`}
                ></div>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
