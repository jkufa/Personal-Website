import React, { useEffect, useState } from 'react'
import './LandingHeader.scss';

type Props = {}
var i = 0;

export default function LandingHeader({}: Props) {
  const words = [
    'UI/UX',
    'design',
    'coffee',
    'music',
    'mustache',
  ];
  const [word, SetWord] = useState('front-end');
  
  const iterate = () => {
    SetWord(words[i]);
    i < words.length - 1 ? i++ : i = 0;
  }
  
  return (
    <h1 id='title'>
      Jack Kufa is all about <br/><span className='fade-in-out' onAnimationIteration={iterate}>{word}.</span>
    </h1>
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