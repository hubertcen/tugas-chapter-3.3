"use client";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1440px] w-full h-full mx-auto pt-20 justify-center items-center">
        <div>
          <p className="uppercase text-lg tracking-widest text-gray-600">
            Welcome
          </p>
          <h1 className="py-4 text-gray-600 text-4xl">
            Hello, I'm <span className="text-[#61bcba]">Hubert Cen</span>
          </h1>
          <h1 className="py-2 text-gray-600 text-4xl">
            A Front-End Web Developer
          </h1>
          <div className="flex justify-between items-center max-w-[300px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:bg-rose-500  ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:bg-rose-500  ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:bg-rose-500  ease-in duration-300">
              <FaInstagram />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:bg-rose-500  ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
