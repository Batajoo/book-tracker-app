import React from 'react'
import { StatisticsCard } from '../../components'
import { useAddButtonContext } from '../../context';

function Summary() {
  const {bookData} = useAddButtonContext();

  const readingStatisticsData = [
    {
        name: "Total",
        value: bookData.length
    },
    {
        name: "Reading",
        value: bookData.reduce((total, bookVal)=>bookVal.status === "Currently Reading" ? ++total : total,0)
    },
    {
        name: "Completed",
        value: bookData.reduce((total, bookVal)=>bookVal.status === "Completed" ? ++total : total,0)
    },
    {
        name: "To Read",
        value: bookData.reduce((total, bookVal)=>bookVal.status === "To Read" ? ++total : total,0)
    }
]

  return (
    <section className='m-10'>
      <h1 className='text-3xl font-bold mb-3 dark:text-white'>Reading Statistics</h1>
      <ul>
        {readingStatisticsData.map(({name, value})=> (
          <StatisticsCard headingName={name} value={value}/>
        ))}
      </ul>
    </section>
  )
}

export default Summary