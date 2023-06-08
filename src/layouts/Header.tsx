import React, { useEffect, useState, useLayoutEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo  from '../images/logo/logo.svg';
import { useLocation } from 'react-router-dom';
import Settings from './Settings.tsx';

const Header = () =>{
  const [pageScrolled, setPageScrolled] = useState(false);
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState<boolean>(false);
  const [pageMobile, setpageMobile] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    handleWidth();
  }, [pageMobile]);
  useEffect(() => window.addEventListener('scroll', handleScroll));
  useEffect(() => window.addEventListener('resize', handleWidth));
  useEffect(() => {window.scrollTo(0,0); setSettingsActive(false)},[location]);
  
  const handleScroll = () =>{
    if(window.scrollY > 50) setPageScrolled(true);
    else setPageScrolled(false);
  };
  const handleWidth = () =>{
    if(window.innerWidth < 901) setpageMobile(true);
    else {setpageMobile(false); setMenuMobileActive(false)};
  };
  const handleHamburgerBtn = (e) =>{
    e.preventDefault();
    setMenuMobileActive(prev => !prev);
    setSettingsActive(false);
  };

  const handleNavLinkClick = () => {setMenuMobileActive(false);};
  const handleSettings = () => {setSettingsActive(prev => !prev); setMenuMobileActive(false)};

  const header = pageScrolled ? 
  'header header--scrolled' 
    : 'header';
  const navLink = (pageScrolled && !pageMobile) ? 
    'navigation__link navigation__link--scrolled' 
    : pageMobile ? 
      'navigation__link navigation__link--mobile' 
      : 'navigation__link ';
  const menuSwitch = pageMobile ? 
    menuMobileActive ? 
      'navigation__links  navigation__links--mobile navigation__links--active'
      : 'navigation__links  navigation__links--mobile'
    : 'navigation__links';
  const hamburgerIcon = menuMobileActive ? 
    'las la-times'
    : 'las la-bars';
  const setupIconClassName = pageScrolled ? 
    'navigation__link navigation__setup-icon navigation__setup-icon--scrolled'
    : 'navigation__link navigation__setup-icon';

  return(
    <div className={header}>
      {settingsActive &&
        <Settings pageScrolled={pageScrolled}/> 
      }
      <div className='header__content'>
      <div>
          <NavLink to='/'>
            <img 
              src={logo} 
              alt='logo' 
              className='logo'
            />
          </NavLink>
        </div>
        <nav className='navigation'>
          <ul className={menuSwitch}>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/'>Start</NavLink>
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/o-mnie'>O mnie</NavLink>
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/umiejetnosci'>Umiejętności</NavLink>
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/projekty'>Projekty</NavLink>
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/kontakt'>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
        <div 
          onClick={()=> handleSettings()} 
          className={setupIconClassName}
        >
          <i className='las la-cog '/>
        </div> 
        <div 
          onClick = {handleHamburgerBtn} 
          className='navigation__link  navigation__hamburger navigation__hamburger--white'
        >
          <i className={hamburgerIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Header;