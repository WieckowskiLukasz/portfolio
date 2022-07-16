import React from 'react';
import Ratio from 'react-ratio';
import background from '../images/backgrounds/default_bg.webp';
import gzgk from '../images/pages_content/gzgk.webp';
import weatherForecast from '../images/pages_content/weatherForecast.webp';
import portfolio from '../images/pages_content/portfolio.webp';

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
                    <div className='projects__name'>
                      GZGK w Gozdowie
                    </div>
                  </div>
                </Ratio>
                <div className='projects__info'>
                  <div className='projects__description'>
                    Aplikacja internetowa dla Gminnego Zakładu Gospodarki Komunalnej w Gozdowie. Jest to pierwszy komercyjny projekt, został wykonany na początku studiów (01.2020r.), a następnie wykorzystany na potrzeby pracy inżynierskiej. Na potrzeby zakładu wykonany został od podstaw panel admistracyjny w języku PHP.
                  </div>
                <div className='projects__technologies'>
                  <i className='las la-code'></i>
                  HTML5, CSS3, PHP, MySQL, Bootstrap, JavaScript;
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
                  <div className='projects__name'>
                    Weather Forecast
                  </div>
                </div>
              </Ratio>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja pogodowa korzystająca z darmowego klucza API OpenWeatherMap. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami, React Context i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <div className='projects__technologies'>
                  <i className='las la-code'></i>
                  HTML5, ReactJS, TypeScript, Saas;
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
                  <div className='projects__name'>
                    Portfolio
                  </div>
                </div>
              </Ratio>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja wykonana na potrzeby portfolio. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <div className='projects__technologies'>
                  <i className='las la-code'></i>
                  HTML5, ReactJS, TypeScript, Saas;
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
