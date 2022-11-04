import { observer } from 'mobx-react-lite'
import React from 'react'
import { MiniProductCard } from "../../components";
import test from '../../images/test.jpg';

import './Listing.scss';

const Listing = () => {
  const arr: any = [];
  const cards = () => {
    for (let index = 0; index < 10; index++) {
      arr.push(<MiniProductCard href='/' urlImage={test} price='999' priceOld='1500' name='Ведро с тряпкой' />);
    }
  }
  cards();
  return (
    <div className='listing__container container'>
      {arr}
    </div>
  )
}

export default observer(Listing)
