import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../images/backgrounds/home.webp';

export default function Page404() {
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
        <div className='page404'>
          <div className='page404__text'>Strona o podanym adresie nie istnieje.</div>
          <button className='page404__button btn'><NavLink to='/'>Przejdź do strony głównej</NavLink></button>
        </div>
			</div>
    </>
  );
};
