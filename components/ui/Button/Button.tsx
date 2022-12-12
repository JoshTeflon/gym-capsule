import React, { ButtonHTMLAttributes } from 'react'
import s from './Button.module.css'
import cn from 'clsx'
import { LoadingDots } from '../../ui'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary-outline' | 'naked' | 'link'
    type?: 'submit' | 'reset' | 'button'
    width?: string | number
    loading?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        onClick,
        className,
        variant = 'primary',
        children,
        width,
        loading = false,
        disabled = false,
        style = {},
        ...rest
    } = props

    const rootClassName = cn(
        s.root,
        {
          [s.primary]: variant === 'primary',
          [s.secondaryOutline]: variant === 'secondary-outline',
          [s.link]: variant === 'link',
          [s.naked]: variant === 'naked',
          [s.loading]: loading,
          [s.disabled]: disabled,
        },
        className
      )

    return (
        <button
            onClick={onClick}
            className={rootClassName}
            disabled={disabled}
            style={{
                width,
                ...style,
            }}
            {...rest}
        >
            {children}
            {loading && (
                <i className="pl-2 m-0 flex">
                    <LoadingDots />
                </i>
            )}
        </button>
    )
}

export default Button