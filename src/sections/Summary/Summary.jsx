import React from 'react'
import { StatisticsCard } from '../../components'

function Summary() {
  let bookDataCurrent = [];
  if(localStorage.getItem("bookData")){
    bookDataCurrent = JSON.parse(localStorage.getItem("bookData"));
    console.log(bookDataCurrent);
  }

  const readingStatisticsData = [
    {
        name: "Total",
        value: bookDataCurrent.length
    },
    {
        name: "Reading",
        value: bookDataCurrent.reduce((total, bookVal)=>bookVal.status === "Currently Reading" ? ++total : total,0)
    },
    {
        name: "Completed",
        value: bookDataCurrent.reduce((total, bookVal)=>bookVal.status === "completed" ? ++total : total,0)
    },
    {
        name: "To Read",
        value: bookDataCurrent.reduce((total, bookVal)=>bookVal.status === "To Read" ? ++total : total,0)
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