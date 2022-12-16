import cn from 'clsx'
import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: string
  placeholder?: string
  onChange?: (...args: any[]) => any
  onClick?: (...args: any[]) => any
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    children,
    placeholder,
    onChange,
    onClick,
    type,
    ...rest
  } = props

  const rootClassName = cn(type != 'radio' && s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  const handleOnClick = (e: any) => {
    if (onClick) {
      onClick(e.target.value)
    }
    return null
  }

  return (
    <label>
      <input
        className={cn(rootClassName)}
        onChange={handleOnChange}
        onClick={handleOnClick}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type={type}
        {...rest}
      />
    </label>
  )
}

export default Input
