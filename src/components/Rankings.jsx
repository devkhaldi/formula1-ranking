import React, { useEffect, useState } from "react"
import ArrowBottom from "./icons/ArrowBottom"
import Ascending from "./icons/Ascending"
import Descending from "./icons/Descending"
import CheckIcon from "./icons/CheckIcon"

const RankingCard = () => {
  return (
    <div className='absolute top-14 bg-[#EFEFEF] p-2.5'>
      <div className='flex flex-col bg-white rounded w-[140px]'>
        <div className='flex justify-between items-center px-4 py-2.5 cursor-pointer'>
          <span className='text-xs'>Ascending</span>
          <Ascending className='w-4 h-4' />
        </div>
        <div className='flex justify-between px-4 py-2.5 cursor-pointer'>
          <span className='text-xs'>Descending</span>
          <Descending className='w-4 h-4' />
        </div>
      </div>
    </div>
  )
}

const NamesCard = () => {
  const [names, setNames] = useState([
    { id: 0, name: "Jamie", checked: true },
    { id: 1, name: "Natalie", checked: false },
    { id: 2, name: "Marta", checked: false },
    { id: 3, name: "Annie", checked: true },
    { id: 4, name: "Mila", checked: false },
  ])

  const getNewNames = id => {
    const newNames = [...names]
    newNames[id].checked = !newNames[id].checked
    setNames([...newNames])
  }

  const clearAll = () => {
    const newNames = [...names]
    newNames.forEach(element => {
      element.checked = false
    })
    setNames([...newNames])
  }

  return (
    <div className='absolute top-14 flex flex-col gap-2 bg-[#EFEFEF] p-2.5'>
      <div className='flex flex-col bg-white rounded w-[140px]'>
        <div>
          {names.map(({ id, name, checked }) => (
            <div
              key={id}
              className='flex justify-between items-center px-4 py-2.5'>
              <span className='text-xs'>{name}</span>
              <div
                onClick={() => getNewNames(id)}
                className={`flex items-center justify-center h-3.5 w-3.5 cursor-pointer ${
                  checked ? "bg-[#FF0100]" : "border border-[#131212]"
                }`}>
                {checked && <CheckIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className='text-xs' onClick={clearAll}>
          Clear all
        </button>
      </div>
    </div>
  )
}

const Rankings = () => {
  const [teams, setTeams] = useState(false)
  const [nameCard, setNameCard] = useState(true)
  const [positionCard, setPositionCard] = useState(true)
  const [pointsCard, setPointsCard] = useState(true)

  const [rankingsByDrivers, setRankingsByDrivers] = useState(
    getRankingsByDrivers.response
  )
  const [rankingsByTeams, setRankingsByTeams] = useState(
    getRankingsByTeams.response
  )

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
            <th className='relative py-6 px-5 w-[355px] text-left rounded-tl-[10px]'>
              <div
                className='flex gap-2.5 cursor-pointer'
                onClick={e => setPositionCard(!positionCard)}>
                <span>Position</span>
                <ArrowBottom />
              </div>
              {positionCard && <RankingCard />}
            </th>
            <th className='relative py-6 px-5 w-[355px] text-left'>
              <div
                className='flex gap-2.5 cursor-pointer'
                onClick={e => setNameCard(!nameCard)}>
                <span>Name</span>
                <ArrowBottom />
              </div>
              {nameCard && <NamesCard />}
            </th>
            <th className='py-6 px-5 w-[355px] text-left'>
              {teams ? "Logo" : "Image"}
            </th>
            <th className='relative py-6 px-5 w-[355px] text-left rounded-tr-[10px]'>
              <div
                className='flex gap-2.5 cursor-pointer'
                onClick={e => setPointsCard(!pointsCard)}>
                <span>Points</span>
                <ArrowBottom />
              </div>
              {pointsCard && <RankingCard />}
            </th>
          </thead>
          <tbody>
            {teams
              ? rankingsByTeams.map(
                  ({ position, team: { name, logo }, points }) => (
                    <tr className='bg-white'>
                      <td className='py-6 px-5'>{position}</td>
                      <td className='py-6 px-5'>{name}</td>
                      <td className='py-1 px-5'>
                        <div className='flex flex-col justify-center h-12 w-12 bg-slate-200 rounded-full overflow-hidden'>
                          <img src={logo} alt='logo' />
                        </div>
                      </td>
                      <td className='py-6 px-5'>{points}</td>
                    </tr>
                  )
                )
              : rankingsByDrivers.map(
                  ({ position, driver: { name, image }, points }) => (
                    <tr className='bg-white'>
                      <td className='py-6 px-5'>{position}</td>
                      <td className='py-6 px-5'>{name}</td>
                      <td className='py-1 px-5'>
                        <div className='flex flex-col justify-center h-12 w-12 bg-slate-200 rounded-full overflow-hidden'>
                          <img src={image} alt='driver image' />
                        </div>
                      </td>
                      <td className='py-6 px-5'>{points}</td>
                    </tr>
                  )
                )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const getRankingsByTeams = {
  get: "rankings",
  parameters: {
    season: "2019",
  },
  errors: [],
  results: 10,
  response: [
    {
      position: 1,
      team: {
        id: 5,
        name: "Mercedes-AMG Petronas",
        logo: "https://media.api-sports.io/formula-1/teams/5.png",
      },
      points: 739,
      season: 2019,
    },
    {
      position: 2,
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media.api-sports.io/formula-1/teams/3.png",
      },
      points: 504,
      season: 2019,
    },
    {
      position: 3,
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media.api-sports.io/formula-1/teams/1.png",
      },
      points: 417,
      season: 2019,
    },
    {
      position: 4,
      team: {
        id: 2,
        name: "McLaren Racing",
        logo: "https://media.api-sports.io/formula-1/teams/2.png",
      },
      points: 145,
      season: 2019,
    },
    {
      position: 5,
      team: {
        id: 13,
        name: "Renault F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/13.png",
      },
      points: 91,
      season: 2019,
    },
    {
      position: 6,
      team: {
        id: 7,
        name: "Scuderia Toro Rosso",
        logo: "https://media.api-sports.io/formula-1/teams/7.png",
      },
      points: 85,
      season: 2019,
    },
    {
      position: 7,
      team: {
        id: 17,
        name: "Racing Point F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/17.png",
      },
      points: 73,
      season: 2019,
    },
    {
      position: 8,
      team: {
        id: 18,
        name: "Alfa Romeo",
        logo: "https://media.api-sports.io/formula-1/teams/18.png",
      },
      points: 57,
      season: 2019,
    },
    {
      position: 9,
      team: {
        id: 14,
        name: "Haas F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/14.png",
      },
      points: 28,
      season: 2019,
    },
    {
      position: 10,
      team: {
        id: 12,
        name: "Williams F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/12.png",
      },
      points: 1,
      season: 2019,
    },
  ],
}

const getRankingsByDrivers = {
  get: "rankings",
  parameters: {
    season: "2019",
  },
  errors: [],
  results: 20,
  response: [
    {
      position: 1,
      driver: {
        id: 20,
        name: "Lewis Hamilton",
        abbr: "HAM",
        number: 44,
        image: "https://media.api-sports.io/formula-1/drivers/20.png",
      },
      team: {
        id: 5,
        name: "Mercedes-AMG Petronas",
        logo: "https://media.api-sports.io/formula-1/teams/5.png",
      },
      points: 413,
      wins: 11,
      behind: 0,
      season: 2019,
    },
    {
      position: 2,
      driver: {
        id: 5,
        name: "Valtteri Bottas",
        abbr: "BOT",
        number: 77,
        image: "https://media.api-sports.io/formula-1/drivers/5.png",
      },
      team: {
        id: 5,
        name: "Mercedes-AMG Petronas",
        logo: "https://media.api-sports.io/formula-1/teams/5.png",
      },
      points: 326,
      wins: 3,
      behind: 87,
      season: 2019,
    },
    {
      position: 3,
      driver: {
        id: 25,
        name: "Max Verstappen",
        abbr: "VER",
        number: 1,
        image: "https://media.api-sports.io/formula-1/drivers/25.png",
      },
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media.api-sports.io/formula-1/teams/1.png",
      },
      points: 278,
      wins: 3,
      behind: 135,
      season: 2019,
    },
    {
      position: 4,
      driver: {
        id: 34,
        name: "Charles Leclerc",
        abbr: "LEC",
        number: 16,
        image: "https://media.api-sports.io/formula-1/drivers/34.png",
      },
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media.api-sports.io/formula-1/teams/3.png",
      },
      points: 264,
      wins: 2,
      behind: 149,
      season: 2019,
    },
    {
      position: 5,
      driver: {
        id: 19,
        name: "Sebastian Vettel",
        abbr: "VET",
        number: 5,
        image: "https://media.api-sports.io/formula-1/drivers/19.png",
      },
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media.api-sports.io/formula-1/teams/3.png",
      },
      points: 240,
      wins: 1,
      behind: 173,
      season: 2019,
    },
    {
      position: 6,
      driver: {
        id: 24,
        name: "Carlos Sainz Jr",
        abbr: "SAI",
        number: 55,
        image: "https://media.api-sports.io/formula-1/drivers/24.png",
      },
      team: {
        id: 2,
        name: "McLaren Racing",
        logo: "https://media.api-sports.io/formula-1/teams/2.png",
      },
      points: 96,
      wins: 0,
      behind: 317,
      season: 2019,
    },
    {
      position: 7,
      driver: {
        id: 36,
        name: "Pierre Gasly",
        abbr: "GAS",
        number: 10,
        image: "https://media.api-sports.io/formula-1/drivers/36.png",
      },
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media.api-sports.io/formula-1/teams/1.png",
      },
      points: 95,
      wins: 0,
      behind: 318,
      season: 2019,
    },
    {
      position: 8,
      driver: {
        id: 50,
        name: "Alexander Albon",
        abbr: "ALB",
        number: 23,
        image: "https://media.api-sports.io/formula-1/drivers/50.png",
      },
      team: {
        id: 7,
        name: "Scuderia AlphaTauri Honda",
        logo: "https://media.api-sports.io/formula-1/teams/7.png",
      },
      points: 92,
      wins: 0,
      behind: 321,
      season: 2019,
    },
    {
      position: 9,
      driver: {
        id: 14,
        name: "Daniel Ricciardo",
        abbr: "RIC",
        number: 3,
        image: "https://media.api-sports.io/formula-1/drivers/14.png",
      },
      team: {
        id: 13,
        name: "Alpine F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/13.png",
      },
      points: 54,
      wins: 0,
      behind: 359,
      season: 2019,
    },
    {
      position: 10,
      driver: {
        id: 10,
        name: "Sergio Perez",
        abbr: "PER",
        number: 11,
        image: "https://media.api-sports.io/formula-1/drivers/10.png",
      },
      team: {
        id: 17,
        name: "Aston Martin F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/17.png",
      },
      points: 52,
      wins: 0,
      behind: 361,
      season: 2019,
    },
    {
      position: 11,
      driver: {
        id: 49,
        name: "Lando Norris",
        abbr: "NOR",
        number: 4,
        image: "https://media.api-sports.io/formula-1/drivers/49.png",
      },
      team: {
        id: 2,
        name: "McLaren Racing",
        logo: "https://media.api-sports.io/formula-1/teams/2.png",
      },
      points: 49,
      wins: 0,
      behind: 364,
      season: 2019,
    },
    {
      position: 12,
      driver: {
        id: 7,
        name: "Kimi Raikkonen",
        abbr: "RAI",
        number: 7,
        image: "https://media.api-sports.io/formula-1/drivers/7.png",
      },
      team: {
        id: 18,
        name: "Alfa Romeo",
        logo: "https://media.api-sports.io/formula-1/teams/18.png",
      },
      points: 43,
      wins: 0,
      behind: 370,
      season: 2019,
    },
    {
      position: 13,
      driver: {
        id: 9,
        name: "Daniil Kvyat",
        abbr: "KVY",
        number: 26,
        image: "https://media.api-sports.io/formula-1/drivers/9.png",
      },
      team: {
        id: 7,
        name: "Scuderia AlphaTauri Honda",
        logo: "https://media.api-sports.io/formula-1/teams/7.png",
      },
      points: 37,
      wins: 0,
      behind: 376,
      season: 2019,
    },
    {
      position: 14,
      driver: {
        id: 6,
        name: "Nico Hulkenberg",
        abbr: "HUL",
        number: 27,
        image: "https://media.api-sports.io/formula-1/drivers/6.png",
      },
      team: {
        id: 13,
        name: "Alpine F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/13.png",
      },
      points: 37,
      wins: 0,
      behind: 376,
      season: 2019,
    },
    {
      position: 15,
      driver: {
        id: 31,
        name: "Lance Stroll",
        abbr: "STR",
        number: 18,
        image: "https://media.api-sports.io/formula-1/drivers/31.png",
      },
      team: {
        id: 17,
        name: "Aston Martin F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/17.png",
      },
      points: 21,
      wins: 0,
      behind: 392,
      season: 2019,
    },
    {
      position: 16,
      driver: {
        id: 2,
        name: "Kevin Magnussen",
        abbr: "MAG",
        number: 20,
        image: "https://media.api-sports.io/formula-1/drivers/2.png",
      },
      team: {
        id: 14,
        name: "Haas F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/14.png",
      },
      points: 20,
      wins: 0,
      behind: 393,
      season: 2019,
    },
    {
      position: 17,
      driver: {
        id: 29,
        name: "Antonio Giovinazzi",
        abbr: "GIO",
        number: 99,
        image: "https://media.api-sports.io/formula-1/drivers/29.png",
      },
      team: {
        id: 18,
        name: "Alfa Romeo",
        logo: "https://media.api-sports.io/formula-1/teams/18.png",
      },
      points: 14,
      wins: 0,
      behind: 399,
      season: 2019,
    },
    {
      position: 18,
      driver: {
        id: 16,
        name: "Romain Grosjean",
        abbr: "GRO",
        number: 8,
        image: "https://media.api-sports.io/formula-1/drivers/16.png",
      },
      team: {
        id: 14,
        name: "Haas F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/14.png",
      },
      points: 8,
      wins: 0,
      behind: 405,
      season: 2019,
    },
    {
      position: 19,
      driver: {
        id: 52,
        name: "Robert Kubica",
        abbr: "KUB",
        number: 88,
        image: "https://media.api-sports.io/formula-1/drivers/52.png",
      },
      team: {
        id: 12,
        name: "Williams F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/12.png",
      },
      points: 1,
      wins: 0,
      behind: 412,
      season: 2019,
    },
    {
      position: 20,
      driver: {
        id: 51,
        name: "George Russell",
        abbr: "RUS",
        number: 63,
        image: "https://media.api-sports.io/formula-1/drivers/51.png",
      },
      team: {
        id: 12,
        name: "Williams F1 Team",
        logo: "https://media.api-sports.io/formula-1/teams/12.png",
      },
      points: null,
      wins: 0,
      behind: 413,
      season: 2019,
    },
  ],
}

export default Rankings
