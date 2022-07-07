import React from 'react';
import './FooterLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';

type Props = {
  text: string;
  icon: IconDefinition;
  link: string;
}

const FooterLink = (props: Props) => {
  return (
    <div className='link-container'>
      <a href={props.link}>
        <FontAwesomeIcon className={props.icon.iconName === 'at' ? 'at' : ''} icon={props.icon} ></FontAwesomeIcon>
        <span>{props.text}</span>
      </a>
    </div>
  )
}

export default FooterLink;