import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '../..';
import { Image, Link, Button } from '../../elements';

import './MiniProductCard.scss';

interface IMiniProductCard {
  href: string;
  urlImage: string;
  className?: string;
  price: string;
  priceOld: string;
  name: string;
}

const MiniProductCard = ({ href, urlImage, className, price, priceOld, name }: IMiniProductCard) => {
  const { store } = useContext(Context);
  const addBasket = () => {
    if (!store.basket.counter) return store.setBasket({counter: 1})
    store.setBasket({counter: ++store.basket.counter})
  }

  return (
    <div className='mini-card'>
      <div className='mini-card__wrapper'>
        <Link href={href} classes={className}>
          <Image className='mini-card__image' src={urlImage} />
        </Link>
        <div className='mini-card__footer'>
          <div className='mini-card__price-wrapper'>
            <span className='mini-card__price'>{price}</span><span className='mini-card__price-old'>{priceOld}</span>
          </div>
          <div className='mini-card__name'>
            {name}
          </div>
          <div className='mini-card__button '>
            <Button className='--add-to-bascet' onClick={addBasket}>В корзину</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(MiniProductCard);
