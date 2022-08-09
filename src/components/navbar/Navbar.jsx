import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Header } from '../Header'

export const Navbar =()=>{
    return(
        <div className="container-nav">
        <Link to="/">
          <div id="about_me__">
            <span>
              <Header />
            </span>
            <br />
          </div>
        </Link>
        <Link to={"/about"}>
          <div id="about_me__">
            <span>about me </span>
            <br />
          </div>
        </Link>
        <Link to={"/work"}>
          <div id="about_me__">
            <span>my-work</span>
            <br />
          </div>
        </Link>
        <Link to={"/blog"}>
          <div id="about_me__">
            <span>blogs</span>
            <br />
          </div>
        </Link>
      </div>
    )
}