import React from 'react'
import './Navbar.scss';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav>
      <ul>
        <li><button autoFocus>Home</button></li>
        <li><button>About</button></li>
        <li><button>Experience</button></li>
        <li><button>Resume</button></li>
      </ul>
    </nav>
  )
}