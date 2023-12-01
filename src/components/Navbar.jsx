import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logocks from '../assets/cks.svg'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { HiMiniSun } from "react-icons/hi2";


export default function NavBar(App) {
  const { darkMode, ToggleDarkMode } = App;
    const [navbar, setNavbar] = useState(false);
    
    return (
       <nav className="text-white bg-gray-900 fixed bsn left-0 right-0 top-0 w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
         <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            <a href="javascript:void(0)">
          <img 
          className="animate-bounce h-10 w-10 md:h-16 md:w-16"
          src={logocks} 
          alt="cks"/> 
            </a>
            <div className="ml-52 cursor-pointer md:hidden" onClick={App.ToggleDarkMode}>
             { App.darkMode ? <HiMiniSun className="text-yellow-500"/> : <IoMoonSharp/>}
            </div>
             <div className="md:hidden">
             <button
             className="p-2"
             onClick={() => setNavbar(!navbar)}>
           {navbar ? <IoClose/> : <FaBarsStaggered/>}
            </button>
                </div>
            </div>
        </div>
      <div>
  <div className={`flex-1 justify-self-center pb-2 mt-5 md:block md:pb-0 md:mt-0 ${  navbar ? "block" : "hidden" }`}>
    <ul className="items-center justify-center space-y-5 md:flex md:space-x-6 md:space-y-0">
        <li className="text-white hover:text-yellow-500">
          <Link to="/">Home</Link>
          </li>
        <li className="text-white hover:text-yellow-500">
          <Link to="/Quotes">Tim Quotes</Link>
          </li>
          <div className="hidden cursor-pointer md:inline-block" onClick={App.ToggleDarkMode}>
             { App.darkMode ? <HiMiniSun className="text-yellow-500"/> : <IoMoonSharp/>}
                   </div>
                 </ul>
               </div>
            </div>
          </div>
       <Outlet />
    </nav>
   );
};