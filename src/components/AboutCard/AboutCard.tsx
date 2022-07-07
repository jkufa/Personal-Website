import React from 'react'
import './AboutCard.scss'
import myFace from '../../assets/images/me.jpeg';
import smg from '../../assets/images/SMG.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {}

export default function AboutCard({}: Props) {
  return (
    <div className='card-container'>
        <div className='content-container'>
          <div className='col col1'>
            <div className='my-gorgeous-face'>
             <img src={myFace} alt='my gorgeous face'/>
            </div>
            <h2>Jack Kufa</h2>
            <div className='contact-info'>
              <button><FontAwesomeIcon icon={solid('at')} /><span>email</span></button>
              <button><FontAwesomeIcon icon={brands('github')} /><span>github</span></button>
              <button><FontAwesomeIcon icon={brands('linkedin')} /><span>linkedin</span></button>
            </div>
          </div>
          <div className='col col2'>
            <div className='about-body'>
              <p>I’m a software engineer currently living in Philedelphia who’s obsessed with creating cohesive experiences for end-users.</p>
              <p>I’m also a major coffee geek, aspiring guitar player, and keyboard enthusiast. <br/> ☕️ 🎸 ⌨️</p>
            </div>
            <div className='previous-companies'>
              <h4>Previous companies</h4>
              <div className='company-logo'><img src={smg} alt='SMG Logo'/></div>
            </div>
          </div>
        </div>
      <div className='card-background'>
      </div>
    </div>
  )
}