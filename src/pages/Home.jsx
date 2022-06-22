import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../images/backgrounds/home2.jpg';
import photography from '../images/photography/photography.jpg';

export default function Home() {
  return (
    <>
			<div className='content'>
				<div 
					className='background-image'
					style={{
						backgroundImage:`url(${home})`,
						filter: `brightness(70%)`,
					}}>
				</div>
				<div className='home-info'>
					<div className='home-info__name-container'>
						<div className='home-info__picture'><img alt='photography' src={photography}/></div>
						<div className='home-info__name'>Łukasz<br></br>Więckowski</div>
					</div>
					<div className='home-info__about-me'>
						Jestem początkującym programistą front-end. Interesuję się tworzeniem nowoczesnych interfejsów i wykonywaniem aplikacji webowych korzystając z technologii ReactJS i Saas.
					</div>
					<div className='home-info__more-info'>
						<div className='home-info__btn-more-info'>
							<NavLink to='/o-mnie'>
								Więcej o mnie<i class="las la-angle-double-right"></i>
							</NavLink>
						</div>
						<div className='home-info__media-links-container'>
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
						<a 
							href='#' 
							className='home-info__media-link cv'>
								CV
						</a>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};
