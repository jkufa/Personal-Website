import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Navbar.scss';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

type Props = {
  isAtTop : boolean
}

interface NavItem {
  href: string;
  content: string | ReactElement;
}

const navItems: Array<NavItem> = [
  {
    href: '#hero',
    content: <FontAwesomeIcon icon={solid('house')} />
  },
  {
    href: '#about',
    content: 'About'
  },
  {
    href: '#work',
    content: 'Work'
  },
  {
    href: 'https://github.com/jkufa/Resume/blob/master/JackKufaResume.pdf',
    content: 'Resume'
  }
]

const Navbar = (props: Props) => {

  const [activeItem, setActiveItem] = useState(0);
  const handleActiveItem = (idx: number) => {
    setActiveItem(idx);
  }

  return (
    <header id='navbar' className='navbar-main'>
    <nav className={props.isAtTop ? 'nav-top' : ''}>
      <ul>
        { navItems.map((item, key) => {
          return <li><a key={key} href={item.href} onClick={() => handleActiveItem(key)} className={activeItem === key ? "active nav-item" : 'nav-item'}>{item.content}</a></li>;
        }) }
      </ul>
    </nav>
    </header>
  )
}

export default Navbar;