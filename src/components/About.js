import AboutImg from '../Images/About_Img.png'
import { Link } from 'react-router-dom';

function About()
{
    return(
        <div className="flex max-w-[1350px] mx-auto justify-around items-center" id="about">
            <div className="basis-[45%]">
                <img src={AboutImg}/>
            </div>
            <div className="basis-[45%]">
                <h2 className="text-xl text-[#fc3b00] font-extrabold">WE ARE INNOVATOR</h2>
                <h1 style={{fontSize:"9vh"}} className='font-extrabold'>We set out to build a better<span className='text-gray-500'> way to invest on your body</span>
                </h1>
                <p className='text-xl my-6'>Together - The Team of <i>Fitness - Plus</i> are determined to change the outlook of <span className='font-extrabold text-[#fc3b00]' style={{fontSize:"5vh",fontWeight:"bold"}}>+1Cr.</span> people in India to get back to there ever best fitness level. </p>
                <Link to="/contact" style={{textDecoration:"none",color:"black"}}><button className='px-6 py-3 mt-7 bg-[#fc3b00] text-white rounded-md text-md font-semibold' style={{letterSpacing:"1px"}}>Know More...</button></Link>
            </div>
        </div>
    )
}

export default About;