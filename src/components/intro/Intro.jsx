import React from "react";
import img from "../../assets/gelila.png"
import './style.css'
import { Skills } from "../Skills";
import { Row,Col, Button,Card } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
export const Intro =()=>{

  
    return(<>
    <Row>
      <Col style={{ width: '40rem' }}  className='im d-none d-lg-block'>
      <Card.Img variant="center" src={img} />
      </Col>
     <Col xs={12} lg={5} style={{ width: '32rem' }} className= 'intro-word'>
   
      <Card.Body>    
            <h1 className="name">Gelila T. Ali</h1>
          A Junior webdesigner and administrative talent.
          Aspire to be a Front and Back end Developer & Product designer.
          Currently living in Belgium.
          <br/>
          <br/>
          <div>
            <Button variant="outline-secondary" size="lg">contact me</Button>
          </div>
      </Card.Body>
    </Col>
     <Col lg={1}  className="d-none d-lg-block">
        <div className="git">
        <IconContext.Provider value={{ className: "icons" }}>
          <div>
            <a href="https://github.com/gelilaa">
  <FaGithub />
            </a>
          <a href="https://www.linkedin.com/in/gelilaali/"><FaLinkedinIn /></a>
            
          </div>
        </IconContext.Provider>
      </div> 
        </Col>
    </Row>
    <br/>
    <Row>
      <Col>
      <Skills />
      </Col>
    </Row>
      </>
    );
}