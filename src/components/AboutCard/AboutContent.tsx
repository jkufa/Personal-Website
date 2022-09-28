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
          <div className='col'>
            <img className='my-ugly-mug' src='https://avatars.githubusercontent.com/u/32912221?v=4' alt='A picture of me!'/>
            <h1>Jack Kufa</h1>
            <div className='subcontent'>
              <div><FontAwesomeIcon className='fa-icon' icon={solid('graduation-cap')} />Missouri University of Science and Technology</div>
              <div>
                <span><FontAwesomeIcon className='fa-icon' icon={solid('building')} />Associate Software Engineer</span>
                <span><FontAwesomeIcon className='fa-icon' icon={solid('briefcase')} />Service Management Group</span>
              </div>
              {/* <div><span><FontAwesomeIcon className='fa-icon' icon={solid('briefcase')} />Associate Software Engineer</span></div> */}
            </div>
          </div>
          <div className='col'>
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