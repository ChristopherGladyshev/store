import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../elements';
import logo from '../../images/logo.png';
import { lock, unlock } from 'tua-body-scroll-lock'

import './Header.scss';

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const ref = useRef(null);
  const burgerClick = () => {
    setIsNav(!isNav);
    if (isNav) unlock(ref.current);
    else lock(ref.current);
  }

  return (
    <header>
      <div className="container header">
        <Link className='header-link' to={'/'}>
          <Image src={logo} />
        </Link>
        <div className='burger' onClick={burgerClick}></div>
        <nav onClick={burgerClick} ref={ref}
          className={`header__link-wraapper ${isNav ? 'header__link-wraapper--active' : ''}`}>
          <Link className='header-link header__link' to={'/listing'}>
            Каталог
          </Link>
          <Link className='header-link header__link' to={'/basket'}>
            Корзина
          </Link>
          <Link className='header-link header__link' to={'/store'}>
            Избранное
          </Link>
        </nav>
      </div>
    </header >
  )
}

export default Header;
