import React from "react";
import HeroImg from "../assets/sttang.jpeg";
import { TypeAnimation } from 'react-type-animation';
import{ FaFacebook, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

 
const Hero = () => {
const [textColor, setTextColor] = React.useState('red');
  return (
    <section className=" bg-cyan-500 mt-16 md:mt-24 px-5 text-white py-10 md:py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
         
        <div className="hero-info pb-5 md:pb-0">
         {/* <div
          className="font-serif text-2xl md:text-2xl"
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation
        sequence={[
          'WELCOME TO',
          800,
          () => setTextColor('black'),
          'WELCOME TO CEKES',
          800,
          () => setTextColor('deeppink'),
          'WELCOME TO CKS E-SPORT',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
    <button 
    className="bg-gray-800 rounded-full p-2 mt-5"
      onClick={() => {
        const items = [
          'blue',
          'green',
          'purple',
          'pink',
          'brown',
          'darkmagenta',
          'darksalmon',
          'dodgerblue',
          'firebrick',
          'darkviolet',
        ];
        setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
      }}
    >
      Change Color
    </button>*/}
          <h1 className="text-gray-900 text-4xl lg:text-6xl font-serif">
            WELCOME <span className="animate-pulse text-red-500">TO</span><br />
            <span className="font-bold animate-pulse text-yellow-600 text-4xl ">
             CKS </span>
             E-SPORT
          </h1>

          {/*<p className="py-5">
            website ini di buat untuk membuat anda senang walaupun nyata nya hatiku sedang tidak bahagia
          </p>*/}
          <div className="flex z-0 shadow-none gap-5 animate-bounce mt-5 mb-3  cursor-pointer">

            <FaYoutube className="text-3xl text-red-600"/>

            <FaInstagram className="text-3xl text-pink-600"/>


            <FaTiktok className="text-3xl text-gray-800"/>

            <FaFacebook className="text-3xl text-blue-800"/>

          </div>
          </div>
        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding games"            
            className="rounded-t-full ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;