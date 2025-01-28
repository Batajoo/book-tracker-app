import React from 'react'

function StatisticsCard({headingName, value}) {
  return (
    <li className='p-5 border rounded-lg my-5 flex flex-col gap-3 shadow-md dark:bg-white'>
        <h2 className='font-bold text-lg'>{headingName}</h2>
        <span className='text-blue-500 text-2xl font-bold'>{value}</span>
    </li>
  )
}

export default StatisticsCard