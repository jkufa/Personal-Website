import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import './App.scss';

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);
  return (
    <div className="container">
    <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    <div className="flex-item">
      <div className="content">
        <h1>Jack Kufa is pretty much guy.</h1>
        <div><nav><ul>
          <li><button autoFocus>Home</button></li>
          <li><button>About</button></li>
          <li><button>Experience</button></li>
          <li><button>Resume</button></li>
        </ul></nav></div>
      </div>
    </div>
  </div>
  );
}

export default App;
