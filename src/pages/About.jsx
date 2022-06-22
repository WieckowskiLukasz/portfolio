import React from 'react'
import about from '../images/backgrounds/abstract5.jpg';
import photography from '../images/photography/photography.jpg';

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
                    rel='noreferrer' className='home-info__media-link'>
                      <i class="lab la-linkedin-in"></i>
                  </a>
                  <a 
                    href='https://www.facebook.com/IWieckowskiLukasz' 
                    target='_blank' 
                    rel='noreferrer' className='home-info__media-link'>
                      <i class="lab la-facebook-f"></i>
                  </a>
                  <a 
                    href='https://github.com/WieckowskiLukasz' 
                    target='_blank' 
                    rel='noreferrer' className='home-info__media-link'>
                      <i class="lab la-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='about__info'>
              <p>
                Nazywam się Łukasz Więckowski, od trzech lat  interesuję się wykonywaniem aplikacji internetowych.
              </p>
              <p>
                Jestem abolwentem Szkoły Wyższej im. Pawła Włodkowica w Płocku, ukończyłem studia inżynierskie na kierunku <i>Informatyka</i> ze specjalnością <i>Programowanie i bazy danych</i>.  
              </p>
              <p>
                Praktycznie od początku studiów moją uwagę skupiłem na webmasteringu, a szczególnie na technologiach front-endowych. Moje ulubione technologie to ReactJS i Saas.
              </p>
              <p>
                Mam za sobą jeden komercyjny projekt, który wykonałem na początku studiów. Obecnie poszukuję pracy na stanowisku Junior Front-End Developer.
              </p>
              <a className='about__button btn'>Pobierz CV <i class="las la-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
