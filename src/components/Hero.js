import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='max-w-[1350px] mx-auto flex flex-wrap-reverse justify-center mt-16 items-center bg-black py-6'>
        <div className="basis-[45%] sm:text-center md:text-start">
            <p className="text-white text-xl my-2">Sweat Today - Shine Tomorrow</p>
            <h2 className='md:text-8xl sm:text-3xl font-extrabold my-4 text-[#fc3b00]'>STRONGER <span style={{color:"transparent",WebkitTextStroke:"1px #fc3b00"}}>EVERYDAY</span> FITTER <span style={{color:"transparent",WebkitTextStroke:"1px #fc3b00"}}>FOREVER</span></h2>
            <p className='text-xl text-white my-2'>Where fitness meet motivation - every drop of sweat tells determination</p>
            <Link to="/workout" style={{textDecoration:"none",color:"black"}}><button className='px-6 py-3 bg-[#fc3b00] text-black rounded-xl mr-2 my-2'>Get Started</button></Link>
            <Link to="/workout" style={{textDecoration:"none",color:"black"}}><button className='px-6 py-3 border border-[#fc3b00] text-[#fc3b00] rounded-xl mx-2 my-2'>How it Work</button></Link>
        </div>
        <div className="basis-[43%]">
            <img src="https://i.pinimg.com/564x/1b/80/62/1b80620a35d2d07d19c1e6a775e42b0e.jpg" className='object-cover rounded-tl-full rounded-bl-full'/>
        </div>
    </div>
  )
}

export default Hero;