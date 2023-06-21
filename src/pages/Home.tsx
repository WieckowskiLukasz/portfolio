import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../images/backgrounds/home.webp';
import photography from '../images/photography/home.jpg';
import photography2 from '../images/photography/4.jpg';
import cv from '../download/Łukasz_Więckowski_CV.pdf';
import { HomePageContent } from '../arrays/home.ts';
import { AppContext } from '../AppContext.tsx';

export default function Home() {
	const {lang} = useContext(AppContext);
	const Content = HomePageContent[lang];

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
					<div className='home-info__content'>
						<div className='home-info__name-container'>
							<div className='home-info__picture'><img alt='photography' src={photography}/></div>
							<div className='home-info__name'>
								<p>{Content.name}</p>
								<p>{Content.surname}</p>
							</div>
						</div>
						<div className='home-info__about-me'>
							{Content.description}
						</div>
						<div className='home-info__more-info'>
							<div className='home-info__btn-more-info'>
								<NavLink to='/o-mnie'>
									{Content.viewMore}<i className='las la-angle-double-right'></i>
								</NavLink>
							</div>
							<div className='home-info__media-links-container'>
								{/* <a 
									href='https://www.linkedin.com/in/WieckowskiLukasz' 
									target='_blank' 
									rel='noreferrer' 
									className='home-info__media-link'>
										<i className='lab la-linkedin-in'></i>
								</a>
								<a 
									href='https://www.facebook.com/IWieckowskiLukasz' 
									target='_blank' 
									rel='noreferrer' 
									className='home-info__media-link'>
										<i className='lab la-facebook-f'></i>
								</a>
								<a 
									href='https://github.com/WieckowskiLukasz' 
									target='_blank' 
									rel='noreferrer' 
									className='home-info__media-link'>
										<i className='lab la-github'></i>
								</a>
								<a 
									href={cv}
									target='_blank' 
									rel='noreferrer' 
									className='home-info__media-link cv'
								>
										CV
								</a> */}
								{ Content.socialMediaArray.map((item, i)=>
									<a 
										href='https://www.linkedin.com/in/WieckowskiLukasz' 
										target='_blank' 
										rel='noreferrer' 
										className='home-info__media-link'>
											<i className={item.icon}></i>
											{item.title}
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};
