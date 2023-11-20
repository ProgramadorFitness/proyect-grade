import { Link } from "react-scroll";
import {FaTimes, FaBars} from "react-icons/fa";
import Image from '../assets/icono.png';
import { useState } from "react";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    
    const  content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 rigth-0 bg-slate-300 transition">
            <ul className="text-center text-xl p-20"> 
                    <li className="my-4 py-4 border-b bg-slate-300 hover:rounded">
                        <Link spy={true} smooth={true} to ="/" >Home</Link>
                    </li>                
                    <li className="my-4 py-4 border-b bg-slate-300 hover:rounded">
                        <Link spy={true} smooth={true} to ="/wallet">Wallets</Link>
                    </li>
                    <li className="my-4 py-4 border-b bg-slate-300 hover:rounded">
                        <Link spy={true} smooth={true} to ="/loan" >Loans</Link>
                    </li>                
                    <li className="my-4 py-4 border-b bg-slate-300 hover:rounded">
                        <Link spy={true} smooth={true} to ="/dashboard">Dashboard</Link>
                    </li>
            </ul>
        </div>
    </>

  return (
    <nav>
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
            < div className="flex items-left flex-1">
                <span className="text-3xl font-bold">
                    INVER CREDITOS
                </span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <li className="hover:text-fuchsia-600 transition bg-slate-300  hover:border-fuchsia-600 cursor-pointer">
                        <Link spy={true} smooth={true} to ="/" >Home</Link>
                    </li>                
                    <li className="hover:text-fuchsia-600 transition bg-slate-300 hover:border-fuchsia-600 cursor-pointer">
                        <Link spy={true} smooth={true} to ="/wallet">Wallets</Link>
                    </li>
                    <li className="hover:text-fuchsia-600 transition bg-slate-300  hover:border-fuchsia-600 cursor-pointer">
                        <Link spy={true} smooth={true} to ="/loan" >Loans</Link>
                    </li>                
                    <li className="hover:text-fuchsia-600 transition bg-slate-300  hover:border-fuchsia-600 cursor-pointer">
                        <Link spy={true} smooth={true} to ="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>

            <button className="block sm:hidden transtion" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </button>
        </div>
    </nav>

  );
}

export default Nav;