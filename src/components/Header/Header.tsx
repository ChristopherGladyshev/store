import React from 'react';
import { Link, Image } from '../../elements';
import logo from '../../images/logo.png';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="header__container container">
        <Link href={'/'} classes={'header-link header__link'} >
          <Image src={logo} />
        </Link>
        <div>
          <Link href={'/listing'} classes={'header-link header__link'} >Каталог</Link>
          <Link href={'/basket'} classes={'header-link header__link'} >Корзина</Link>
          <Link href={'/'} classes={'header-link header__link'} >Избранное</Link>
          <Link href={'/'} classes={'header-link header__link'} >Войти</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
