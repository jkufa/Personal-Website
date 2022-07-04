import React, { useCallback } from 'react';
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
  return (
    <div className='App'>
      <div className='loading-frame'><div className='container'></div></div>
      <section id='home'>
        <div className='container'>
          <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
          <div className='flex-item'>
            <LandingHeader/>
            <Navbar/>
          </div>
        </div>
      </section>
      {/* <section id='about'>
        <h1>About</h1>
      </section>
      <section id='experience'>
        <h1>Experience</h1>
      </section> */}
  </div>
  );
}

export default App;