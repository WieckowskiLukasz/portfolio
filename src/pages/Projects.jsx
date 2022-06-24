import React from 'react';
import home from '../images/backgrounds/abstract14.png';
import gzgk from '../images/pages_content/gzgk.PNG';
import weatherForecast from '../images/pages_content/weatherForecast.PNG';
import portfolio from '../images/pages_content/portfolio.PNG';

export default function Projects() {
  return (
    <>
      <div className='content'>
				<div 
					className='background-image'
					style={{
						backgroundImage:`url(${home})`,
						filter: `brightness(30%)`,
					}}>
				</div>
        <div className='projects'>
          <div className='projects__header'>Projekty</div>
          <div className='projects__container'>
            <div className='projects__item'>
              <div className='projects__image-container'>
                <div className='projects__image' style={{
                  backgroundImage:`url(${gzgk})`,
                }}>
                </div>
                <div className='projects__name'>
                  GZGK w Gozdowie
                </div>
              </div>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja internetowa dla Gminnego Zakładu Gospodarki Komunalnej w Gozdowie. Jest to pierwszy komercyjny projekt, został wykonany na początku studiów (01.2020r.), a następnie wykorzystany na potrzeby pracy inżynierskiej. Na potrzeby zakładu wykonany został od podstaw panel admistracyjny w języku PHP.
                </div>
                <div className='projects__technologies'>
                  <i class="las la-code"></i>
                  HTML5, CSS3, PHP, MySQL, Bootstrap, JavaScript;
                </div>
                <a 
                  className='projects__link link'
                  href='http://gozdowo.info/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class="las la-link"></i> 
                  gozdowo.info
                </a>
              </div>
            </div>
            <div className='projects__item'>
              <div className='projects__image-container'>
                <div className='projects__image' style={{
                  backgroundImage:`url(${weatherForecast})`,
                }}>
                </div>
                <div className='projects__name'>
                  Weather Forecast
                </div>
              </div>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja pogodowa korzystająca z darmowego klucza API OpenWeatherMap. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami, React Context i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <div className='projects__technologies'>
                  <i class="las la-code"></i>
                  HTML5, ReactJS, JavaScript, Saas;
                </div>
                <a className='projects__link link'>
                  <i class="lab la-github"></i> 
                  gozdowo.info
                </a>
                <a className='projects__link link'>
                  <i class="las la-link"></i> 
                  gozdowo.info
                </a>
              </div>
            </div>

            <div className='projects__item'>
              <div className='projects__image-container'>
                <div className='projects__image' style={{
                  backgroundImage:`url(${portfolio})`,
                }}>
                </div>
                <div className='projects__name'>
                  Portfolio
                </div>
              </div>
              <div className='projects__info'>
                <div className='projects__description'>
                  Aplikacja wykonana na potrzeby portfolio. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.
                </div>
                <div className='projects__technologies'>
                  <i class="las la-code"></i>
                  HTML5, ReactJS, JavaScript, Saas;
                </div>
                <a 
                  href='https://github.com/WieckowskiLukasz/portfolio'
                  target='_blank'
                  rel='noreferrer'
                  className='projects__link link'
                >
                  <i class="lab la-github"></i> 
                  github.com/WieckowskiLukasz/portfolio
                </a>
                <a className='projects__link link'>
                  <i class="las la-link"></i> 
                  gozdowo.info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
