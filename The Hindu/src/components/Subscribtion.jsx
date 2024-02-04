import React from 'react'

export const Subscribtion = ({data}) => {
  return (
    <div className='subscribe'>
       <h4 className='text-[16px] font-medium'>{data.span && <span className='text-[16px] font-extrabold p-[0_5px]'>{data.span}</span>}{data.title}</h4> 
       <button style={{background:data.color}}>{data.button}</button>
    </div>
  )
}
