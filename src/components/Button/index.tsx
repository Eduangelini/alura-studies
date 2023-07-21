import React from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={style.botao}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button