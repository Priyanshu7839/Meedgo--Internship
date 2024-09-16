import React from 'react'
import { TickSvg, BlobSvg, Ellipse1, Ellipse2, SettingsIcon } from '../../assets/Svg/Svg';
import { Particles, Products } from '../../Components';
import { IoIosStar, IoIosArrowRoundUp } from "react-icons/io";
import { ImageWithBlob } from '../../assets';

import { Bar,Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from 'chart.js';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

// Register the ArcElement, Tooltip, and Legend components
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);


const StarComponent = ({ className }) => {
  return (
    <div className={`flex  text-[#0060C3] bg-white w-fit p-[.5rem] gap-[.2rem] rounded-[10px] shadow-black shadow-sm ${className}`}>
      {
        [...Array(5)].map((_, index) => {
          return (
            <div key={index}>
              <IoIosStar />
            </div>
          )
        })
      }
    </div>
  )
}

const EarningComponents = ({ className }) => {

  const data = {
    labels: [],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: '0',
        borderAlign: 'inner',
        borderRadius: '100'

      },
    ],
  };

  const breakpointArray = [800,900,1000,1200,1300,]
  const breakpoint = useScreenResizeValue(breakpointArray);

  return (
    <div className={`rounded-[10px] bg-white shadow-black shadow-sm ${className}
    ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800))&& ' w-[250px] p-[2rem]'}
    ${(breakpoint<=1300 && breakpoint>1200) && 'w-[220px] p-[1.5rem]'}
    ${(breakpoint<=1200 && breakpoint>1000) && 'h-[220px] p-[1rem]'}
    ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) && 'h-[220px] p-[1rem]'}
    `}>
      <div>
        <div className='flex items-center gap-[1rem]'>
          <h1 className={`text-color-18 font-6 font-bold flex items-start
            ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[2rem]'}
            ${(breakpoint<=1300 && breakpoint>1000) && 'text-[1.75rem]'}
            ${(breakpoint<=1000 &&(breakpoint<=800||breakpoint>900)) && 'text-[1.5rem]'}
            `}> <span className={`text-color-19
              ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[1rem]'}
              ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem]'}
              ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
            `}>₹</span> 69,700</h1>
          <div className=' py-[.2rem] flex items-center justify-center bg-[#DCFDFD] rounded-[6px]'>
            <IoIosArrowRoundUp className='text-color-20' />
            <h1 className={`font-6 text-color-20 font-semibold
              ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[1rem] px-[.5rem]' }
              ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem] px-[.2rem]'}
              ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem] px-[.2rem]'}
              `}>2.2%</h1>
          </div>
        </div>

        <h2 className={`text-color-19 font-6 font-medium 
          ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[.8rem]'}
          ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
          `}>Expected Earnings</h2>
      </div>

      <div className='w-full h-[80px] flex items-center justify-center '>
        <Doughnut data={data} />
      </div>

      <div>
        {/* ---------------------- */}
        <div className={`flex items-center justify-between 
          ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[.8rem]'}
          ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
          `}>
          <div className='flex items-center gap-[.5rem]'>
            <div className='w-[8px] h-[8px] rounded-full bg-[#FF6384] flex-shrink-0'></div>
            <h1 className='text-color-21 font-medium font-6 '>Online</h1>
          </div>
          <h1 className='text-color-22 font-bold font-6 '>₹7660</h1>
        </div>
        {/* ------------------------- */}
        {/* ---------------------- */}
        <div className={`flex items-center justify-between 
          ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[.8rem]'}
          ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
          `}>
          <div className='flex items-center gap-[.5rem]'>
            <div className='w-[8px] h-[8px] rounded-full bg-[#36A2EB] flex-shrink-0'></div>
            <h1 className='text-color-21 font-medium font-6 '>Local</h1>
          </div>
          <h1 className='text-color-22 font-bold font-6 '>₹2860</h1>
        </div>
        {/* ------------------------- */}
        {/* ---------------------- */}
        <div className={`flex items-center justify-between 
          ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[.8rem]'}
          ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
          `}>
          <div className='flex items-center gap-[.5rem]'>
            <div className='w-[8px] h-[8px] rounded-full bg-[#FFCE56] flex-shrink-0'></div>
            <h1 className='text-color-21 font-medium font-6 '>Others</h1>
          </div>
          <h1 className='text-color-22 font-bold font-6 '>₹42,760</h1>
        </div>
        {/* ------------------------- */}
      </div>


    </div>
  )
}

const DailySalesComponents = ({ className }) => {
  
  const data = {
    labels:['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
    datasets: [{
      label:[],
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      barThickness:9,
      borderRadius:100
    }]
  };

  const options = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: true, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display:false // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: false, // Remove x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false, // Disable grid lines on the y-axis
        },
        ticks: {
          display: false, // Remove x-axis labels
        },
      },
    },
  };

  const breakpointArray = [800,900,1000,1200,1300]
  const breakpoint = useScreenResizeValue(breakpointArray);


  return (
    <div className={`pb-[0] rounded-[10px] bg-white shadow-black shadow-sm  ${className}
    ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && ' w-[250px] p-[2rem]'}
    ${(breakpoint<=1300 && breakpoint>1200) && 'w-[220px] p-[1.5rem]'}
    ${(breakpoint<=1200 && breakpoint>1000) && 'w-[200px] p-[1rem]'}
    ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) && 'w-[150px] p-[1rem]'}
    `}>
      <div>
        <div className={`flex 
          ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) ?'flex-col gap-[.1rem] items-start ':'gap-[1rem] items-center '}
          `}>
          <h1 className={`text-color-18 font-6 font-bold flex items-start
            ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[2rem]'}
            ${(breakpoint<=1300 && breakpoint>1000) && 'text-[1.75rem]'}
            ${(breakpoint<=1000 && breakpoint>900) && 'text-[1.5rem]'}
            `}> <span className={`text-color-19
               ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[1rem]'}
               ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.875rem]'}
            `}>₹</span> 2420</h1>
          <div className='px-[.5rem] py-[.2rem] flex items-center justify-center bg-[#DCFDFD] rounded-[6px]'>
            <IoIosArrowRoundUp className='text-color-20' />
            <h1 className={`font-6 text-color-20 font-semibold
              ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[1rem]'}
              ${(breakpoint<=1300 && breakpoint>1000) && 'text-[.875rem]'}
              ${(breakpoint<=1000 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
              `}>2.6%</h1>
          </div>
        </div>

        <h2 className={`text-color-19 font-6 font-medium text-[.8rem]
          ${(breakpoint>1300 || (breakpoint<=900 && breakpoint>800)) && 'text-[.8rem]'}
          ${(breakpoint<=1300 && (breakpoint<=800||breakpoint>900)) && 'text-[.75rem]'}
          `}>Daily Earnings</h2>
      </div>

       
        <Bar data={data} options={options}/>
      


      

     


    </div>
  )
}

const Header = () => {

  const breakpointArray=[500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1120,1180,1240,1320,1400,1430];
  const breakpoint = useScreenResizeValue(breakpointArray);
  console.log(breakpoint);

  return (
    <div className='p-[3rem] relative'>
      <div className={`flex  mb-[4rem]
        ${breakpoint<=900 && 'flex-col'}
        ${breakpoint>600 && 'p-[4rem]'}
        ${breakpoint<=600 && 'p-[2rem]'}
        `}>
        <div className='w-[100%] flex flex-col gap-[2rem] justify-center'>
          <div>
            <h2 className={`text-color-2 font-5 font-semibold 
              ${breakpoint>1100 && 'text-[1rem]'}
              ${(breakpoint<=1100 && breakpoint>1000) && 'text-[.875rem]'}
              ${(breakpoint<=1000 && breakpoint>600) && 'text-[.75rem]'}
              ${(breakpoint<=600 && breakpoint>0) && 'text-[.625rem]'}
              `}>Simple Busniess management tool</h2>
            <h1 className={`text-color-15 font-bold font-6  flex relative z-10 
              ${breakpoint>1100 && 'text-[3rem] gap-[2rem]'}
              ${(breakpoint<=1100 && breakpoint>1000) && 'text-[2.75rem] gap-[1rem]'}
              ${(breakpoint<=1000 && breakpoint>0) && 'text-[2.5rem] gap-[1rem]'}
              `}>Why <span className=' text-color-2'>We are</span> </h1>
            <h1 className={`text-color-15 font-bold font-6
               ${breakpoint>1100 && 'text-[3rem]'}
               ${(breakpoint<=1100 && breakpoint>1000) && 'text-[2.75rem]'}
               ${(breakpoint<=1000 && breakpoint>0) && 'text-[2.5rem]'}
              `}> better from others </h1>
            <h2 className={`text-color-12 font-5 
              ${breakpoint>1100 && 'text-[1.125rem]'}
              ${(breakpoint<=1100 && breakpoint>1000)&& 'text-[1rem]'}
              ${(breakpoint<=1000 && breakpoint>0)&& 'text-[.875rem]'}
              ${(breakpoint<=900 && breakpoint>700) && 'w-[70%] '}
              `}>Powerful project management tools for your companies of all sizes.</h2>
          </div>


          <div className={`flex 
          ${breakpoint<=600 ?'gap-[.5rem] flex-col items-start':'items-center gap-[1rem]'}
            `}>
            <button className='py-[.5rem] px-[1rem] text-[.75rem] rounded-[10px] gradient-1 text-[#ffffff] font-semibold font-6'>
              Get Started For Free
            </button>

            <a href="" className='text-color-10 text-[.75rem] font-5 font-medium underline'>
              Get a Live Demo
            </a>
          </div>

          <div className={`flex 
            ${breakpoint<=1000 ? 'flex-col gap-[.5rem]':'gap-[1rem]'}
            `}>
            <div className='flex gap-[.5rem] items-center text-[.75rem] font-medium font-5'>
              <TickSvg />
              No credit card required
            </div>
            <div className='flex gap-[.5rem] items-center text-[.75rem] font-medium font-5'>
              <TickSvg />
              No need previous knowledge
            </div>
          </div>
        </div>


        <div className='w-[100%] flex items-center justify-center'>

         

          <img src={ImageWithBlob} alt="" className={`
            ${breakpoint>1000 && 'w-[80%] '}
            ${breakpoint===1000 && 'w-[90%]'}
            ${(breakpoint<=900 && breakpoint>600) && 'w-[60%]'}
            ${(breakpoint<=600) && 'w-[80%]'}
            `}/>

        </div>
      </div>

      <Products />


      <div className={`absolute  
        ${breakpoint>1430 && 'left-[15%] top-[18%]'}
        ${(breakpoint <=1430 && breakpoint>1400) && 'left-[15%] top-[17%]'}
        ${(breakpoint <=1400 && breakpoint>1320) && 'left-[16%] top-[16.5%]'}
        ${(breakpoint <=1320 && breakpoint>1240) && 'left-[17%] top-[15.5%]'}
        ${(breakpoint <=1240 && breakpoint>1180) && 'left-[18%] top-[14%]'}
        ${(breakpoint <=1180 && breakpoint>1120) && 'left-[19%] top-[13.5%]'}
        ${(breakpoint <=1120 && breakpoint>1100) && 'left-[20%] top-[12.5%]'}
        ${(breakpoint <=1100 && breakpoint>1050) && 'left-[19%] top-[12%]'}
        ${(breakpoint <=1050 && breakpoint>950) && 'left-[20%] top-[11.5%]'}
        ${(breakpoint <=950 && breakpoint>900) && 'left-[21%] top-[12%]'}
        ${(breakpoint <=900 && breakpoint>850) && 'left-[23%] top-[8%]'}
        ${(breakpoint <=850 && breakpoint>750)&& 'left-[24%] top-[8%]'}
        ${(breakpoint <=750 && breakpoint>700)&& 'left-[26%] top-[7.5%]'}
        ${(breakpoint <=700 && breakpoint>650)&& 'left-[29%] top-[7%]'}
        ${(breakpoint <=650 && breakpoint>600)&& 'left-[31%] top-[7.5%]'}
        ${(breakpoint <=600 && breakpoint>550)&& 'left-[29%] top-[5%]'}
        ${(breakpoint <=550 && breakpoint>500)&& 'left-[31%] top-[5%]'}
        ${(breakpoint <=500 && breakpoint>0)&& 'left-[33%] top-[4.5%]'}
        
        `}>
        <Ellipse1 className={'absolute'} 
        width={
          (breakpoint<=1100 && breakpoint>950) && '190'||
          (breakpoint<=950) && '170'
        }
        
        />
        <Ellipse2 className='absolute'
         width={
          (breakpoint<=1100 && breakpoint>950) && '190'||
          (breakpoint<=950) && '170'
        }
        
        />
      </div>
      <SettingsIcon className={`absolute
        ${breakpoint>1320 && 'right-[40%] top-[5%] '}
        ${(breakpoint <=1320 && breakpoint>1240) && 'right-[42%] top-[5%] '}
        ${(breakpoint <=1240 && breakpoint>1180) && 'right-[43%] top-[5%] '}
        ${(breakpoint <=1180 && breakpoint>1100) && 'right-[44%] top-[5%] '}
        ${(breakpoint <=1100 && breakpoint>1000) && 'right-[45%] top-[5%] '}
        ${(breakpoint <=1000 && breakpoint>850) && 'right-[40%] top-[5%] '}
        ${(breakpoint <=850 && breakpoint>700) && 'right-[35%] top-[6%]'}
        ${(breakpoint <=700 && breakpoint>600) && 'right-[10%] top-[8%]'}
        ${(breakpoint <=600 && breakpoint>550) && 'right-[5%] top-[8%]'}
        ${(breakpoint <=550 && breakpoint>0) && 'right-[0%] top-[5%]'}
        
        `}
        
        width={
          (breakpoint>1320 && '196')||
          (breakpoint<=1320 && breakpoint>1000)&&'156'|| 
          (breakpoint<=1000 && breakpoint>0)&&'126' 
        }
        />
      <StarComponent className={`absolute 
         ${breakpoint>1320 && 'right-[40%] top-[25%]'}
        ${(breakpoint <=1320 && breakpoint>1240) && 'right-[42%] top-[25%]'}
        ${(breakpoint <=1240 && breakpoint>1180) && 'right-[41%] top-[25%]'}
        ${(breakpoint <=1180 && breakpoint>1100) && 'right-[41%] top-[25%]'}
        ${(breakpoint <=1100 && breakpoint>900) && 'right-[41%] top-[25%] '}
        ${(breakpoint <=900 && breakpoint>700) && 'right-[65%] top-[40%] '}
        ${(breakpoint <=700 && breakpoint>550) && 'right-[62%] top-[33%] '}
        ${(breakpoint <=550 && breakpoint>500) && 'right-[64%] top-[35%] '}
        ${(breakpoint <=500 && breakpoint>0) && 'right-[64%] top-[30%] '}
        `} />
      <EarningComponents className={`absolute  
        ${breakpoint>900 && 'right-[4%] top-[5%]'}
        ${(breakpoint<=900 && breakpoint>700) && 'right-[4%] top-[10%]'}
        ${(breakpoint<=700 && breakpoint>650) && 'right-[10%] top-[20%]'}
        ${(breakpoint<=650 && breakpoint>0) && 'right-[5%] top-[20%]'}
        `} />


      <DailySalesComponents className={`absolute top-[38%] 
        ${breakpoint>1320 && 'top-[38%] right-[14%]'}
        ${(breakpoint <=1320 && breakpoint>1240) && 'top-[36%] right-[14%]'}
        ${(breakpoint <=1240 && breakpoint>1180) && 'top-[35%] right-[14%]'}
        ${(breakpoint <=1180 && breakpoint>1100) && 'top-[34%] right-[14%]'}
        ${(breakpoint <=1100 && breakpoint>900) && 'top-[33%] right-[14%]'}
        ${(breakpoint <=900 && breakpoint>850) && 'top-[47%] right-[28%]'}
        ${(breakpoint <=850 && breakpoint>800) && 'top-[45%] right-[28%]'}
        ${(breakpoint <=800 && breakpoint>700) && 'top-[42%] right-[28%]'}
        ${(breakpoint <=700 && breakpoint>600) && 'top-[38%] right-[28%]'}
        ${(breakpoint <=600 && breakpoint>550) && 'top-[38%] right-[26%]'}
        ${(breakpoint <=550 && breakpoint>500) && 'top-[37%] right-[26%]'}
        ${(breakpoint <=500 && breakpoint>0) && 'top-[32.5%] right-[26%]'}
        `}/>

      <Particles
      className="absolute inset-0"
      quantity={500}
      ease={80}
      color={"black"}
      refresh
      />
    </div>

  )
}

export default Header