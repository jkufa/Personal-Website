import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Navbar from './components/Navbar/Navbar';
import LandingHeader from './components/LandingHeader/LandingHeader';
import './styles/App.scss';



const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  
  const [isFullNav, setFullNav] = useState(false);


  const checkNavPos = () => {
    var navPos = document.getElementById('navbar')?.offsetTop || 0;
    var currentPos = window.scrollY;
    currentPos >= navPos + 230 ? setFullNav(true) : setFullNav(false);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', checkNavPos);
  }, []);

  // TODO: 1. Create a parent section, where all sub sections live.
  // TODO: 2. Refactor container css so the navbar can fit property and also have its stickyness persist
  // TODO: 2a. Refactor margins so header and navbar are centered on screen
  return (
    <div className='App' onScroll={checkNavPos}>
      {/* <div className='loading-frame'><div className='container'></div></div> */}
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      <section id='hero'>
        <div className='title-container'><LandingHeader/></div>
      </section>
      <Navbar isFullNav={isFullNav}/>
      <section id='about'>
      </section>
      {/* <section id='experience'>
        <h1>Experience</h1>
      </section> */}
  </div>
  );
}

export default App;