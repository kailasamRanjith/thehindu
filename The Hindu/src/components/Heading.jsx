import React from 'react'

export const Heading = ({heading,readMore}) => {
  return (
    <div className='flex items-center justify-between mb-[8px]'>
      <h2 className='text-[22px] primary_color font-bold'>{heading}</h2>
      <div className='flex items-center gap-[5px]'>
        {/* <img></img> */}
      </div>
    </div>
  )
}
