import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Navbar.scss';

type Props = {
  isAtTop : boolean
}

interface NavItem {
  href: string;
  text?: string
  icon?: ReactElement;
}

const navItems: Array<NavItem> = [
  {
    href: '#hero',
    icon: <FontAwesomeIcon icon={solid('house')} />
  },
  {
    href: '#about',
    text: 'About'
  },
  // {
  //   href: '#work',
  //   text: 'Work'
  // },
  {
    href: 'https://github.com/jkufa/Resume/blob/master/JackKufaResume.pdf',
    text: 'Resume',
    icon: <span className='external-link'><FontAwesomeIcon icon={solid('arrow-up-right-from-square')} /></span>
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
          return <li><a key={key} href={item.href} onClick={() => handleActiveItem(key)} className={activeItem === key ? "active nav-item" : 'nav-item'}>{item.text} {item.icon}</a></li>;
        }) }
      </ul>
    </nav>
    </header>
  )
}

export default Navbar;