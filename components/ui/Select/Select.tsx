import React from 'react'
import cn from 'clsx'
import s from './Select.module.css'
import { CaretDown } from '../../svg'

interface SelectProps {
    className?: string
    placeholder?: string
    options?: Array<any>
    onChange?: (...args: any[]) => any
}

const Select: React.FC<SelectProps> = (props) => {
    const { className, placeholder, options, onChange } = props
    const rootClassName = cn(s.root, {}, className)

    const handleOnChange = (e: any) => {
        if (onChange) {
            onChange(e.target.value)
          }
          return null
    }

    return (
        <label className='relative'>
            <select
                className={rootClassName}
                placeholder={placeholder}
                onChange={handleOnChange}
                required
            >
                <option value="" disabled selected hidden>{placeholder}</option>
                {
                    options?.map((x: any, i: number) => {
                        return (
                            <option value={x} key={i}>
                                {x}
                            </option>
                        )
                    })
                }
            </select>
            <CaretDown className='absolute top-1/2 -translate-y-1/2 right-4 text-[#BEBFC1]' />
        </label>
    )
    }

export default Select