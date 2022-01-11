import React from 'react'
import { Image, Link } from '../../elements';

import './MiniProductCard.scss';

interface IMiniProductCard {
  href: string;
  urlImage: string;
  className?: string;
  price: string;
  priceOld: string;
}

const MiniProductCard = ({ href, urlImage, className, price, priceOld }: IMiniProductCard) => {
  return (
    <div className='mini-card'>
      <Link href={href} classes={className}>
        <Image className='mini-card__image' src={urlImage} />
      </Link>
      <div className='mini-card__price'>
          {price}
      </div>
    </div>
  )
}

export default MiniProductCard
