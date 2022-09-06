import React from 'react'

import './Button.scss';

interface IButton {
  className?: string;
  children: React.ReactNode | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

const Button = ({ children, className = '', onClick }: IButton) => {
  return (
    <button onClick={onClick} className={`button${className}`}>{children}</button>
  )
}

export default Button
