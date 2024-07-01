import React, { useEffect } from "react";
import { PiUsersThree } from "react-icons/pi";
import { PiChatsCircleThin } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import AdvantagesImg from "../../assets/advantages.png"
import Aos from "aos";
const Advantages = () => {
  const { t } = useTranslation();
  const title = t("advantages.title");
  const data = [
    {icon: <PiUsersThree/>, title: t("advantages.title1"), desc: t("advantages.desc1")},
    {icon: <PiChatsCircleThin/>, title: t("advantages.title2"), desc: t("advantages.desc2")},
    {icon: <IoShieldCheckmarkOutline/>, title: t("advantages.title3"), desc: t("advantages.desc3")}
  ]
  useEffect(() => {
    Aos.init({
      duration: 800,
    })
  }, [])
  return (
    <section className="w-[100%] flex justify-center py-[100px] relative">
        <img src={AdvantagesImg} alt="Advantages" className="absolute w-[100%] h-[100%] z-[-1]"/>
      <div className="w-[90%] flex flex-col items-start">
        <div data-aos="fade-right" className="flex items-center gap-[10px]">
          <div className="h-[3px] bg-purple-600 w-[35px]"></div>
          <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
        </div>
        <div data-aos="fade-right" className="flex w-[100%] justify-center md:justify-between mt-[30px] gap-[20px] flex-wrap self-center">
            {
                data?.map((item,index)=> {
                    return <div key={index} className="max-w-[350px] flex gap-[30px] flex-col items-start group cursor-pointer">
                        <div className="group-hover:text-purple-600 ease-in-out duration-300 text-[80px]">{item?.icon}</div>
                        <h3 className="group-hover:text-purple-600 ease-in-out duration-300 text-[24px] font-[600]">{item?.title}</h3>
                        <p className="text-[15px]">{item?.desc}</p>
                    </div>
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Advantages;
