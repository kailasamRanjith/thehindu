import React from 'react'
import { Heading } from './Heading'

export const FirstRow = ({ array }) => {
  return (
    <div className='flex md:block'>

      {array.map((res, i) => {
        return (
          <>
            {res.section_name == 'BigImage' && <BigImage obj={res} />}
            {res.section_name == 'ListSection' && <ListSection data={res} />}
          </>
        )
      })}

    </div>
  )
}

const Listview = () => {
  return (
    <div className='w-[25%]'>

    </div>
  )
}

const BigImage = ({ obj }) => {
  return (
    <div className='lg:w-[75%] md:border-b-[2px] md:border-b-[#000]'>

      <div className='h-[400px] '>
        <img className='w-[100%] h-[390px] object-cover' src={obj.image} />
      </div>

      <h1 className='text-[25px] md:pb-[10px] md:text-[18px] font-semibold secondary_color'>{obj.title}</h1>
      <h2 className='text-[44px] md:pb-[10px] md:text-[20px] font-extrabold leading-none'>{obj.sub_title}</h2>

      <div className='flex md:flex-col-reverse gap-[10px] mt-[3px]'>
        <h5 className='w-[320px] md:pb-[5px] text-[13px] font-semibold'>{obj.author}</h5>
        <p className='text-[20px] md:text-[16px]'>{obj.content}</p>
      </div>

    </div>
  )
}

const ListSection = ({data}) =>{

  return(
      <div className='lg:pl-[10px] md:py-[10px] lg:w-[25%]' key={'List'}>
         <Heading heading={data.heading} />
         {data.list.map((res,i)=>{
          return(
            <div className={`${i != data.list.length-1 ? 'border-b-[1px] border-b-[#ddd]' : '' } p-[10px_10px]`} key={res.title}>
              <div className={`flex gap-[10px]`}>
                <h1 className='text-[36px] font-bold'>{i}.</h1>
                <h5 className={`font-semibold pb-[5px] text-[18px] line-clamp-2`}>{res.title}</h5>   
              </div>  
              <h5 className='text-[14px] mt-[5px] ml-[37px]'> {res.author}</h5>
            </div>    
          )
      })}
      </div>
  )
 }