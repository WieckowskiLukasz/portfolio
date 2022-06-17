import React from 'react'
import home from '../images/backgrounds/skills3.jpg';

export default function Skills() {
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
				<div className='skills-info'>
					<div className='skills-info__header'><i class="las la-code"></i>Umiejętności</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-html5"></i></div>
							<div className='skills-info__skill-name'>HTML5</div>
							<div className='skills-info__skill-description'><div>Biegła znajomość składni, stosowanie nazewnictwa klas w konwecji BEM.</div></div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-css3"></i></div>
							<div className='skills-info__skill-name'>CSS3</div>
							<div className='skills-info__skill-description'>Biegła znajomość składni. Umiejętność tworzenia czytelnych i nowoczesnych interfejsów.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-sass"></i></div>
							<div className='skills-info__skill-name'>Sass</div>
							<div className='skills-info__skill-description'>Stosowanie zagnieżdżeń z nazewnictwem w konwecji BEM. Korzystanie ze zmiennych, domieszek i breakpointów Media Queries.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-js-square"></i></div>
							<div className='skills-info__skill-name'>JavaScript</div>
							<div className='skills-info__skill-description'>Znajomość składni ES6. Umiejętność tworzenia skryptów zorientowanych obiektowo i korzystania z Rest API.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-react"></i></div>
							<div className='skills-info__skill-name'>ReactJS</div>
							<div className='skills-info__skill-description'>Biegła znajomość składni. Umiejętność pracy w komponentach klasowych i funkcyjnych z wykorzystanie hooków. Znajomość React Router i React Context.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="las la-desktop"></i></div>
							<div className='skills-info__skill-name'>RWD</div>
							<div className='skills-info__skill-description'>Umiejętność tworzenia responsywnych interfejsów z wykorzystaniem Flexboxa, CSS Grid, Media queries lub Bootstrap.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="icon icon-bootstrap"></i></div>
							<div className='skills-info__skill-name'>Bootstrap</div>
							<div className='skills-info__skill-description'>Umiejętność korzystania z biblioteki i tworzenia responsywnego interfejsu.</div>
						</div>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-git"></i></div>
							<div className='skills-info__skill-name'>GIT</div>
							<div className='skills-info__skill-description'>Umiejętność tworzenia repozytoriów i commitów. Współpraca z GitHub.</div>
						</div>
					</div>
					<div className='skills-info__header'><i class="las la-code"></i> Znajomość podstaw</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-php"></i></div>
							<div className='skills-info__skill-name'>PHP</div>
							<div className='skills-info__skill-description'>Umiejętność obsługi i walidacji formularzy, korzystania z metod POST, GET i sesji. Praca z bazą danych MySQL.</div>
						</div>
					</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="icon icon-mysql"></i></div>
							<div className='skills-info__skill-name'>MySQL</div>
							<div className='skills-info__skill-description'>Znajomość podstaw i środowiska phpMyAdmin. Umiejętność tworzenia i modyfikowania prostych baz danych.</div>
						</div>
					</div>
					<div className='skills-info__header'><i class="las la-code"></i> Zamierzam poznać</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="icon icon-typescript"></i></div>
							<div className='skills-info__skill-name'>TypeScript</div>
							<div className='skills-info__skill-description'>W związku z rosnącą popularnością połączenia React i TypeScript i możliwości z tym związanym zamierzam poznać TypeScript.</div>
						</div>
					</div>
					<div className='skills-info__skills-container'>
						<div className='skills-info__skill-item'>
							<div className='skills-info__skill-icon'><i class="lab la-node-js"></i></div>
							<div className='skills-info__skill-name'>NodeJS</div>
							<div className='skills-info__skill-description'>W przyszłości jestem zainteresowany pracą w podejściu Full-Stack, dlatego zamierzam poznać NodeJS.</div>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};
