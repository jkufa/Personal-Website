import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Navbar.scss';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav>
      <ul>
        <li><button autoFocus><FontAwesomeIcon icon={solid('house')} /></button></li>
        <li><button>About</button></li>
        <li><button>Experience</button></li>
        <li><button>Resume</button></li>
      </ul>
    </nav>
  )
}