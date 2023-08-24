import React, { useState } from "react"

const seasonsData = [
  { id: 1, value: "2012" },
  { id: 2, value: "2013" },
  { id: 3, value: "2014" },
  { id: 4, value: "2015" },
  { id: 5, value: "2016" },
  { id: 6, value: "2017" },
  { id: 7, value: "2018" },
  { id: 8, value: "2019" },
  { id: 9, value: "2020" },
  { id: 10, value: "2021" },
  { id: 11, value: "2022" },
]

const Seasons = () => {
  const [active, setSctive] = useState("2017")
  return (
    <section className='flex flex-col gap-[50px]'>
      <div>
        <h1 className='text-4xl'>Seasons</h1>
      </div>
      <div className='flex gap-8'>
        {seasonsData.map(({ id, value }) => (
          <button
            onClick={e => setSctive(value)}
            className={`bg-white w-[100px] h-[60px] rounded-lg ${
              active === value &&
              "border-[4px] border-[#FF0100] shadow-[0_3px_30px_0_#ff010033]"
            }`}
            key={id}>
            {value}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Seasons
