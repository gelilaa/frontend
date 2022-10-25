import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Intro} from './components/intro/Intro.jsx'
import { Route,  Routes } from "react-router-dom";
import {Skills}  from './components/Skills';
import Work from './components/Work'
import { Blogs } from './components/Blogs';

import { Container } from 'react-bootstrap';


function App() {

  return (
    <Container fluid >
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/blog" element={<Blogs />} />
      </Routes>
      {/* <div className="git">
        <IconContext.Provider value={{ className: "icons" }}>
          <div>
            <FaGithub />
            <FaLinkedinIn />
          </div>
        </IconContext.Provider>
      </div> */}
      
    </Container>
  );
}

export default App;
