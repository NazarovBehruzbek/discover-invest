import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineAccessAlarms } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ContactsImage from "../../assets/contacts.png";
import Novas from "../../assets/novas.svg";
import Flag from "../../assets/flag.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contacts = () => {
  const { t } = useTranslation();
  const title = t("contacts.title");
  const data = [
    {
      icon: <FaLocationDot />,
      title: t("contacts.title1"),
      desc: t("contacts.desc1"),
    },
    {
      icon: <BiSolidPhoneCall />,
      title: t("contacts.title2"),
      desc: t("contacts.desc2"),
    },
    {
      icon: <MdOutlineAccessAlarms />,
      title: t("contacts.title3"),
      desc: t("contacts.desc3"),
    },
  ];
  const num = t("contacts.num");
  const name = t("contacts.name");
  const name2 = t("contacts.name2");
  const feedback = t("contacts.feedback");
  const notification = t("contacts.notification");
  const nameRef = useRef();
  const phoneRef = useRef();
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = {
      name: e.target[0].value,
      phone: e.target[1].value,
      desc: e.target[2].value,
    };
    const token = "7127598664:AAEXfRivlYDlHmGpewNnggFY9DWvgfZZ25o";
    const chatId = "6706091019";
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
      });
      if (response?.status === 200) {
        toast.success(notification)
        nameRef.current.value = '';
        phoneRef.current.value = '+998';
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-[100%] flex flex-col items-end justify-content-center py-[40px] gap-[30px]">
      <ToastContainer/>
      <div className="w-[100%] lg:h-[100vh] flex-col-reverse lg:flex-row xl:h-[70vh] flex">
        <div className="w-[100%] lg:w-[55%] flex flex-col items-start gap-[50px] relative pr-[20px] py-[40px] pl-[5%]">
          <img
            src={ContactsImage}
            alt="ContactsImage"
            className="absolute left-0 w-[100%] h-[100%] object-cover z-[-1]"
          />
          <div className="flex items-center gap-[10px]">
            <div className="h-[3px] bg-purple-600 w-[35px]"></div>
            <h2 className="text-[24px] md:text-[40px] font-[600]">{title}</h2>
          </div>
          <div className="flex gap-[20px] flex-col items-start sm:items-center md:items-start sm:flex-row justify-between w-[100%]">
            {data?.map((item, index) => {
              return (
                <div key={index} className="flex flex-col max-w-[300px] sm:max-w-[180px]">
                  <div className="flex gap-[20px]">
                    <div className="text-[26px] text-purple-600">
                      {item?.icon}
                    </div>
                    <h3 className="text-[20px] font-[600]">{item?.title}</h3>
                  </div>
                  <p className="text-[14px] text-gray-400 ml-[45px]">
                    {item?.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex gap-[10px] text-[18px] w-[100%] justify-content-center">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <RiInstagramFill />
            </a>
            <a href="">
              <BiLogoTelegram />
            </a>
          </div>
          <form onSubmit={handleMessage} className="w-[100%] p-[20px] sm:p-[40px] bg-white shadow-md flex-wrap xl:flex-nowrap flex xl:gap-[20px] gap-[8%] items-end">
            <div className="flex flex-col gap-[10px] relative xl:w-[35%] w-[100%] md:w-[46%]">
              <label className="text-[12px]">{num}</label>
              <img
                src={Flag}
                alt="Flag"
                className="absolute bottom-[14px] left-[10px]"
              />
              <input
              required
              ref={phoneRef}
                type="text"
                defaultValue="+998"
                className="py-[15px] outline-none pl-[40px] pr-[25px] bg-zinc-100"
              />
            </div>
            <div className="flex flex-col gap-[10px] w-[100%] md:w-[46%] xl:w-[35%]">
              <label className="text-[12px]">{name}</label>
              <input
              required
              ref={nameRef}
                type="text"
                placeholder={name2}
                className="py-[15px] outline-none px-[25px] bg-zinc-100"
              />
            </div>
            <button className="py-[15px] whitespace-nowrap px-[25px] bg-purple-600 mt-[20px] xl:mt-0 text-white w-[100%]">
              {feedback}
            </button>
          </form>
        </div>
        <iframe
          className="w-[100%] lg:w-[45%] h-[300px] md:h-[500px] lg:h-[100%]"
          src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.245270%2C41.302209&mode=routes&origin=jsapi_2_1_79&rtext=~41.302150%2C69.244185&rtt=auto&ruri=~&z=17"
          frameBorder={1}
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="px-[5%] py-[20px] w-[100%] flex gap-[40%] items-center">
        <img className="h-[15px]" src={Novas} alt="novas" />
      </div>
    </section>
  );
};

export default Contacts;
