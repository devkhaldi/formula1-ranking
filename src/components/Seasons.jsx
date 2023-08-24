import React from "react"

const seasonsData = [
  { id: 1, value: "2012" },
  { id: 2, value: "2012" },
  { id: 3, value: "2012" },
  { id: 4, value: "2012" },
  { id: 5, value: "2012" },
  { id: 6, value: "2012" },
  { id: 7, value: "2012" },
  { id: 8, value: "2012" },
  { id: 0, value: "2012" },
]

const Seasons = () => {
  return (
    <section className=''>
      <div>
        <h1>Seasons</h1>
      </div>
      <div className='flex gap-8'>
        {seasonsData.map(({ id, value }) => (
          <button key={id}>{value}</button>
        ))}
      </div>
    </section>
  )
}

export default Seasons
