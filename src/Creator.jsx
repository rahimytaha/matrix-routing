import React from 'react'
import Provider from './Provider'

export default function Creator({data,lastsDistances}) {
    // console.log(data)
  return (
    <div>
      {data.id +lastsDistances}
      <Provider data={data.child} />
    </div>
  )
}
