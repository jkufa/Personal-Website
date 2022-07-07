import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Navbar.scss';

type Props = {
  isAtTop : boolean
}

export default function Navbar({isAtTop}: Props) {
  return (
    <header id='navbar' className='navbar-main'>
    <nav className={isAtTop ? 'nav-top' : ''}>
      <ul>
        <li><button autoFocus><FontAwesomeIcon icon={solid('house')} /></button></li>
        <li><button>About</button></li>
        <li><button>Work</button></li>
        <li><button>Resume</button></li>
      </ul>
    </nav>
    </header>
  )
}