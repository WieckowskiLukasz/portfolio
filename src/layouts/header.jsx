import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import whiteLogo  from '../images/logo/whiteLogo.svg';
import blackLogo  from '../images/logo/blackLogo.svg';

const Header = () =>{
  const [pageScrolled, setPageScrolled] = useState(false);
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const [pageMobile, setpageMobile] = useState(false);

  useEffect(() => {
    handleWidth();
  }, [pageMobile]);
  useEffect(() => window.addEventListener('scroll', handleScroll));
  useEffect(() => window.addEventListener('resize', handleWidth));

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
  };

  const handleNavLinkClick = () => {setMenuMobileActive(false);};

  const header = pageScrolled ? 
  'header header--scrolled' 
    : 'header';
  const logoSrc = pageScrolled ?
    blackLogo 
    : whiteLogo;
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
  const hamburger = pageScrolled ? 
    'navigation__link  navigation__hamburger  navigation__hamburger--black'
    : 'navigation__link  navigation__hamburger navigation__hamburger--white';

  return(
    <div className={header}>
      <div className='header__content'>
      <div>
          <NavLink to='/'><img src={logoSrc} alt='logo' className='logo'></img></NavLink>
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
                <NavLink to='/skills'>Umiejętności</NavLink>
            </li>
            <li 
              onClick={()=> handleNavLinkClick()} 
              className={navLink}>
                <NavLink to='/kontakt'>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
        <div onClick = {handleHamburgerBtn} className={hamburger}><i className={hamburgerIcon}></i></div>
      </div>
    </div>
  );
};

export default Header;