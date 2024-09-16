import React from 'react'
import { MobileImage } from '../../assets'
import { IoIosArrowRoundForward } from "react-icons/io";
import { CurveSvg, FlowerSvg } from '../../assets/Svg/Svg';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const AppAvailibility = () => {

    const breakpointArray = [400,500,600,700,800,900,1000,1100,1156,1240,1300];
    const breakpoint = useScreenResizeValue(breakpointArray);

  return (
    <div className={`flex p-[3rem] relative
        ${breakpoint>600 && 'items-end justify-end'}
        ${breakpoint<=600 && 'flex-col-reverse items-center justify-center'}
    `}>
        <div className={` flex flex-col gap-[1rem]
            ${breakpoint<=600?'w-[100%]':'w-[50%]'}
            `}>
            <h1 className={`text-color-16 font-bold font-6 relative z-10
                 ${breakpoint>1300 && 'text-[4rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[3.5rem]'}
                ${(breakpoint<=1000 && breakpoint>700) && 'text-[3rem]'}
                ${(breakpoint<=700 && breakpoint>0) && 'text-[2.5rem]'}
                `}>Manage Your Pharmacy</h1>
            <h2 className={`font-6 text-color-17
                 ${breakpoint>1300 && 'text-[1.125rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[1rem]'}
                ${(breakpoint<=1000 && breakpoint>700) && 'text-[.875rem]'}
                ${(breakpoint<=700 && breakpoint>0) && 'text-[.75rem]'}
                `}>
            Meedgo ERP is an inventory management system that streamlines processes and offers comprehensive financial tracking. It generates detailed statements and provides both graphical and summary reports.
            </h2>
            <div className={`flex items-center justify-start gap-[1rem] 
                 ${breakpoint>1300 && 'text-[1rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem]'}
                ${(breakpoint<=1000 && breakpoint>700) && 'text-[.75rem]'}
                ${(breakpoint<=700 && breakpoint>0) && 'text-[.675rem]'}
                `}>
                <button className='px-[1rem] py-[.5rem] bg-[#0060C3] rounded-[10px] text-color-3 font-semibold font-6'>
                    Download App
                </button>

                <a href="" className='text-color-17 font-6 font-semibold  flex items-center gap-[.5rem]'>
                    Learn More
                    <IoIosArrowRoundForward className='text-[1.5rem]' />
                </a>
            </div>
        </div>

        <div className={` flex items-center justify-center
            ${breakpoint<=600?'w-[100%]':'w-[50%]'}
            
            `}>
            <img src={MobileImage} alt="" className={`
                ${breakpoint>800 && 'w-[80%]'}
                ${(breakpoint<=800 && breakpoint>700) && 'w-[90%]'}
                ${(breakpoint<=800 && breakpoint>600) && 'w-[100%]'}
                ${(breakpoint<=600 && breakpoint>0) && 'w-[60%]'}
                `} />
        </div>


            <CurveSvg className={`absolute  z-0
                ${breakpoint>1240 && 'top-[42%] left-[30px]'}
                ${(breakpoint<=1240 && breakpoint>1156) && 'top-[39%] left-[30px]'}
                ${(breakpoint<=1156 && breakpoint>1000) && 'top-[30%] left-[30px]'}
                ${(breakpoint<=1000 && breakpoint>900) && 'top-[28%] left-[30px]'}
                ${(breakpoint<=900 && breakpoint>600) && 'top-[25%] left-[30px]'}
                ${(breakpoint<=600 && breakpoint>0) && 'top-[65%] left-[30px]'}
                `}/>
            <FlowerSvg className={`absolute 
                ${breakpoint>1240 && 'left-[25%] top-[52%]'}
                ${(breakpoint<=1240 && breakpoint>1156) && 'left-[28%] top-[48%]'}
                ${(breakpoint<=1156 && breakpoint>1000) && 'left-[28%] top-[40%]'}
                ${(breakpoint<=1000 && breakpoint>800) && 'left-[34%] top-[35%]'}
                ${(breakpoint<=800 && breakpoint>1) && 'right-[5%] top-[60%]'}
                `}/>

        

    </div>
  )
}

export default AppAvailibility