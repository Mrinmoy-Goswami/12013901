import React from 'react'

export default function DataCard({name,number,departure,delayedby,price,seats}) {
  return (
    <div className='flex flex-col '>
      <p>Train Name : {name}</p>
      <p>Train number : {number}</p>
      <p>Departure time: {departure}</p>
      <p>Delayed BY: {delayedby}</p>
      <p>Price: {price}</p>

    </div>
  )
}
