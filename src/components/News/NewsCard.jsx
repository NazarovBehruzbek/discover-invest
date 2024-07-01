import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({item}) => {
  return (
    <div className='max-w-[380px] w-[100%] my-[15px] h-[300px] relative p-[20px] flex gap-[40px] flex-col transition-colors duration-300 overflow-hidden group cursor-pointer hover:bg-gradient-to-b from-transparent to-purple-600'>
      <div className='flex items-center gap-[5px]'>
        <div className='w-[8px] h-[8px] bg-purple-600 rounded-full'></div>
        <span className='text-[12px] text-white'>{item?.date}</span>
      </div>
      <img src={item?.img} alt={item?.desc} className='group-hover:scale-125 absolute top-0 left-0 ease-in-out duration-300 w-[100%] h-[100%] object-cover brightness-50 z-[-1]'/>
      <div className='absolute group-hover:bottom-[20px] text-white flex flex-col h-[100px] justify-between bottom-[-20px] ease-in-out duration-300'>
        <span className='text-[13px]'>{item?.desc}</span>
        <Link to={`/single_news/${item?.id}`} className='text-[12px] underline'>{item?.viewMore}</Link>
      </div>
    </div>
  )
}

export default NewsCard
