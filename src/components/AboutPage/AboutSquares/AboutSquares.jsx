import React from "react";
import { useTranslation } from "react-i18next";
import AboutImg from "../../../assets/about1.jpg";

const AboutSquares = () => {
  const { t } = useTranslation();
  const data = [
    { num: "4000+", text: t("about.employees"), img: AboutImg },
    { num: "150+", text: t("about.projects"), img: AboutImg },
    { num: "16+", text: t("about.complexes"), img: AboutImg },
    { num: "14+", text: t("about.marketplace"), img: AboutImg },
    { num: "250+", text: t("about.techniques"), img: AboutImg },
    { num: "9+", text: t("about.hospitals"), img: AboutImg },
  ];
  return <section className="px-[20px] md:px-[100px] py-[100px] flex flex-wrap justify-center xl:justify-start gap-[20px]">
    {data?.map((item, index) => {
            return (
              <div key={index} className={`border cursor-pointer group w-[100%] p-[30px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[190px] relative flex flex-col`}>
                <img
                  src={item?.img}
                  alt={item?.text}
                  className="left-0 top-0 w-[100%] h-[100%] opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute z-[-1] object-cover"
                />
                <h3 className="group-hover:text-purple-600 ease-in-out duration-300 text-[41px] font-[700]">{item?.num}</h3>
                <p className={ "group-hover:text-white ease-in-out duration-300 text-[12px] p-[10px]"}>{item?.text}</p>
              </div>
            );
          })}
  </section>;
};

export default AboutSquares;
