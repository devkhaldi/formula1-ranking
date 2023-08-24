import React from "react"
import img from "../img/image 3.png"

const Header = () => {
  return (
    <div className='flex bg-[#2D2D2D] text-white'>
      <div>
        <span>Formula 1</span>
        <span>Rankings</span>
      </div>
      <div>
        <img src={img} alt='img 3' />
      </div>
    </div>
  )
}

export default Header
