import React, { useContext } from 'react';
import about from '../images/backgrounds/about_me_bg.webp';
import { AppContext } from '../AppContext.tsx';
import { AboutMeContent } from '../arrays/about_me.ts';
import SocialMediaItem from '../components/SocialMediaItem.tsx';
import { AboutMeInterface } from '../interfaces';

export default function About() {
  const {lang} = useContext(AppContext);
  const content: AboutMeInterface = AboutMeContent[lang];

  return (
    <>
      <div className='content'>
        <div 
          className='background-image'
          style={{
            backgroundImage:`url(${about})`,
            filter: `brightness(80%)`,
          }}>
        </div>
        <div className='about'>
          <div className='about__header'>
            {content.header}
          </div>
          <div className='about__info-container'>
            <div className='about__photo'>
              <img alt='photography' src={content.image}/>
              <div className='about__media-links'>
                <div className='about__media-links-header'>
                  {content.socialMediaHeader}
                </div>
                <div className='about__media-links-container'>
                  { content.socialMediaArray.map((item, i)=>
                    <SocialMediaItem
                      key={i} 
                      link={item.link} 
                      icon={item.icon}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='about__info'>
              { content.description.map(item=>
                <p dangerouslySetInnerHTML={{__html: item}}/>
              )}
              <div className='about__button-container'>
                <a 
                  href={content.cvFile}
                  target='_blank' 
                  rel='noreferrer' 
                  className='about__button btn'
                >
                  {content.cvButton} <i className='las la-arrow-down'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
