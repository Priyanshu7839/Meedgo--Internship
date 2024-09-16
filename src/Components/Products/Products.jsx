import React from 'react'
import { ProductsSvg1, TickSvg } from '../../assets/Svg/Svg'
import { useScreenResizeValue } from '../../ScreenSizeFunction'


const Products = () => {

    const ProductFeatures = ['A.I inventory assistance','Removal Of location Barrier','Margin Rationalisation','Location Based Product Demand  info','Prescription Management  ']

    const ProductQualities = [
        {
            icon:<ProductsSvg1/>,
            name:'Removal of location Barrier ',
            desc:'Take your services beyond your physical establishment and into the hands of every customer in your hyper local market  '
        },
        {
            icon:<ProductsSvg1/>,
            name:'Pharmacy Review',
            desc:'Letting the world know about your experience and quality assurance , enabling you with an edge to procure new customers . '
        },
        {
            icon:<ProductsSvg1/>,
            name:'Business Opportunity creation ',
            desc:'Giving  you insists about the market’s highest and lowest selling SKUs results in better inventory planning and cost optimisation.  '
        },
        {
            icon:<ProductsSvg1/>,
            name:'Location-based product in-demand info ',
            desc:'Get optimum inventory information , taking your inventory turn ratio to its best levels.'
        }
    ]

    const breakpointArray = [400,500,700,1000,1100,1240,1300];
    const breakpoint = useScreenResizeValue(breakpointArray);

  return (
    <div className={`w-full rounded-[10px] bg-color-2 flex
        ${breakpoint<=700 && 'flex-col gap-[1rem]'}
        ${breakpoint>500 ? 'p-[3rem]':'p-[2rem]'}
    `}>

        <div className={` flex flex-col items-start gap-[1rem]
            ${breakpoint > 1240 && 'w-[30%]'}
            ${(breakpoint <= 1240 && breakpoint>700) && 'w-[50%]'}
            ${(breakpoint <= 1100 && breakpoint>0) && 'w-[100%]'}
            `}>
            <h3 className={`text-color-10 font-5 font-semibold
                ${breakpoint>1300 && 'text-[1rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem]'}
                ${(breakpoint<=1000 && breakpoint>0) && 'text-[.75rem]'}
                `}>Our Products</h3>
            <h1 className={`text-color-11 font-bold font-6 
                ${breakpoint>1300 && 'text-[3rem] leading-[4rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[2.5rem] leading-[3rem]'}
                ${(breakpoint<=1000 && breakpoint>0) && 'text-[2rem] leading-[2.5rem]'}
                `}>The Edge With Meedgo</h1>
            <h2 className={`text-color-12 font-5
                ${breakpoint>1300 && 'text-[1rem]'}
                ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem]'}
                ${(breakpoint<=1000 && breakpoint>0) && 'text-[.75rem]'}
                `}>Handle customers with more speed and confidence</h2>

            <div>
                {
                    ProductFeatures.map((features,index)=>{
                        return(
                            <div
                            key={index}
                            className='flex items-center gap-[.5rem]'
                            >
                                <TickSvg/>
                                <h1 className={`font-5 text-color-13 font-medium text-[.75rem]
                                     ${(breakpoint>1000) && 'text-[.75rem]'}
                                     ${(breakpoint<=1000 && breakpoint>0) && 'text-[.625rem]'}
                                    `}>{features}</h1>
                            </div>
                        )
                    })
                }
            </div>

            <button className={`py-[.5rem] px-[1rem] rounded-[10px] gradient-1 text-[#ffffff] font-semibold font-6
                ${(breakpoint>1000) && 'text-[.75rem]'}
                ${(breakpoint<=1000 && breakpoint>0) && 'text-[.625rem]'}
                ${breakpoint<=500 && 'w-full'}
                `}>
                Get Started For Free
            </button>
        </div>

        <div className={`flex items-center justify-center gap-[1rem] flex-wrap
            ${breakpoint > 1240 && 'w-[70%]'}
            ${(breakpoint <= 1240 && breakpoint>700) && 'w-[50%]'}
            ${(breakpoint <= 1100 && breakpoint>0) && 'w-[100%]'}
            `}>

            {
                ProductQualities.map((quality,index)=>{
                    return(
                        <div className={`bg-[#ffffff]  rounded-[20px] 
                            ${(breakpoint>1240) && 'p-[2rem] w-[45%] h-[200px] flex flex-col justify-end'}
                            ${(breakpoint<=1240 && breakpoint>500) && 'p-[1rem] w-[100%] h-fit flex items-center justify-center'}
                            ${(breakpoint<=500 && breakpoint>0) && 'p-[1rem] w-[100%] h-fit flex flex-col  items-center justify-center'}
                            `}
                        key={index}
                        >
                            {quality.icon}
                            <div className={`flex flex-col  ${breakpoint<=500 && 'items-center'}`}>
                                <h1 className={`text-color-14 font-bold font-6
                                     ${(breakpoint>1000) && 'text-[1.125rem]'}
                                     ${(breakpoint<=1000 && breakpoint>0) && 'text-[1rem]'}
                                    
                                    `}>{quality.name}</h1>
                                <h1 className={`text-color-5 
                                      ${(breakpoint>1000) && 'text-[.75rem]'}
                                     ${(breakpoint<=1000 && breakpoint>0) && 'text-[.625rem]'}
                                    `}>{quality.desc}</h1>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}

export default Products