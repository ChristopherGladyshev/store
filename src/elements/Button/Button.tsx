import React from 'react'

import './Button.scss';

interface IButton {
  className: string;
  children: React.ReactNode | string;
}

const Button = ({ children, className }: IButton) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button
