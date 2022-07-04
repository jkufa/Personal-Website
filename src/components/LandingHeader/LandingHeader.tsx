import React, { useEffect, useState } from 'react'
import './LandingHeader.scss';

type Props = {}

export default function LandingHeader({}: Props) {
  const words = [
    'guy',
    'end',
    'Coffee',
    'design',
    'UI/UX',
    'mustache',
    'Squirtle',
  ];
  const [wordsIndex, SetIndex] = useState(0);
  let i = 0;
  return (
    <div className='content'>
      <h1>
        Jack Kufa is pretty much <span className='fade-in-out'>{words[wordsIndex]}.</span>
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