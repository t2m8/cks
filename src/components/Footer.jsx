import { Outlet, Link } from "react-router-dom";
import{ FaFacebook, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer (){
  return(
    <div className="py-10 md:py-20 px-5">
    <div className="border p-5 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
      
      <div className="flex z-0 shadow-none gap-5 animate-bounce mt-5 mb-3  cursor-pointer">

            <FaYoutube className="text-3xl text-red-600"/>

            <FaInstagram className="text-3xl text-pink-600"/>


            <FaTiktok className="text-3xl text-gray-800"/>

            <FaFacebook className="text-3xl text-blue-800"/>

          </div>
      <div>
      © {new Date().getFullYear()} by t2m8
      © {new Date().getFullYear()} by t2m8
      © {new Date().getFullYear()} by t2m8
      © {new Date().getFullYear()} by t2m8
      © {new Date().getFullYear()} by t2m8
      </div>
    </div>
    </div>
    )
}