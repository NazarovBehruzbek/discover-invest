import React from 'react'
import { useTranslation } from 'react-i18next'
import AboutImg1 from "../../../assets/about5.jpg"
import AboutImg2 from "../../../assets/about3.jpg"
import AboutImg3 from "../../../assets/about4.jpg"
import AboutImg from "../../../assets/about_cards.svg"
const AboutCards = () => {
    const {t} = useTranslation()
    const data = [
        {img: AboutImg1, title: t("aboutPage.title2"), desc: t("aboutPage.desc2")},
        {img: AboutImg2, title: t("aboutPage.title3"), desc: t("aboutPage.desc3")},
        {img: AboutImg3, title: t("aboutPage.title4"), desc: t("aboutPage.desc4")},
    ]
  return (
    <section className='w-[100%] min-h-[100vh] pl-[20px] pr-[50px] md:px-[100px] py-[100px] relative'>
        <img src={AboutImg} alt="AboutImg" className='w-[100%] h-[100%] absolute left-0 top-0 object-cover z-[-1]'/>
      <div className='w-[100%] border-l-2 border-l-purple-600 flex flex-col gap-[150px]'>
        {
            data?.map((item,index)=> {
                return <div key={index} className='flex gap-[20px] justify-between flex-col-reverse lg:flex-row relative'>
                    <div data-aos="fade-up" className='w-[100%] lg:w-[500px] px-[20px] pr-0 sm:px-[30px] flex flex-col gap-[30px]'>
                        <h4 className='absolute top-0 left-[-18px] font-[500] text-white w-[35px] h-[35px] rounded-full flex text-[24px] justify-center items-center bg-purple-600'>{index + 1}</h4>
                        <h2 className='text-[30px] font-[500]'>{item?.title}</h2>
                        <p className='text-[16px] md:text-[20px] font-[400]'>{item?.desc}</p>
                    </div>
                    <div data-aos="fade-down-left" className='xl:w-[700px] w-[100%] lg:w-[600px] lg:ml-0 ml-[40px] h-[250px] sm:h-[400px] lg:h-[300px] xl:h-[400px] relative border border-purple-600 cursor-pointer'>
                        <img src={item?.img} alt={item?.title} className='w-[100%] h-[100%] absolute object-cover right-[20px] top-[20px] hover:top-0 hover:right-0 ease-in-out duration-300'/>
                    </div>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default AboutCards
