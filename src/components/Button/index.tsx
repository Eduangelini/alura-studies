import React from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button className={style.botao} type={type}>
      {children}
    </button>
  )
}

export default Button