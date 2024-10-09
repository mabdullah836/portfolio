"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
// React
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col  justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex gap-10">
        <div className="w-[700px] p-14 mt-5 text-center ">
          <h1 className="text-5xl mt-9 md:text-5xl font-semibold">Hello There! </h1>

          <h2 className="text-5xl md:text-5xl font-semibold mt-5">
            I'M <span className="text-pink-500"> Muhammad Abdullah</span> 
          </h2>

          <p className="text-lg md:text-lg mt-5">
            
          As a full-stack developer, I specialize in crafting fully functional websites and applications using the MERN stack. Let’s collaborate to turn your vision into a stunning reality!
          </p>
        </div>
       <motion.div
          className="w-[400px] justify-center items-center h-[300px] mt-10 hidden lg:block"
          animate={{ y: [-30, 0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut", // Smooth easing for the animation
          }}
        >
          <img src="/home.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
