import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessAlarms } from "react-icons/md";
import ContactsImage from "../../assets/news.svg";
import Novas from "../../assets/novas.svg";
import Flag from "../../assets/flag.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contacts2 = () => {
  const { t } = useTranslation();
  const question = t("contactsPage.question");
  const data = [
    {
      icon: <FaLocationDot />,
      title: t("contactsPage.title1"),
      desc: t("contactsPage.desc1"),
    },
    {
      icon: <BiSolidPhoneCall />,
      title: t("contactsPage.title2"),
      desc: t("contactsPage.desc2"),
    },
    {
      icon: <MdOutlineAccessAlarms />,
      title: t("contactsPage.title3"),
      desc: t("contactsPage.desc3"),
    },
  ];
  const num = t("contactsPage.num");
  const name = t("contactsPage.name");
  const name2 = t("contactsPage.name2");
  const feedback = t("contactsPage.feedback");
  const notification = t("contactsPage.notification");
  const notification_err = t("contactsPage.notification_err");
  const department = t("contactsPage.department");
  const ques = t("contactsPage.ques");
  const leave_ques = t("contactsPage.leave_ques");
  const options = [
    t("contactsPage.item1"),
    t("contactsPage.item2"),
    t("contactsPage.item3"),
    t("contactsPage.item4"),
    t("contactsPage.item5"),
    t("contactsPage.item6"),
    t("contactsPage.item7"),
  ];
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = {
      name: e.target[0].value,
      phone: e.target[1].value,
      department: e.target[2].value,
      question: e.target[3].value,
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
        toast.success(notification);
        nameRef.current.value = "";
        phoneRef.current.value = "+998";
        messageRef.current.value = "";
      }
    } catch (error) {
      toast.error(notification_err);
      console.log(error);
    }
  };
  return (
    <section
      id="contacts"
      className="w-[100%] flex flex-col items-end justify-content-center py-[40px] gap-[30px]"
    >
      <ToastContainer />
      <div className="w-[100%] lg:h-[100vh] flex-col xl:h-[70vh] flex">
        <div className="w-[100%] flex flex-col items-start relative pr-[20px] pl-[5%]">
          <img
            src={ContactsImage}
            alt="ContactsImage"
            className="absolute left-0 w-[100%] h-[100%] object-cover z-[-1]"
          />
          <div className="flex w-[100%] justify-between flex-col-reverse md:flex-row gap-[20px]">
            <div className="flex flex-col w-[100%]">
              <div className="flex items-center gap-[10px]">
                <div className="h-[3px] bg-purple-600 w-[35px]"></div>
                <h2 className="text-[30px] md:text-[40px] font-[600]">
                  {question}
                </h2>
              </div>
              <h1 className="text-[30px] md:text-[40px] font-[600] mb-[50px]"></h1>
              <div className="flex gap-[20px] w-[100%] items-center md:items-start justify-between flex-wrap max-w-[800px]">
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col w-[100%] sm:max-w-[180px]"
                    >
                      <div className="flex gap-[20px]">
                        <div className="text-[26px] text-purple-600">
                          {item?.icon}
                        </div>
                        <h3 className="text-[20px] font-[600]">
                          {item?.title}
                        </h3>
                      </div>
                      <p className="text-[14px] text-gray-400 ml-[45px]">
                        {item?.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <form
              onSubmit={handleMessage}
              className="w-[100%] md:w-[400px] p-[20px] relative top-[-160px] sm:p-[40px] bg-white shadow-lg flex-col flex xl:gap-[20px] gap-[8%] items-end"
            >
              <div className="flex text-[16px] md:text-[12px] flex-col gap-[10px] relative w-[100%]">
                <label className="text-[16px] md:text-[12px]">{num}</label>
                <img
                  src={Flag}
                  alt="Flag"
                  className="absolute bottom-[14px] left-[10px]"
                />
                <input
                  ref={phoneRef}
                  required
                  type="text"
                  defaultValue="+998"
                  className="py-[15px] outline-none pl-[40px] pr-[25px] bg-zinc-100"
                />
              </div>
              <div className="flex text-[16px] md:text-[12px] flex-col gap-[10px] w-[100%]">
                <label className="text-[16px] md:text-[12px]">{name}</label>
                <input
                  ref={nameRef}
                  required
                  type="text"
                  placeholder={name2}
                  className="py-[15px] outline-none px-[25px] bg-zinc-100"
                />
              </div>
              <div className="flex text-[16px] md:text-[12px] flex-col gap-[10px] w-[100%]">
                <label className="text-[16px] md:text-[12px]">
                  {department}
                </label>
                <select
                  required
                  type="text"
                  className="py-[15px] outline-none px-[25px] bg-zinc-100"
                >
                  {options?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex text-[16px] md:text-[12px] flex-col gap-[10px] w-[100%]">
                <label className="text-[16px] md:text-[12px]">{ques}</label>
                <textarea
                  ref={messageRef}
                  required
                  type="text"
                  placeholder={leave_ques}
                  className="py-[15px] outline-none px-[25px] bg-zinc-100"
                ></textarea>
              </div>
              <button className="py-[15px] px-[25px] bg-purple-600 mt-[20px] xl:mt-0 text-white w-[100%]">
                {feedback}
              </button>
            </form>
          </div>
        </div>
      </div>
      <iframe
        className="w-[100%]  h-[300px] md:h-[500px]"
        src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.245270%2C41.302209&mode=routes&origin=jsapi_2_1_79&rtext=~41.302150%2C69.244185&rtt=auto&ruri=~&z=17"
        frameBorder={1}
        allowFullScreen={true}
      ></iframe>
      <div className="px-[5%] py-[20px] w-[100%] flex gap-[40%] items-center">
        <img className="h-[15px]" src={Novas} alt="novas" />
        <p className="text-[12px] text-gray-400">
          © 2022 Discover Invest. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contacts2;
