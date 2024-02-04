import React from 'react'
import List from '../libs/footer.json'
import FooterArray from '../libs/footer_array.json'


export const Footer = () => {

  return (
    <div className='primary_bg p-[60px] md:p-[15px]'>
      <div className='flex items-center gap-[10px] md:pb-[10px]'>
        <img src='/white-log.png'></img>
        <p className='text-[13px] font-semibold text-[#fff]'>Frontline India’s <br /> <span className='text-[12px] font-normal text-[#fff]'> National Magazine</span></p>
      </div>
      <div className={`grid grid-cols-6 md:grid-cols-2 gap-[15px] p-[10px_0_0_65px] md:p-0`}>
        {List && List.data && List.data.map((res, i) => {
          return (
            <div key={res.heading + i}>
              <h4 className='border-t-[2px] border-t-[#fff] w-fit text-[16px] font-semibold text-[#fff] pb-[7px]'>{res.heading}</h4>
              {res.list.map((r, i) => {
                return (
                  <h6 className='cursor-pointer text-[13px] text-[#fff] pb-[4px]' key={r.label}>{r.label}</h6>
                )
              })}
            </div>
          )
        })}
      </div>

      <div className='flex md:flex-col items-center pt-[25px]'>
        <div className='lg:w-[30%] flex items-center gap-[15px]'>
          <p className='cursor-pointer text-[#fff] text-[14px]'>Sign In</p>
          <button className='cursor-pointer bg-[#000] text-[14px] text-[#fff] p-[5px_10px] h-[35px] rounded-[5px]'>Subscribe</button>
        </div>
        <div className='lg:w-[40%] md:py-[10px] flex items-center justify-center'>
          <img src="footer_icons.png" />

        </div>
        <div className='md:hidden w-[30%]'></div>
      </div>

      <div className='flex items-center md:py-[10px] md:flex-wrap justify-center pt-[15px]'>
        {FooterArray.data.map((res,i)=>{
          return(
            <p className='cursor-pointer md:pb-[5px] md:flex-[0_0_50%] text-[14px] text-[#fff]' key={res.label}>{res.label} <span className={`${ i != FooterArray.data.length-1 ? '' : 'hidden'} md:hidden p-[0_10px]`}> / </span></p>
          )
        })}
      </div>

      <p className='text-[14px] text-[#fff] pt-[15px] text-center'>Copyright© 2022, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</p>
    </div>
  )
}
