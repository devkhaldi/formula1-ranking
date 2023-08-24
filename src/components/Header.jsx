import React from "react"
import img from "../img/image 3.png"

const Header = () => {
  return (
    <div className='flex bg-[#2D2D2D] text-white'>
      <div className='py-32 pl-36 text-[116px] leading-[110%]'>
        <h1>Formula 1 Rankings</h1>
      </div>
      <div className='relative overflow-hidden'>
        <div className='-top-60 left-20 rounded-full h-[200%] w-[200%] bg-transparent absolute z-20 border-white border-[10px]'></div>
        <div className='-top-60 left-52 rounded-full h-[200%] w-[200%] bg-transparent absolute z-20 border-[#f00] border-[10px]'></div>
        <div className='hero-img-container-layer z-10 h-full w-[150%] absolute top-0 left-0'></div>
        <img src={img} className='object-cover h-full' alt='img 3' />
      </div>
    </div>
  )
}

export default Header
