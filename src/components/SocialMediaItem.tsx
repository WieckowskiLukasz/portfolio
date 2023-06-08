import React from "react";
import { FC } from "react";
import { SocialMediaItemInterface } from "../interfaces";

const SocialMediaItem: FC<SocialMediaItemInterface> = ({ link, icon }) => {
  return (
    <a 
      href={link} 
      target='_blank' 
      rel='noreferrer' 
      className='about__media-link'
    >
        <i className={icon}/>
    </a>
  );
};

export default SocialMediaItem;