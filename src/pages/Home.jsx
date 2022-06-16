import React from 'react';
import home from '../images/backgrounds/home.jpg';

export default function Home() {
  return (
    <>
        <div className='background-image' style={{
        backgroundImage:`url(${home})`,
        filter: `brightness(90%)`,
      }}></div>
    </>
  )
}
