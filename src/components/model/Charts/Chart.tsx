
import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import ChartProps from '../../types/Chart/ChartProps';



const Chart: React.FC<ChartProps> = ({id,background,values,date,flag,heading,subHeading,textHeading}) => {


  const [chartHeight, setChartHeight] = useState('500px');



  useEffect(() => {
    const options = {
      xaxis: {
        categories: date,
        labels: {
          style: {
            fontFamily: "Rubik, sans-serif",
            cssClass: 'text-md font-normal fill-gray-500 flex dark:fill-gray-400',
            fontSize: '16px', 
          }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: "Rubik, sans-serif",
            cssClass: 'text-xl font-normal fill-gray-500 dark:fill-gray-400',
            fontSize: '16px', 
          },
          formatter: function(value: any) {
            return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
          }
        }
      },
      series: [

        {
          name: "Increase",
          data: values,
          color: "#046C4E",
          offsetY: -10,
        },

      ],
      chart: {
        
        height: chartHeight,
        
        type: "area",
        fontFamily: "Rubik, sans-serif",
        dropShadow: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },

        


      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
      },
    };
      
    if (!document.getElementById(id) || typeof ApexCharts === 'undefined') {
      return; 
    }

    const chart = new ApexCharts(document.getElementById(id), options);
    chart.render();


    const handleResize = () => {
      setChartHeight(window.innerWidth <= 762 ? '100%' : '500px');
    }

    window.addEventListener('resize',handleResize);

    return () => {
      chart.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [id, values, date, chartHeight]);
  
  
    return (
     
        <div className={`w-full mx-2 flex-1 ${background} rounded-lg shadow-md dark:bg-gray-800`}>

        <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">

        <div>
            <h2 className='flex gap-2 items-center'><img src={flag} className='w-5' 
            alt='country flag'
            />{heading}</h2>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                
            {subHeading.substring(0, 5)}
             <span className='text-gray-400'>{subHeading.substring(5)}</span>
                
                </h5>

            <p className="text-base font-normal text-gray-500 text-gray-400">{textHeading}</p>
        </div>

        <div
            className="flex items-center px-2.5 py-0.5 text-3xl font-semibold text-green-500 dark:text-green-500 text-center">
            23%
            <svg className="w-3 h-14 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
        </div>
        
    </div>
  
    <div id={id} className="px-2.5 py-4"></div>
    
  </div>
    )
}

export default Chart;