import React, { useState } from 'react'
import DataCard from './DataCard';

export default function Trains() {
    const [trainData,setTrainData] = useState([]);

  return (
    <>
      <nav className='flex sm:flex-row flex-col justify-between m-5 p-5 sm:text-xl text-lg font-serif '>
        <a>Home</a>
        <a>Book tickets</a>
        <a>Travel advisory</a>
        <a>Others</a>
      <div>
        {
            trainData.map((train)=> {return <DataCard name={train.name}  number={train.number} delayedby={train.delayedby } price={train.price}/>})
        }
      </div>

      </nav>
    </>
  )
}
