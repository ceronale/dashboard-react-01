import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-44 rounded-xl w-full lg: p-8 pt-9 my-3">
            <div className='flex justify-between items-center'>
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
              </div>
            </div>
            <div className='mt-6'>
              <Button
                color="white"
                bgColor={currentColor}
                text="Download"
                borderRadius="10px" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-3">
          {earningData.map((item) =>
            <div key={item.title}
              className="bg-white
            dark:text-gray-200 dark:bg-secondary-dark-bg 
              md:w-full p-4 pt-9 rounded-2xl"
            >
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white
            dark:text-gray-200 dark:bg-secondary-dark-bg 
              md:w-full p-4 pt-9 rounded-2xl">
            <div>
              <p>
                <span className="text-3xl font-semibold">$93,438</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                  23%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Budget</p>
            </div>
            <div className="mt-8">
              <p className="text-3xl font-semibold">$48,487</p>

              <p className="text-gray-500 mt-1">Expensee</p>
            </div>

            <div className="mt-5">
              <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor}/>
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor={currentColor}
                text="Download Report"
                borderRadius="10px"
              />
            </div>

          </div>
          <div className="bg-white
            dark:text-gray-200 dark:bg-secondary-dark-bg 
              md:w-full p-4 pt-9 rounded-2xl">
            <div>
              <Stacked width="auto" height="auto" />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Ecommerce