import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AboutImg1 from "../../../assets/about2.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
const AboutSection = () => {
  const { t } = useTranslation();
  const title = t("aboutPage.title1");
  const desc = t("aboutPage.desc1");
  const btn = t("aboutPage.btn1");
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section className="w-[100%] py-[100px] relative flex justify-center px-[20px] md:px-[100px]">
      <div className="w-[100%] flex lg:flex-row flex-col justify-between items-start gap-[20px]">
        <div className="relative">
          <div className="flex items-center gap-[10px]" data-aos="fade-right">
            <div className="h-[3px] bg-purple-600 w-[35px]"></div>
            <h2 className="text-[24px] sm:text-[40px] font-[600]">{title}</h2>
          </div>
          <svg
            className="mt-[20px] absolute left-0 top-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 658 855"
            fill="none"
          >
            <g opacity="0.1">
              <path
                d="M259.418 86.7901V0H657.706V591.526H541.891L541.954 536.143H605.022V55.3831H312.102V86.7584H511.563V854.691H0V86.7584H259.386L259.418 86.7901ZM99.6832 795.116H450.591V591.557H303.083L99.6832 795.116ZM259.418 554.371V186.061H315.754V532.491H450.591V146.397H61.004V752.943L259.418 554.371Z"
                fill="#8F8F8F"
              ></path>
            </g>
          </svg>
        </div>
        <div className="max-w-[900px] lg:max-w-[600px] flex flex-col gap-[10px] md:gap-[30px]" data-aos="fade-down-left">
          <img src={AboutImg1} alt="AboutImg1"  data-aos="fade-down-left"/>
          <p data-aos="fade-up">{desc}</p>
          <Link
           data-aos="fade-up"
            to="/projects"
            className="px-[16px] whitespace-nowrap block w-[200px] h-[50px] border border-purple-600 relative group"
          >
            <span className="absolute text-white group-hover:text-white bg-purple-600 group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[200px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]">
              {btn}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
