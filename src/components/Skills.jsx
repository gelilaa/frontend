import React from "react";
import "./style.css"
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin,RoughEase } from "gsap/all";
import { useEffect } from "react";
import { FaCss3, FaNodeJs,FaBootstrap,FaHtml5 } from "react-icons/fa";
import { IconContext } from "react-icons";


export const Skills = ()=>{  
     gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin,RoughEase); 
var gridWidth = 0;
var gridHeight = 0;

useEffect(()=>{
Draggable.create(".block", {
    type:"x,y",
    edgeResistance:0.65,
    bounds:".container",
    inertia:true,
    lazy: false,
    liveSnap:false,
    snap: {
        x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;
        },
        y: function(endValue) {
            return Math.round(endValue / gridHeight) * gridHeight;
        } 
    } 
}); 
})
   
    return(
        <div className="main">
       <IconContext.Provider value={{ className: "icons" }}>
          <span>
            <FaBootstrap /> 
            <FaNodeJs/> <FaCss3/> <FaHtml5/>
          </span>
        </IconContext.Provider>
        </div> 
        
    
    );
}
