import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AboutContent.scss'
import smg from '../../assets/images/SMG.svg';
import yaskawa from '../../assets/images/Yaskawa.svg';
import cinemacraft from '../../assets/images/CinemaCraft.png';

type Props = {}

export default function AboutContent({}: Props) {
  return (
    <div className='background-container'>
      <div className='background'>
        <div className='about-content'>
          <div className='col1'>
            <div className="mug-wrapper">
              <img className='my-ugly-mug' src='https://avatars.githubusercontent.com/u/32912221?v=4' alt="Headshot of Jack Kufa"/>
            </div>
            <span className='name'>Jack Kufa</span>
            <div className='subcontent'>
              <div className='info-item'>
                <FontAwesomeIcon className='fa-icon' icon={solid('graduation-cap')} />
                <div className="stacked-text">
                  <span className='school'>Missouri S&T</span>
                  <span className='degrees'>B.S. Computer Science</span>
                  <span className='degrees'>B.S. Computer Engineering</span>
                </div>
              </div>
              <div className='info-item job'>
                <FontAwesomeIcon className='fa-icon' icon={solid('building')} />
                <div className="stacked-text">
                  <span className='company'>Service Management Group</span>
                  <span className='job-title'>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col2'>
            <div className='main-content'>
              <p>I’m a software engineer currently living in the greater Philadelphia area who’s obsessed with creating cohesive experiences for end-users.</p>
              <p>I’m also a major coffee geek, aspiring guitarist, and mechanical keyboard enthusiast.</p>
            </div>
            <div className='companies'>
              <h4>Previous Companies</h4>
              <div className='logos-container'>
                <div className='logos'>
                  <img src={smg} className='smg' alt='Service Management Group Logo'/>
                  <img src={yaskawa} className='yaskawa' alt='Yaskawa America Inc.'/>
                  <img src={cinemacraft} className='cinemacraft' alt='CinemaCraft'/>
                </div>
                <div className='logos'>
                  <img src={smg} className='smg' alt='Service Management Group Logo'/>
                  <img src={yaskawa} className='yaskawa' alt='Yaskawa America Inc.'/>
                  <img src={cinemacraft} className='cinemacraft' alt='CinemaCraft'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}