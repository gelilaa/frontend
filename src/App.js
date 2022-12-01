import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Intro} from './components/intro/Intro.jsx'
import {Skills}  from './components/Skills';
import Work from './components/Work'
import {ScrollToTop} from "./components/ScrollToTop"
import { Container } from 'react-bootstrap';


function App() {

  return (
    <Container fluid>
      <Navbar />
      <ScrollToTop/>
      <Intro />
      <br />
      <Skills />
      <br />
      <br />
      <Work />
      {/* <Routes>
        <Route path="/" element={<Intro />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/blog" element={<Blogs />} />
      </Routes>
       */}
      {/* <button
        className="scroll"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <IconContext.Provider value={{ className: "icons" }}>
          <FaArrowUp />
        </IconContext.Provider>
      </button> */}
    </Container>
  );
}

export default App;
