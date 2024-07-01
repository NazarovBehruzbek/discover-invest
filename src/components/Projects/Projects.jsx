import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/project4.webp";
import Project5 from "../../assets/project5.webp";
import Project6 from "../../assets/project6.webp";
import { Link } from "react-router-dom";
import Aos from "aos";
const Projects = () => {
  const { t } = useTranslation();
  const title = t("projects.title");
  const btn = t("projects.btn");
  const data = [
    { title: t("projects.title1"), desc: t("projects.desc1"), img: Project1, aos: "fade-right" },
    { title: t("projects.title2"), desc: t("projects.desc2"), img: Project2, aos: "fade-left" },
    { title: t("projects.title3"), desc: t("projects.desc3"), img: Project3, aos: "fade-right" },
    { title: t("projects.title4"), desc: t("projects.desc4"), img: Project4, aos: "fade-left" },
    { title: t("projects.title5"), desc: t("projects.desc5"), img: Project5, aos: "fade-right" },
    { title: t("projects.title6"), desc: t("projects.desc6"), img: Project6, aos: "fade-left" },
  ];
  const url = window.location.href.split("/")[3];
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section
      id="projects"
      className="w-[100%] flex flex-col items-center gap-[20px] justify-center py-[40px] px-[20px] md:px-[40px]"
    >
      <div
      data-aos="fade-right"
        className={`${
          url === "projects" ? "hidden" : ""
        } flex items-center gap-[10px] self-start`}
      >
        <div className="h-[3px] bg-purple-600 w-[35px]"></div>
        <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
      </div>
      <div className="w-[100%] lg:w-[90%] grid-cols-1 grid sm:grid-cols-2 gap-[20px] md:gap-[40px]">
        {data?.map((item, index) => {
          return (
            <div
            data-aos={item?.aos}
              key={index}
              className="relative w-[100%] h-[320px] overflow-hidden"
            >
              <img
                src={item?.img}
                alt={item?.title}
                className="absolute w-[100%] h-[100%] object-cover brightness-50 z-0"
              />
              <div className="absolute z-20 p-[20px] flex group flex-col gap-[30px] text-white w-[100%] h-[100%] pt-[250px] hover:backdrop-blur-md hover:pt-[20px] ease-in-out duration-500 cursor-pointer hover:bg-[#80808060]">
                <h1 className="text-[25px] font-[500] ease-in-out duration-500 group-hover:text-purple-600">
                  {item?.title}
                </h1>
                <p className="text-[18px] font-[400]">{item?.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to="/projects"
        className={`${
          url === "projects" ? "hidden" : ""
        } px-[16px] w-[150px] h-[50px] border border-purple-600 relative group mt-[20px]`}
      >
        <span className="absolute bg-white group-hover:text-white group-hover:bg-purple-600 group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[150px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]">
          {btn}
        </span>
      </Link>
    </section>
  );
};

export default Projects;
