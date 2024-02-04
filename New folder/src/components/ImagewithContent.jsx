import React from 'react'
import { Heading } from './Heading'
import { Subscribtion } from './Subscribtion'

const ImagewithContent = ({ data, show_more, heading, subscribtion, subscribtion_value }) => {
    return (
        <>
            <Heading heading={heading} />
            {data && data.length > 0 ? <div className={`wrapper md:!flex md:flex-col lg:h-[480px] gap-[15px]`}>
                {data.map((res, i) => {
                    return (
                        <div key={res.title} className={`${res.grid_area} ${res.border_bottom && res.border_bottom == 1 ? 'border-b-[1px] border-b-[#838383]' : ''} ${i != data.length - 1 ? 'border-r-[0px] border-r-[#ddd] pr-[10px]' : ''} `}>
                            {res.image ? <img className={`mb-[10px] h-[145px] w-full object-cover`} src={res.image} alt={res.title} /> : <></>}
                            <h5 className={`${res.image ? 'primary_color' : 'secondary_color'} pb-[5px] font-semibold text-[16px]`}>{res.title}</h5>
                            <h5 className={`font-bold pb-[5px] text-[18px] line-clamp-3`}>{res.sub_title}</h5>
                            <p className={`font-normal pb-[5px] text-[14px] line-clamp-3`}>{res.content}</p>
                            <p className={`font-semibold pb-[5px] text-[12px]`}>{res.author}</p>
                        </div>
                    )
                })}

            </div> : <></>}
            {show_more && <p className='cursor-pointer hover:pl-[5px] hover:underline hover:transition transition-all delay-500 text-[12px] primary_color pr-[2px] text-center mb-[15px] font-bold'>SEE MORE DETAILS <span className='text-[13px] primary_color'>{">>"}</span></p>}

            {subscribtion && <Subscribtion data={subscribtion_value} />}
        </>
    )
}

export default ImagewithContent