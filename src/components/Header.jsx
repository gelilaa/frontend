import React from "react"
import { Navbar } from "./navbar/Navbar"
import "./style.css"
//import {logo} from'../assets/me.png' for some reason importing the logo was not working
// now using require

let logo = require('../assets/me.png')

export const Header=()=>{
    return(<>
         <div className="container-header">
          
        <img className="App-logo" src={logo} alt="" />

        <Navbar/>
        </div>
       
        </>
    )
}