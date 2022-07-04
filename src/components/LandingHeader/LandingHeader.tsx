import React, { useEffect, useState } from 'react'
import './LandingHeader.scss';

type Props = {}
var i = 0;

export default function LandingHeader({}: Props) {
  const words = [
    'front-end',
    'UI/UX',
    'design',
    'coffee',
    'mustache',
  ];
  const [word, SetWord] = useState('guy');
  
  const iterate = () => {
    SetWord(words[i]);
    i < words.length - 1 ? i++ : i = 0;
  }
  
  return (
    <div className='content'>
      <h1 id='title'>
        Jack Kufa is all about <span className='fade-in-out' onAnimationIteration={iterate}>{word}.</span>
        </h1>
    </div>
  )
}


// guy
// front-end
// coffee
// design
// accessibility
// music
// learning guitar
// mustache