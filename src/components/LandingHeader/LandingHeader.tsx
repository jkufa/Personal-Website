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
  const [isFadeOut, setFadeOut] = useState(false);
  let i = 0;

  useEffect(() => {
    setInterval(() => {
      // setFadeOut(false);
      // i < words.length ? i ++ : i = 0;
      // SetIndex(i);
      setFadeOut(!isFadeOut);
    }, 5000); //5000 ms magic number
  }, []);
  
  return (
    <div className='content'>
      <h1>
        Jack Kufa is pretty much <span className={isFadeOut ? 'fade-out' : 'fade-in'}>{words[wordsIndex]}.</span>
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