import React from 'react'
import BarListe from './BarListe'
import { BarList } from '@tremor/react'
import BarChartItem from './BarChartItem'


function RightColomn() {
  return (
    <div className='p-2'>
      <BarListe />
      <BarChartItem />
    </div>
  )
}

export default RightColomn
