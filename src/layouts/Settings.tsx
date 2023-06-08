import React, { useContext } from 'react';
import pl from '../flags/pl.svg';
import en from '../flags/en.svg';
import { AppContext } from '../AppContext.tsx';

export default function Settings({ pageScrolled }) {
  const {lang, setLanguage } = useContext(AppContext);

  const handleLangSwitch = () =>{
    if(lang === 'en') setLanguage('pl');
    else setLanguage('en');
  };

  const langSwitcherPosition = (lang === 'pl') ?
    '0'
    : '50%';
  const settingsPageScrolled = pageScrolled ? 
    'settings settings--scrolled'
    : 'settings';

  return (
    <div className={settingsPageScrolled}>
      <div className='settings__switch' onClick={()=> handleLangSwitch()}>
        <div className='settings__active-option' style={{left: langSwitcherPosition}}></div>
        <img src={pl} alt='flag'/>
        <img src={en} alt='flag'/>
      </div>
    </div>
  );
};
