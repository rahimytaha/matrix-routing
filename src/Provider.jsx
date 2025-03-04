import React from 'react'
import Creator from './Creator'

export default function Provider({data}) {
  return (
    <div className='line'>{data.map(el=><Creator lastsDistances={0} data={el}/>)}</div>
  )
}
