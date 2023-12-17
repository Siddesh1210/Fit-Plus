import { Link } from 'react-router-dom';
import Logo from '../Images/LogoFooter.png'
function Footer()
{
    return(   
        <>
        <div className="max-w-[1350px] mx-auto flex justify-around flex-wrap md:flex-row sm:flex-col bg-[#fc3b00] mt-10" style={{padding:"50px 0px"}}>
            <div className="basis-[25%] px-2  mb-3 ">
                <img src={Logo} style={{width:"250px"}}/>
                <p className='text-justify text-md'>Regardless of what shape you now, after visiting NextGen you will be at top of your fitness level</p>
            </div>
            <div className="basis-[25%] md:pl-20 sm:pl-3 mb-3">
                <h1 className='text-2xl font-semibold'>Navigations</h1>
                <ul className='text-md' style={{cursor:"pointer"}}> 
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/#about"><li>About</li></Link>
                    <Link to="/workout"><li>Workout</li></Link>
                    <Link to="/workout"><li>Training</li></Link>
                </ul>
            </div>

            <div className="basis-[25%] px-2  mb-3">
                <h1 className='text-2xl font-semibold'>Contact</h1>
                <p className='text-black text-2xl' style={{cursor:"pointer"}}><i className="bi bi-twitter"></i> &nbsp; <i className="bi bi-instagram"></i> &nbsp; <i className="bi bi-envelope"></i> &nbsp; <i className="bi bi-whatsapp"></i></p>
                <p className='text-md text-justify'>Address : 1rst floor St Mount Building, Manickpur Vasai West, Mumbai, India</p>
            </div>


            <div className="basis-[25%] px-2 mb-3">
                <p className='text-xl font-semibold pb-3'>Subscribe our News-Letter</p>
                <form>
                <input type="email" className='max-w-[55%] py-2 px-3 rounded-md focus:border-green-300 focus:outline-none' placeholder='Enter your Email'/>
                <button className='bg-black text-[#fc3b00] text-lg w-[35%] px-4 py-2 border-none box-border rounded-lg mx-2' type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <h3 className='text-center text-xl py-2 bg-black text-orange-600'>Developed with <i className="bi bi-heart"></i> by <a href="https://www.linkedin.com/in/siddesh-jaiswal-3961a6223/" target="_blank">Siddesh Jaiswal</a></h3>
        </>
    )
}
 
export default Footer;