import React from "react";
import HeroImg from "../assets/sttang.jpeg";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-cyan-500 mt-16 md:mt-24 px-5 text-white py-16 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-gray-900 text-4xl lg:text-6xl font-serif">
            WELCOME <span className="text-red-500">TO</span><br />
            <span className=" text-yellow-500 text-4xl text-accent">
            CKS</span>
             E-SPORT
          </h1>

          <p className="py-5">
            website ini di buat untuk membuat anda senang walaupun nyata nya hatiku sedang tidak bahagia
          </p>
          </div>
        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] rounded-t-full ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;