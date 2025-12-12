'use client'

import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useRef, useEffect, useState } from "react"

gsap.registerPlugin(MorphSVGPlugin);

export default function Home() { 
  const [isOpen, setIsOpen] = useState(false)
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
    .addLabel("closed")

    .to("#envelopeTopPath", {
      duration: 0.8,
      morphSVG: "#envelopeTopPeakPath",
      ease: "power2.inOut",
    })
    .addLabel("peak")
    
    .to("#envelopeTopPath", {
      duration: 0.8,
      morphSVG: {
        shape: "#envelopeTopOpenPath",
        shapeIndex: 0,
      },
      ease: "power2.inOut",
    })
    
    .addLabel("open");

    
    
  }, [])
  
  useEffect(() => {
    console.log(isOpen)
  })

  return (
    <div className="w-full h-full flex items-center justify-center" >
      <div 
      onMouseEnter={(() => { tl.current?.tweenTo("peak") })} 
      onMouseLeave={() => { tl.current?.tweenTo("closed") }} 
      onClick={() => { 
        if (isOpen) {tl.current?.tweenTo("closed"); setIsOpen(false) } 
        else {tl.current?.tweenTo("open"); setIsOpen(true) };  }}


      className="relative w-191 h-170 " id="container">

        <svg className="absolute z-100 bottom-0" id="envelope-top" width="764" height="679" viewBox="0 0 764 679" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="envelopeTopPath" d="M0.5 274V325.775L381.75 600L763 325.775V274H381.75H0.5Z" fill="white" stroke="black"/>
        </svg>

        <svg className="absolute hidden z-100" id="envelope-top-peak" width="764" height="679" viewBox="0 0 764 679" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="envelopeTopPeakPath" d="M0.5 274V325.775L381.75 495.5L763 325.775V274H381.75H0.5Z" fill="white" stroke="black"/>
        </svg>

        <svg className="absolute hidden z-10 bottom-0" id="envelope-top-opened" width="764" height="679" viewBox="0 0 764 679" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="envelopeTopOpenPath" d="M0.5 274.5V222.725L381.75 53L763 222.725V274.5H381.75H0.5Z" fill="white" stroke="black"/>
        </svg>

        <div className="bg-amber-100 absolute z-5 right-[20%] bottom-[20%] h-[200px] w-[500px]" > 
          <h1>hello</h1>
        </div>
        
        <svg className="absolute z-10 bottom-0" id="envelope-base"
         width="764" height="360" viewBox="0 0 764 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.906006V359.406L327.5 206.921L0.5 0.906006Z" fill="white"/>
          <path d="M763 0.906006V359.406L436 206.921L763 0.906006Z" fill="white"/>
          <path d="M327.5 206.921L0.5 359.406H381.75H763L436 206.921C366.5 206.921 397 206.921 327.5 206.921Z" fill="white"/>
          <path d="M0.5 359.406V0.906006L327.5 206.921M0.5 359.406L327.5 206.921M0.5 359.406H381.75H763M327.5 206.921C397 206.921 366.5 206.921 436 206.921M763 359.406V0.906006L436 206.921M763 359.406L436 206.921" stroke="black"/>
        </svg>

        <svg className="absolute z-0 bottom-0" id="envelope-back" width="764" height="406" viewBox="0 0 764 406" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M763 404.775V0.5L394.5 0.500031L0.5 0.5V404.775H394.5H763Z" fill="white"/>
          <path d="M0.5 404.775V0.5L394.5 0.500031L763 0.5V404.775H394.5H0.5Z" fill="white"/>
          <path d="M763 404.775V0.5L394.5 0.500031L0.5 0.5V404.775H394.5H763Z" stroke="black"/>
        </svg>


      </div>
    </div>
  );
}
