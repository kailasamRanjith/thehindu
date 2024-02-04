import React, { useState } from 'react'
import { Subscribtion } from './Subscribtion'
import { Heading } from './Heading'

export const ThirdRow = ({data, heading, subscribtion, subscribtion_value}) => {
  return (
   <>
     <Heading heading={heading} />
     {data && data.length > 0 ? <div className={`grid grid-cols-4 md:grid-cols-1 gap-[15px]`}>
                {data.map((res, i) => {
                    return (
                        <>
                         {res.section_name == 'ImagewithContent' && <ImagewithContent res={res} />}
                         {res.section_name == 'BookStore' && <BookStore data={res} />}
                         {res.section_name == 'ListContent' && <ListContent data={res} />}
                        </>
                    )
                })}
    </div> : <></>}
    {subscribtion && <Subscribtion data={subscribtion_value} />}
   </>
  )
}



const ImagewithContent = ({ res }) => {
    return (
        <div key={res.title} className={``}>
            {res.image ? <img className={`mb-[10px] h-[145px] w-full object-cover`} src={res.image} alt={res.title} /> : <></>}
            <h5 className={`${res.image ? 'primary_color' : 'secondary_color'} pb-[5px] font-semibold text-[16px]`}>{res.title}</h5>
            <h5 className={`font-extrabold pb-[5px] text-[18px] line-clamp-3`}>{res.sub_title}</h5>
            <p className={`font-normal mb-[8px] text-[14px] line-clamp-3`}>{res.content}</p>

            <h5 className={`primary_color pb-[2px] font-semibold text-[16px]`}>{res.category}</h5>
            <p className={`font-semibold pb-[5px] text-[12px]`}>{res.author}</p>
        </div>
    )
}

const BookStore = ({data}) =>{
    
    const [hover,setHover] = useState(false)

    return(
        <div key={'bookstore'}>
            <div className='relative flex items-center justify-center h-[270px] mb-[10px]'>
              <img onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className='cursor-pointer hover:opacity-20 h-[260px]' src={data.image} />
              {hover && <button className='absolute primary_bg text-[#fff] p-[5px_10px] h-[35px] rounded-[5px] z-[999]'>Read More</button>}
            </div>
            <h6 className='text-center text-[#4e4e4ee6] text-[13px] mb-[2px]'>Subscribers Only</h6>
            <h3 className='text-center primary_color text-[16px] fonrt-semibold'>Haven’t you subscribed yet?</h3>
        </div>
    )
}

const ListContent = ({data}) =>{
    return(
        <div key={'List'}>
           {data.list.map((res,i)=>{
            return(
              <div className={`${i != data.list.length-1 ? 'border-b-[1px] border-b-[#ddd]' : '' } p-[10px_10px]`} key={res.title}>
               <h5 className={`font-semibold pb-[5px] text-[18px] line-clamp-2`}>{res.title}</h5>   
               <h5> <span style={{'color':res.color}} className={`pb-[5px] pr-[10px] font-semibold text-[16px]`}>{res.category}</span> {res.author}</h5>
              </div>    
            )
        })}
        </div>
    )
}