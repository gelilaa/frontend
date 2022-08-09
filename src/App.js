import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Intro} from './components/intro/Intro.jsx'
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import About  from './components/About';
import Work from './components/Work'
import { Blogs } from './components/Blogs';





function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/blog" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
