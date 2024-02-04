import React from 'react'

export const Header = () => {

    let data = ['Home', 'The Nation', 'Arts & Culture', 'Politics', 'Economy', 'Columns', 'Current Issue']

    return (
        <div className='flex gap-[10px] pt-[15px]'>
            <div className='md:flex md:items-center md:gap-[5px]'>
                <img className='h-[18px] lg:hidden md:h-[30px]' src="/menu.svg" alt="" />
                <img className='cursor-pointer h-[100px] md:h-[45px]' src="logo.png" />
                <div className='lg:hidden md:pb-[5px]'>
                    <h1 className='text-[13px] font-bold'>Frontline</h1>
                    <h1 className='text-[12px] w-max font-normal'>India’s National Magazine</h1>
                </div>
            </div>
            <div className='w-[100%]'>
                <div className='md:hidden flex items-center justify-between pb-[25px]'>
                    <div>
                        <h1 className='text-[13px] font-bold'>India’s National Magazine</h1>
                        <h1 className='text-[12px] font-normal'>Since 1984</h1>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <p className='cursor-pointer primary_color font-semkiibold text-[14px]'>Subscribe to Newsletters</p>
                        <p className='cursor-pointer text-[#000] text-[14px]'>Sign In</p>
                        <button className='cursor-pointer primary_bg text-[14px] text-[#fff] p-[5px_10px] h-[35px] rounded-[5px]'>Subscribe</button>
                    </div>
                </div>

                <div className='p-[8px_0] md:hidden flex items-center justify-between border-b-[1px] border-t-[1px] border-t-[#ddd] border-b-[#ddd]'>
                    <div className='flex items-center'>
                        {data.map((res, i) => {
                            return (
                                <h3 className={`hover:text-[#B7080D] cursor-pointer text-[15px] font-semibold p-[0_10px] ${i != data.length - 1 ? 'border-r-[1px] border-r-[#ddd]' : ''}`} key={res}>{res}</h3>
                            )
                        })}
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex items-center gap-[8px] border-r-[1px] border-r-[#ddd] pr-[15px]'>
                            <p className='text-[13px]'>Go to Search</p>
                            <img className='h-[18px]' src="/search.svg" alt="" />
                        </div>
                        <img className='h-[18px]' src="/menu.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
