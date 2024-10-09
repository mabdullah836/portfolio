
"use client"

import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { Projects } from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'
const Home = () => {

  const hrClassName = 'w-[1100px] m-auto text-gray-400'
  
  return (
    <div
      className={ `min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] `}
    >
      <HeroSection/>

      <hr  className={hrClassName}/>

       <About/>
      <hr  className={hrClassName}/>
       <Experience/>
      <hr  className={hrClassName}/>
       <Skills/>
      <hr  className={hrClassName}/>
       <Projects/>
      <hr  className={hrClassName}/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home