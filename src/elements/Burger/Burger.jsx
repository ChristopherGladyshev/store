import React from 'react'
import './Burger.scss';

const Burger = ({ isNav, onClick }) => {
  return (
    <div className={`burger ${isNav ? 'burger--active' : ''}`} onClick={onClick}>
      <span className='burger__line burger__line--top'></span>
      <span className='burger__line burger__line--center'></span>
      <span className='burger__line burger__line--bottom'></span>
    </div>
  )
}

export default Burger;
