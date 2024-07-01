import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AboutImg from "../../assets/about1.jpg";
import Aos from "aos";
const About = () => {
  const { t } = useTranslation();
  const title = t("about.title");
  const desc = t("about.desc");
  const data = [
    { num: "", text: "", img: "" },
    { num: "4000+", text: t("about.employees"), img: AboutImg },
    { num: "150+", text: t("about.projects"), img: AboutImg },
    { num: "16+", text: t("about.complexes"), img: AboutImg },
    { num: "14+", text: t("about.marketplace"), img: AboutImg },
    { num: "250+", text: t("about.techniques"), img: AboutImg },
    { num: "", text: t("about.top"), img: "" },
    { num: "9+", text: t("about.hospitals"), img: AboutImg },
    { num: "", text: "", img: "" },
  ];
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section id="about" className="pt-[80px] pb-[30px] w-[100%] h-[900px] relative flex flex-col items-center">
      <svg
        className="absolute left-0 top-[100px] self-start"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 658 855"
        width="658"
        height="855"
        fill="none"
      >
        <g opacity="0.1">
          <path
            d="M259.418 86.7901V0H657.706V591.526H541.891L541.954 536.143H605.022V55.3831H312.102V86.7584H511.563V854.691H0V86.7584H259.386L259.418 86.7901ZM99.6832 795.116H450.591V591.557H303.083L99.6832 795.116ZM259.418 554.371V186.061H315.754V532.491H450.591V146.397H61.004V752.943L259.418 554.371Z"
            fill="#8F8F8F"
          ></path>
        </g>
      </svg>
      <div className="w-[90%] flex flex-col items-start relative">
        <div data-aos="fade-right" className="flex items-center gap-[10px] max-w-[450px]">
          <div className="h-[3px] bg-purple-600 w-[35px]"></div>
          <h2 className="text-[24px] sm:text-[40px] font-[600]">{title}</h2>
        </div>
        <p className="max-w-[400px] mt-[20px] sm:absolute top-[140px]" data-aos="fade-up">{desc}</p>
        <div data-aos="fade-down-left" className="w-[260px] sm:w-[470px] lg:w-[705px] grid grid-cols-2 lg:grid-cols-3 mt-[20px] sm:mt-[180px] self-center lg:self-end">
          {data?.map((item, index) => {
            return (
              <div key={index} className={`${item?.text ? "border border-zinc-400" : ""} ${item?.text === t("about.top") ? " bg-purple-600 flex justify-center items-center" : ""} cursor-pointer group w-[130px] sm:w-[235px] h-[100px] sm:h-[150px] relative flex flex-col`}>
                <img
                  src={item?.img}
                  alt={item?.text}
                  className={item?.img ? " w-[100%] h-[100%] opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute z-[-1] object-cover" : "hidden"}
                />
                <h3 className="group-hover:text-purple-600 ease-in-out duration-300 text-[24px] sm:text-[41px] font-[700] px-[10px] sm:p-[10px]">{item?.num}</h3>
                <p className={item?.text === t("about.top") ? "sm:mb-[20px] font-[500] text-[16px] text-white" : "group-hover:text-white ease-in-out duration-300 text-[12px] p-[10px]"}>{item?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
