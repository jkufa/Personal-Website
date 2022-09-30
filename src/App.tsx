import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Navbar from './components/Navbar/Navbar';
import LandingHeader from './components/LandingHeader/LandingHeader';
import FooterLink from './components/FooterLink/FooterLink';
import AboutContent from './components/AboutCard/AboutContent';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './styles/App.scss';
// import './styles/test.css';



const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  
  const [isAtTop, setFullNav] = useState(false);
  const navStart = document.getElementById('navbar')?.offsetTop || 0;
  const checkNavPos = () => {
    var navPos = document.getElementById('navbar')?.offsetTop || 0;
    // console.log(navStart, navPos) // TODO: change 609 to a dynamic value
    navPos > navStart ? setFullNav(true) : setFullNav(false);
  }
  
    window.addEventListener('scroll', () => {
      checkNavPos();
    })
  
  return (
    <div className='App'>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
        <div className='content-main'>
          <section id='hero'>
            <div className='title-container'><LandingHeader/></div>
          </section>
          <Navbar isAtTop={isAtTop}/>
          <div className='beeg-card'>
            <section id='about'><AboutContent/></section>
            {/* <section style={{ height: '100vh' }} id='work'></section> */}
          </div>
      </div>
     <footer>
      <FooterLink text={'email'} icon={solid('at')} link='mailto:jack@kufa.io'></FooterLink>
      <FooterLink text={'github'} icon={brands('github')} link='https://github.com/jkufa'></FooterLink>
      <FooterLink text={'linkedin'} icon={brands('linkedin')} link='https://linkedin.com/in/jackkufa'></FooterLink>
     </footer>

     {/* <div className='card-container'>
      <div className='card'>card</div>
     </div> 
     <div className='footer'>
      footer
     </div> */}
  </div>
  );
}

export default App;