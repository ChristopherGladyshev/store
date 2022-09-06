import React from 'react';
import { Link, Image, Input } from '../../elements';
import logo from '../../images/logo.png';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header__container container">
        <Link href={'/store'} classes={'header-link'} >
          <Image src={logo} />
        </Link>

        <div className='header__search'>
          <Input type='text'/>
        </div>

        <nav className='header__link-wraapper'>
          <Link href={'/store/listing'} classes={'header-link header__link'} >Каталог</Link>
          <Link href={'/store/basket'} classes={'header-link header__link'} >Корзина</Link>
          <Link href={'/store'} classes={'header-link header__link'} >Избранное</Link>
          <Link href={'/store'} classes={'header-link header__link'} >Войти</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
