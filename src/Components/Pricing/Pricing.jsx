import React from 'react'
import { SliderButton,Meteors } from '../index';
import { ProductManagementSvg,ReportsSvg,InvoiceAndSalesSvg } from '../../assets/Svg/Svg';
import { useScreenResizeValue } from '../../ScreenSizeFunction';


const Pricing = () => {

    const PricingFeatures = [
        {
            feature:'Get 7 day free trial'
        },
        {
            feature:'No setup fees'
        },
        {
            feature:'No hidden charges'
        },
        {
            feature:'No upfront charges'
        },
        {
            feature:'Unlimited and Free support'
        },
    ]

    const PricingBenefits = [
        {
            name:'Meedgo Basic',
            type:'ERP',
            tagline:'Quisque donec nibh diam tellus integer eros.',
            price:'₹2600',
            method:'$25 USD per month, paid annually',
            benefits:[
                {
                    name:'Product Management',
                    icon:<ProductManagementSvg/>,
                    points:[
                        'Create Product',
                        'Purchase Orders',
                        'Warehouse Management',
                        'Finance',
                        'Finance Account Statement',
                        'Income Statement',
                        'Expense Statement',
                        'Profit Statement'
                    ]
                },
                {
                    name:'Reports',
                    icon:<ReportsSvg/>,
                    points:[
                        'Customer Graphical Overview',
                        'Supplier Graphical Overview',
                        'Trending Product Sales Overview',
                        'Income vs Expenses',
                        'Overview',
                    ]
                },
                {
                    name:'Invoices and Sales',
                    icon:<InvoiceAndSalesSvg/>,
                    points:[
                        'Today Invoices',
                        'Today Sales',
                        'This Month Sales',
                    ]
                }


            ]



        },
        {
            name:'Meedgo Plus',
            type:'Pharmacist',
            tagline:'Sed eget purus vulputate suscipit erat.',
            price:'Invite Only',
            method:'For Meedgo ERP Pharmacist Only ',
            benefits:[
                {
                    name:'Product Management',
                    icon:<ProductManagementSvg/>,
                    points:[
                        'Create Product',
                        'Purchase Orders',
                        'Warehouse Management',
                        'Finance',
                        'Finance Account Statement',
                        'Income Statement',
                        'Expense Statement',
                        'Profit Statement'
                    ]
                },
                {
                    name:'Reports',
                    icon:<ReportsSvg/>,
                    points:[
                        'Customer Graphical Overview',
                        'Supplier Graphical Overview',
                        'Trending Product Sales Overview',
                        'Income vs Expenses',
                        'Overview',
                    ]
                },
                {
                    name:'Invoices and Sales',
                    icon:<InvoiceAndSalesSvg/>,
                    points:[
                        'Today Invoices',
                        'Today Sales',
                        'This Month Sales',
                        'Exclusive to Meedgo Plus Pharmacist',
                        'Get orders from Meedgo ecosystem of app',
                        'AI model to analyze orders and inventory suggestions'
                    ]
                }


            ]



        },
        {
            name:'Meedgo Super',
            type:'Pharmacist',
            tagline:'Odio aenean purus non cursus blandit.',
            price:'Invite Only',
            method:'$95 USD per month, paid annually ',
            benefits:[
                {
                    name:'Product Management',
                    icon:<ProductManagementSvg/>,
                    points:[
                        'Create Product',
                        'Purchase Orders',
                        'Warehouse Management',
                        'Finance',
                        'Finance Account Statement',
                        'Income Statement',
                        'Expense Statement',
                        'Profit Statement'
                    ]
                },
                {
                    name:'Reports',
                    icon:<ReportsSvg/>,
                    points:[
                        'Customer Graphical Overview',
                        'Supplier Graphical Overview',
                        'Trending Product Sales Overview',
                        'Income vs Expenses',
                        'Overview',
                    ]
                },
                {
                    name:'Invoices and Sales',
                    icon:<InvoiceAndSalesSvg/>,
                    points:[
                        'Today Invoices',
                        'Today Sales',
                        'This Month Sales',
                        'Exclusive to Meedgo Plus Pharmacist',
                        'Get orders from Meedgo ecosystem of app',
                        'AI model to analyze orders and inventory suggestions'
                    ]
                }


            ]



        }
    ]

    const breakpointArray = [400,500,520,600,750,800,900,1000,1050,1100,1200,1300];
    const breakpoint = useScreenResizeValue(breakpointArray);

  return (
    <div className={`flex flex-col gap-[2rem] px-[4rem] py-[3rem]
    ${breakpoint>600 && 'px-[4rem]'}
    ${(breakpoint<=600 && breakpoint>500) && 'px-[2rem]'}
    ${(breakpoint<=500 && breakpoint>0) && 'px-[1rem]'}
    `}>
        {/* *---------First Div----------------------* */}
        <div className='flex flex-col items-center'>
            <h3 className={`font-3 text-color-4 font-bold
                 ${breakpoint>1200 && 'text-[1.25rem]'}
                 ${(breakpoint<=1200 && breakpoint>1050) && 'text-[1rem]'}
                 ${(breakpoint<=1050 && breakpoint>900) && 'text-[.875rem]'} 
                 ${(breakpoint<=900 && breakpoint>0) && 'text-[.75rem]'} 
                `}>Pricing</h3>
            <h1 className={` font-3 text-color-5 font-bold 
                  ${breakpoint>1200 && 'text-[2.5rem]'}
                 ${(breakpoint<=1200 && breakpoint>1050) && 'text-[2rem]'}
                 ${(breakpoint<=1050 && breakpoint>900) && 'text-[1.75rem]'} 
                 ${(breakpoint<=900 && breakpoint>0) && 'text-[1.5rem]'} 
                `}>Get eVitalRx at ₹ 5/Day</h1>
            <h2 className={`font-4 text-color-6 font-semibold 
                ${breakpoint>1200 && 'text-[1rem]'}
                ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                ${(breakpoint<=1050 && breakpoint>900) && 'text-[.75rem]'} 
                ${(breakpoint<=900 && breakpoint>0) && 'text-[.625rem]'} 
                `}>The most transparent pricing in pharma industry</h2>
        </div>
        {/* *---------First Div End----------------------* */}


        {/* *---------Second Div----------------------* */}
        <div className='w-full flex flex-col items-center'>
            <div className='flex items-start flex-col'>
                <span className={`bg-color-3 py-[.25rem] px-[.5rem] rounded-full text-color-5 font-3
                    ${breakpoint>1200 && 'text-[.75rem]'}
                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.625rem]'}
                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[.5rem]'} 
                    ${(breakpoint<=900 && breakpoint>0) && 'text-[.5rem]'} 
                    `}>20% OFF</span>
                <div className={`flex items-center gap-[.5rem] g-red-300 font-3
                    ${breakpoint>1200 && 'text-[1rem]'}
                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[.75rem]'} 
                    ${(breakpoint<=900 && breakpoint>0) && 'text-[.625rem]'} 
                    `}>
                    <h1>Yearly</h1>
                    <SliderButton/>
                    <h1>Monthly</h1>
                </div>
            </div>
        </div>
        {/* *---------Second Div End----------------------* */}

        {/* *---------Third Div----------------------* */}
        <div className='flex items-center justify-center gap-[3rem] flex-wrap'>
            {
                PricingFeatures.map((features,index)=>{
                    return(
                        <div 
                        key={index}
                        className={`text-color-7 font-semibold
                            ${breakpoint>1200 && 'text-[1rem]'}
                            ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                            ${(breakpoint<=1050 && breakpoint>900) && 'text-[.75rem]'} 
                            ${(breakpoint<=900 && breakpoint>0) && 'text-[.675rem]'} 
                            ${(breakpoint<=800 && breakpoint>520) && 'w-[25%]'}
                            ${(breakpoint<=520 && breakpoint>0) && 'w-[30%]'}
                            `}
                        >
                            {features.feature}
                        </div>
                    )
                })
            }
        </div>

        {/* *---------third Div End----------------------* */}

        {/* *---------Fourth Div----------------------* */}
        <div className={`flex  justify-between 
            ${breakpoint<=750 ?'flex-col items-center gap-[1rem]':'items-start'}
            `}>
            {
                PricingBenefits.map((benefits,index)=>{
                    return(
                        <div key={index}
                        className={`flex flex-col items-start justify-center gap-[1.5rem] border-[1px]  relative overflow-hidden
                            ${breakpoint>1200 && 'w-[350px] p-[2rem]'}
                            ${(breakpoint<=1200 && breakpoint>1050) && 'w-[300px] p-[2rem]'}
                            ${(breakpoint<=1050 && breakpoint>900) && 'w-[250px] p-[2rem]'}
                            ${(breakpoint<=900 && breakpoint>750) && 'w-[200px] p-[1rem]'}
                            ${(breakpoint<=750 && breakpoint>0) && 'w-[250px] p-[1rem]'}
                            `}
                        >
                            <div className='w-full flex flex-col items-center font-3 text-color-5'>
                                <h2 className={`font-bold 
                                    ${breakpoint>1200 && 'text-[2rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[1.75rem]'}
                                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[1.5rem]'}
                                    ${(breakpoint<=900 && breakpoint>0) && 'text-[1.25rem]'}
                                    `}>{benefits.name}</h2>
                                <h2 className={`font-bold 
                                    ${breakpoint>1200 && 'text-[2rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[1.75rem]'}
                                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[1.5rem]'}
                                    ${(breakpoint<=900 && breakpoint>0) && 'text-[1.25rem]'}

                                    `}>{benefits.type}</h2>
                                <h3 className={`
                                     ${breakpoint>1200 && 'text-[.7rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.625rem]'}
                                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[.5rem]'}
                                    ${(breakpoint<=900 && breakpoint>0) && 'text-[.375rem]'}
                                    `}>{benefits.tagline}</h3>
                            </div>

                            <div className='w-full flex flex-col items-center justify-center text-color-5 font-3'> 
                                <h1 className={`font-bold
                                    ${breakpoint>1200 && 'text-[3rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[2.5rem]'}
                                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[2rem]'}
                                    ${(breakpoint<=900 && breakpoint>0) && 'text-[1.75rem]'}
                                    `}>{benefits.price}</h1>
                                <h2 className={`
                                    ${breakpoint>1200 && 'text-[.75rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.625rem]'}
                                    ${(breakpoint<=1050 && breakpoint>0) && 'text-[.5rem]'}
                                    `}>{benefits.method}</h2>
                            </div>

                            <div className='w-full flex items-center justify-center'>
                                <button className={`py-[.5rem] px-[2rem] text-[#ffffff] bg-[#0f62fe] font-3 font-medium
                                    ${breakpoint>1200 && 'text-[1rem]'}
                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                                    ${(breakpoint<=1050 && breakpoint>0) && 'text-[.75rem]'}
                                    `}>Get Started</button>
                            </div>

                            <div className='flex flex-col items-start justify-center gap-[1rem]  '>
                                {
                                    benefits.benefits.map((types,index2)=>{
                                        return(
                                            <div key={index2}
                                            className='flex flex-col gap-[.5rem]'
                                            >
                                                <div className='flex items-center justify-start gap-[1rem] '>
                                                    {types.icon}
                                                    <h1 className={`text-color-8 font-3 font-bold
                                                        ${breakpoint>1200 && 'text-[1rem]'}
                                                        ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                                                        ${(breakpoint<=1050 && breakpoint>900) && 'text-[.75rem]'} 
                                                        ${(breakpoint<=900 && breakpoint>0) && 'text-[.675rem]'} 
                                                        `}>{types.name}</h1>
                                                </div>
                                                {
                                                    types.points.map((point,index3)=>{
                                                        return(
                                                            <li key={index3}
                                                            className=' flex items-center justify-start gap-[.5rem] '
                                                            >
                                                                <div className='h-[8px] w-[8px] bg-[#000000] rounded-full mt-[.25rem] flex-shrink-0'></div>
                                                                <h1 className={`text-color-9
                                                                    ${breakpoint>1200 && 'text-[1rem]'}
                                                                    ${(breakpoint<=1200 && breakpoint>1050) && 'text-[.875rem]'}
                                                                    ${(breakpoint<=1050 && breakpoint>900) && 'text-[.75rem]'} 
                                                                    ${(breakpoint<=900 && breakpoint>0) && 'text-[.675rem]'} 
                                                                    `}>{point}</h1>
                                                                
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Meteors number={40}/>
                        </div>
                    )
                })
            }
        </div>

        
      






    </div>
  )
}

export default Pricing