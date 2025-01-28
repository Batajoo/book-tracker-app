import React from 'react'
import { StatisticsCard } from '../../components'
import { readingStatisticsData } from '../../constants'

function Summary() {
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