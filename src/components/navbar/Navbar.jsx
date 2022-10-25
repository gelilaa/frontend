import React from 'react'
import './style.css'
import { NavLink} from 'react-router-dom'
import { Header } from '../Header'
import { gsap,RoughEase } from "gsap/all";
import { Row,Col } from 'react-bootstrap';

export const Navbar =()=>{

  
    return(
    <Row>
      <Col>
      <NavLink to="/">
      <Header/>
    </NavLink>
      </Col>
    <Col>
     <NavLink to={"/work"}>
          <div id="about_me__">
            <span>Projects</span>
            <br />
          </div>
        </NavLink>
    </Col>
    <Col>
     <NavLink to={"/blog"}>
          <div id="about_me__">
            <span>Blogs</span>
            <br />
          </div>
        </NavLink>
    </Col>
      </Row>
    )
}