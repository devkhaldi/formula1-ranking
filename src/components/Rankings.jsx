import React, { useState } from "react"

const Rankings = () => {
  const [teams, setTeams] = useState(false)
  return (
    <div className='flex flex-col gap-[50px] mb-16'>
      <div className='flex justify-between'>
        <h1 className='text-4xl'>Rankings</h1>
        <div className='flex gap-2'>
          <span class='font-normal'>Teams</span>
          <button
            onClick={e => setTeams(!teams)}
            className='w-12 h-6 block border-[4px] border-[#FF0100] rounded-3xl'>
            <div
              className={`block h-3 w-3 rounded-full bg-[#FF0100] transition-all duration-300 ${
                teams ? "translate-x-6" : "translate-x-1"
              } `}></div>
          </button>
        </div>
      </div>
      <div>
        <table className='border-separate border-spacing-y-1'>
          <thead className='bg-white'>
            <th className='py-6 px-5 w-[355px] text-left rounded-tl-[10px]'>
              Position
            </th>
            <th className='py-6 px-5 w-[355px] text-left'>Name</th>
            <th className='py-6 px-5 w-[355px] text-left'>Logo</th>
            <th className='py-6 px-5 w-[355px] text-left rounded-tr-[10px]'>
              Points
            </th>
          </thead>
          <tr className='bg-white'>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-6 px-5 rounded-bl-[10px]'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5'>-</td>
            <td className='py-6 px-5 rounded-br-[10px]'>-</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Rankings
