import React from 'react'
import './Input.scss';

interface IInput {
  type: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode | string;
}

const Input = ({ type, placeholder, className, children }: IInput) => {
  return (
    <label>
      {children}
      <input className={`input ${className}`} id={type} placeholder={placeholder}/>
    </label>
  )
}

export default Input
