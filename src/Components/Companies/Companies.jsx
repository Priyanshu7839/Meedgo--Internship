import React from 'react'
import {CompanyImg1,CompanyImg2,CompanyImg3,CompanyImg4,CompanyImg5,CompanyImg6} from '../../assets';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const Companies = () => {
  
  const breakpointArray = [400,500,600,800,1000];
  const breakpoint = useScreenResizeValue(breakpointArray);
  
  return (
    <div className='flex flex-col gap-[2rem] items-center justify-center bg-color-2 w-full p-[2rem]'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className={`text-color-2 font-bold  font-3
              ${breakpoint>1000 && 'text-[1.125rem]'}
              ${(breakpoint<=1000 && breakpoint>800) && 'text-[1rem]'}
              ${(breakpoint<=800 && breakpoint>600) && 'text-[.875rem]'}
              ${(breakpoint<=600 && breakpoint>500) && 'text-[.75rem]'}
              ${(breakpoint<=500 && breakpoint>0) && 'text-[.625rem]'}
              `}>You Are In A Good Company</h1>
            <h1 className={`text-color-5 font-bold font-3
               ${breakpoint>1000 && 'text-[2.5rem]'}
               ${(breakpoint<=1000 && breakpoint>800) && 'text-[2.25rem]'}
               ${(breakpoint<=800 && breakpoint>600) && 'text-[2rem]'}
               ${(breakpoint<=600 && breakpoint>500) && 'text-[1.75rem]'}
               ${(breakpoint<=500 && breakpoint>0) && 'text-[1.25rem]'}
              `}>Recognised and Supported By</h1>
            <h3 className={`text-color-5 font-3
                ${breakpoint>1000 && 'text-[1rem]'}
               ${(breakpoint<=1000 && breakpoint>800) && 'text-[.875rem]'}
               ${(breakpoint<=800 && breakpoint>600) && 'text-[.75rem]'}
               ${(breakpoint<=600 && breakpoint>500) && 'text-[.625rem]'}
               ${(breakpoint<=500 && breakpoint>0) && 'text-[.5rem]'}
              `}>Empowering Innovation and Growth Through Esteemed Partnerships and Recognitions</h3>
        </div>

        <div className='flex items-center justify-between flex-wrap'>
            <img src={CompanyImg1} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
            <img src={CompanyImg2} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
            <img src={CompanyImg3} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
            <img src={CompanyImg4} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
            <img src={CompanyImg5} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
            <img src={CompanyImg6} alt="" className={`aspect-video
              ${breakpoint>1000 && 'w-[10%]'}
              ${breakpoint<=1000 && 'w-[10%]'}
              `}/>
        </div>
    </div>
  )
}

export default Companies