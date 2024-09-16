import React, { useState } from 'react'
import {LogoSvg, MenuIcon} from '../../assets/Svg/Svg';
import { useScreenResizeValue } from '../../ScreenSizeFunction';



const MenuButtons = ({className}) => {
    
const breakpointArray = [600,800,1000];
const breakpoint = useScreenResizeValue(breakpointArray);

    const NavButtons = ['Eleven','Twelve','Thirteen','Sixteen'];
    return(
        <div className={`flex items-center gap-[1rem] ${className}`}>
           {
            NavButtons.map((name,index)=>{
                return(
                    <button 
                    key={index}
                    className={`font-3 font-medium 
                        ${breakpoint>1000 && 'text-[1rem]'}
                        ${(breakpoint<=1000 && breakpoint>0) && 'text-[.875rem]'}
                        `} 
                    >
                    {name}
                    </button>
                )
            })
            }
        </div>
    )
}


const LoginButtons = ({className}) => {
    
const breakpointArray = [600,800,1000];
const breakpoint = useScreenResizeValue(breakpointArray);
  

    return(
        <div className={`font-3 flex items-center
            ${breakpoint>1000 && 'text-[1rem]'}
            ${(breakpoint<=1000 && breakpoint>0) && 'text-[.875rem]'}
            ${breakpoint>800 && 'gap-[1rem]'}
            ${(breakpoint<=800 && breakpoint>0) && 'gap-[.5rem]'}
            ${className}
            `}>
            <button className='border-[1px] border-[#0060C3] px-[1rem] py-[.2rem] rounded-[10px] text-color-2 ' >
                Log In
            </button>
            <button className='border-[1px] border-[#0060C3] px-[1rem] py-[.2rem] rounded-[10px] text-color-3 bg-[#0060c3]'>
                Start Free trial
            </button>
        </div>
    )
}

const Navbar = () => {

    

    const breakpointArray = [600,800,1000];
    const breakpoint = useScreenResizeValue(breakpointArray);
    const [Show,SetShow] = useState(false);


  return (
    <div className={`py-[1rem]  flex items-center justify-between
        ${breakpoint>800 && 'px-[3rem]'}
        ${(breakpoint<=800 && breakpoint>0) && 'px-[2rem]'}
    `}> 

        <div className={`font-2 text-color-2 font-bold flex items-center gap-[.5rem]
            ${breakpoint>1000 && 'text-[1rem]'}
            ${(breakpoint<=1000 && breakpoint>0) && 'text-[.875rem]'}
            
            `}>
            <LogoSvg/>

            Meedgo Eco System
        </div>

        {
            breakpoint>800 && 
            <MenuButtons/>
        }
        
        {
           (breakpoint > 600) &&
           <LoginButtons/>
        }
        

        {breakpoint<=800 &&
            <div onClick={()=>{SetShow(!Show)}} className='relative z-40'>
                <MenuIcon />
                <div className={`absolute flex flex-col items-Start justify-start rounded-[10px] shadow-black shadow-sm  right-[15%] overflow-hidden transition-all duration-200 w-[200px] z-[9999]
                    ${Show?'h-fit px-[2rem] py-[1rem]':'h-[0px] p-[0]'}
                    `}> 
                       <MenuButtons className='flex-col '/>

                    {
                        breakpoint<=600 && 
                        <LoginButtons className='flex-col'/>
                    }
                </div>
            </div>
        }

    </div>
  )
}

export default Navbar