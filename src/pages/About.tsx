import React from 'react';
import about from '../images/backgrounds/about_me_bg.webp';
import photography from '../images/photography/about.jpg';
import cv from '../download/Łukasz_Więckowski_CV.pdf';

export default function About() {
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
          <div className='about__header'>O mnie</div>
          <div className='about__info-container'>
            <div className='about__photo'>
              <img alt='photography' src={photography}/>
              <div className='about__media-links'>
                <div className='about__media-links-header'>
                  Znajdziesz mnie na
                </div>
                <div className='about__media-links-container'>
                  <a 
                    href='https://www.linkedin.com/in/WieckowskiLukasz' 
                    target='_blank' 
                    rel='noreferrer' 
                    className='about__media-link'>
                      <i className='lab la-linkedin-in'></i>
                  </a>
                  <a 
                    href='https://www.facebook.com/IWieckowskiLukasz' 
                    target='_blank' 
                    rel='noreferrer' 
                    className='about__media-link'>
                      <i className='lab la-facebook-f'></i>
                  </a>
                  <a 
                    href='https://github.com/WieckowskiLukasz' 
                    target='_blank' 
                    rel='noreferrer' 
                    className='about__media-link'>
                      <i className='lab la-github'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='about__info'>
              <p>
                Nazywam się Łukasz Więckowski, jestem front-end developerem i specjalizuję się w wykonywaniu aplikacji internetowych.
              </p>
              <p>
                Jestem abolwentem Szkoły Wyższej im. Pawła Włodkowica w Płocku, ukończyłem studia inżynierskie na kierunku <i>Informatyka</i> ze specjalnością <i>Programowanie i bazy danych</i>.  
              </p>
              <p>
                Praktycznie od początku studiów moją uwagę skupiłem na webmasteringu, a szczególnie na technologiach front-endowych. Moje ulubione technologie to React, Next.js i TypeScript.
              </p>
              <p>
                W swojej pracy korzystam także z takich technologii jak Material UI, Redux czy Sass. W przeszłości tworzyłem projekty w podejściu full-stack korzystając z PHP, MySQL i JavaScript.
              </p>
              <div className='about__button-container'>
                <a 
                  href={cv}
                  target='_blank' 
                  rel='noreferrer' 
                  className='about__button btn'
                >
                  Pobierz CV <i className='las la-arrow-down'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
