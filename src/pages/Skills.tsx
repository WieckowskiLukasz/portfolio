import React from 'react';
import background from '../images/backgrounds/default_bg.webp';

export default function Skills() {
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
				<div className='skills-info'>
					<div className='skills-info__header'>Umiejętności</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-html5'></i>
								<div className='skills-info__skill-name'>HTML5</div>
							</div>
							<div className='skills-info__skill-description'><div>Biegła znajomość składni, stosowanie nazewnictwa klas w konwecji BEM.</div></div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-css3-alt'></i>
								<div className='skills-info__skill-name'>CSS3</div>
							</div>
							<div className='skills-info__skill-description'>Biegła znajomość składni. Umiejętność tworzenia czytelnych, responsywnych i nowoczesnych interfejsów.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-sass'></i>
								<div className='skills-info__skill-name'>Sass</div>
							</div>
							<div className='skills-info__skill-description'>Stosowanie zagnieżdżeń z nazewnictwem w konwecji BEM. Korzystanie ze zmiennych, domieszek i breakpointów Media Queries.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-js-square'></i>
								<div className='skills-info__skill-name'>JavaScript</div>
							</div>
							<div className='skills-info__skill-description'>Znajomość składni ES6+. Umiejętność tworzenia skryptów zorientowanych obiektowo i korzystania z Rest API.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-react'></i>
								<div className='skills-info__skill-name'>ReactJS</div>
							</div>
							<div className='skills-info__skill-description'>Biegła znajomość składni. Umiejętność pracy z komponentami klasowymi i funkcyjnymi z wykorzystanie hooków. Znajomość React Router i React Context.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon las la-laptop-code'></i>
								<div className='skills-info__skill-name'>RWD</div>
							</div>
							<div className='skills-info__skill-description'>Umiejętność tworzenia responsywnych interfejsów z wykorzystaniem Flexboxa, CSS Grid, Media queries lub Bootstrap.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon icon icon-bootstrap'></i>
								<div className='skills-info__skill-name'>Bootstrap</div>
							</div>
							<div className='skills-info__skill-description'>Umiejętność korzystania z zasobów biblioteki i tworzenia responsywnego interfejsu.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-git'></i>
								<div className='skills-info__skill-name'>GIT</div>
							</div>
							<div className='skills-info__skill-description'>Umiejętność tworzenia i aktualizowania repozytoriów. Praca ze zdalnym repozytorium na GitHub. </div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon icon icon-visualstudiocode'></i>
								<div className='skills-info__skill-name'>VSC</div>
							</div>
							<div className='skills-info__skill-description'>Znajomość środowiska Visual Studio Code, praca z Node Package Manager.</div>
						</div>
					</div>
					<div className='skills-info__header'>Znajomość podstaw</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon icon icon-typescript'></i>
								<div className='skills-info__skill-name'>TypeScript</div>
							</div>
							<div className='skills-info__skill-description'>Umiejętność stosowania statycznego typowania. Znajomość typów, interfejsów i umiejętność zastosowania ich w projektach korzystających z ReactJS.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-php'></i>
								<div className='skills-info__skill-name'>PHP</div>
							</div>
							<div className='skills-info__skill-description'>Umiejętność obsługi i walidacji formularzy, korzystania z metod POST, GET i sesji. Praca z bazą danych MySQL.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon icon icon-mysql'></i>
								<div className='skills-info__skill-name'>MySQL</div>
							</div>
							<div className='skills-info__skill-description'>Znajomość podstaw i środowiska phpMyAdmin. Umiejętność tworzenia i modyfikowania prostych baz danych.</div>
						</div>
					</div>
					<div className='skills-info__header'>Zamierzam poznać</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-name-container'>
								<i className='skills-info__skill-icon lab la-node-js'></i>
								<div className='skills-info__skill-name'>NodeJS</div>
							</div>
							<div className='skills-info__skill-description'>W przyszłości jestem zainteresowany pracą w podejściu Full-Stack, dlatego zamierzam poznać NodeJS.</div>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};
