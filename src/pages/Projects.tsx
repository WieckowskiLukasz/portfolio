import React from 'react';
import Ratio from 'react-ratio';
import background from '../images/backgrounds/default_bg.webp';
import gzgk from '../images/pages_content/gzgk.webp';
import weatherForecast from '../images/pages_content/weatherForecast.webp';
import portfolio from '../images/pages_content/portfolio.webp';
import memoryCardGame from '../images/pages_content/memoryCardGame.webp';

export default function Projects() {
  return (
    <>
      <div className='content'>
				<div 
					className='background-image'
					style={{
						backgroundImage:`url(${background})`,
						filter: `brightness(40%)`,
					}}>
				</div>
        <div className='projects'>
          <div className='projects__header'>Projekty</div>
            <div className='projects__container'>
              <div className='projects__item'>
                <Ratio ratio={ 16 / 9 }>
                  <div className='projects__image-container'>
                    <a 
                      href='http://gozdowo.info/'
                      target='_blank'
                      rel='noreferrer'
                      className='projects__image' 
                      style={{
                      backgroundImage:`url(${gzgk})`,
                      }}
                    >
                    </a>
                    <a 
                      href='http://gozdowo.info/'
                      target='_blank'
                      rel='noreferrer'
                      className='projects__name'>
                      GZGK w Gozdowie
                    </a>
                  </div>
                </Ratio>
                <div className='projects__info'>
                  <div className='projects__description'>
                    Aplikacja internetowa dla Gminnego Zakładu Gospodarki Komunalnej w Gozdowie. Jest to pierwszy komercyjny projekt, został wykonany na początku studiów (01.2020r.), a następnie wykorzystany na potrzeby pracy inżynierskiej. Na potrzeby zakładu wykonany został od podstaw panel admistracyjny w języku PHP.
                  </div>
                <a 
                  className='projects__link link'
                  href='http://gozdowo.info/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='las la-link'></i> 
                  gozdowo.info
                </a>
                <div className='projects__technologies'>
                  <div className='projects__tech-icon'><i className='lab la-html5'></i>HTML5</div>
                  <div className='projects__tech-icon'><i className='lab la-css3-alt'></i>CSS3</div>
                  <div className='projects__tech-icon'><i className='lab la-php'></i>PHP</div>
                  <div className='projects__tech-icon'><i className='icon icon-mysql'></i>MySQL</div>
                  <div className='projects__tech-icon'><i className='icon icon-bootstrap'></i>Bootstrap</div>
                  <div className='projects__tech-icon'><i className='lab la-js-square'></i>JavaScript</div>
                </div>
              </div>
            </div>
            <div className='projects__item'>
              <Ratio ratio={ 16 / 9 }>
                <div className='projects__image-container'>
                  <a 
                    href='https://wieckowskilukasz.github.io/weatherForecast'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__image' 
                    style={{
                    backgroundImage:`url(${weatherForecast})`,
                    }}
                  >
                  </a>
                  <a 
                    href='https://wieckowskilukasz.github.io/weatherForecast'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__name'>
                    Weather Forecast
                  </a>
                </div>
              </Ratio>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja pogodowa korzystająca z darmowego klucza API OpenWeatherMap. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami, React Context i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                
                <a 
                  href='https://github.com/WieckowskiLukasz/weatherForecast'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='lab la-github'></i> 
                  github.com/WieckowskiLukasz/weatherForecast
                </a>
                <a
                  href='https://wieckowskilukasz.github.io/weatherForecast'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='las la-link'></i> 
                  wieckowskilukasz.github.io/weatherForecast
                </a>
                <div className='projects__technologies'>
                  <div className='projects__tech-icon'><i className='lab la-html5'></i>HTML5</div>
                  <div className='projects__tech-icon'><i className='lab la-react'></i>React</div>
                  <div className='projects__tech-icon'><i className='icon icon-typescript'></i>Typescript</div>
                  <div className='projects__tech-icon'><i className='lab la-sass'></i>Sass</div>
                </div>
              </div>
            </div>
            <div className='projects__item'>
              <Ratio ratio={ 16 / 9 }>
                <div className='projects__image-container'>
                  <a 
                    href='https://wieckowskilukasz.github.io/MemoryCardGame'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__image' 
                    style={{
                    backgroundImage:`url(${memoryCardGame})`,
                    }}
                  >
                  </a>
                  <a 
                    href='https://wieckowskilukasz.github.io/MemoryCardGame'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__name'>
                    Memory Card Game
                  </a>
                </div>
              </Ratio>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja przedstawia wariację na temat popularnej gry "Memory". Gracz musi odnaleźć 12 par kart i ma na to 5 minut. Im mniej czasu mu to zajmie i im mniej ruchów przy tym wykona, tym więcej punktów otrzyma. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami. Za oprawę graficzną odpowiada Saas.
                  Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <a 
                  href='https://github.com/WieckowskiLukasz/MemoryCardGame'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='lab la-github'></i> 
                  github.com/WieckowskiLukasz/MemoryCardGame
                </a>
                <a
                  href='https://wieckowskilukasz.github.io/MemoryCardGame'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='las la-link'></i> 
                  wieckowskilukasz.github.io/MemoryCardGame
                </a>
                <div className='projects__technologies'>
                  <div className='projects__tech-icon'><i className='lab la-html5'></i>HTML5</div>
                  <div className='projects__tech-icon'><i className='lab la-react'></i>React</div>
                  <div className='projects__tech-icon'><i className='icon icon-typescript'></i>Typescript</div>
                  <div className='projects__tech-icon'><i className='lab la-sass'></i>Sass</div>
                </div>
              </div>
            </div>
            <div className='projects__item'>
              <Ratio ratio={ 16 / 9 }>
                <div className='projects__image-container'>
                  <a 
                    href='https://wieckowskilukasz.github.io/portfolio'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__image' 
                    style={{
                    backgroundImage:`url(${portfolio})`,
                    }}
                  >
                  </a>
                  <a 
                    href='https://wieckowskilukasz.github.io/portfolio'
                    target='_blank'
                    rel='noreferrer'
                    className='projects__name'
                  >
                    Portfolio
                  </a>
                </div>
              </Ratio>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja wykonana na potrzeby portfolio. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <a 
                  href='https://github.com/WieckowskiLukasz/portfolio'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='lab la-github'></i> 
                  github.com/WieckowskiLukasz/portfolio
                </a>
                <a
                  href='https://wieckowskilukasz.github.io/portfolio'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i className='las la-link'></i> 
                  wieckowskilukasz.github.io/portfolio
                </a>
                <div className='projects__technologies'>
                  <div className='projects__tech-icon'><i className='lab la-html5'></i>HTML5</div>
                  <div className='projects__tech-icon'><i className='lab la-react'></i>React</div>
                  <div className='projects__tech-icon'><i className='icon icon-typescript'></i>Typescript</div>
                  <div className='projects__tech-icon'><i className='lab la-sass'></i>Sass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
