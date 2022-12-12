import React from 'react'
import s from './Navbar.module.css'
import cn from 'clsx'
import Link from 'next/link'
import { ArrowRight, BrandLogo } from '../../svg'
import { Button } from '../../ui'

const Navbar: React.FC = () => {
  const navLinks = [
    {
        item: 'for companies',
        href: '/'
    },
    {
        item: 'for employees',
        href: '/'
    },
    {
        item: 'how capsules work',
        href: '/'
    },
  ]

  return (
    <nav className='w-full py-8'>
        <div className='layout-wrapper flex items-center justify-between'>
            <div className='xl:w-1/3 text-brand'><BrandLogo /></div>
            <div className='xl:w-2/3 hidden lg:flex items-center justify-between'>
                <ul className='flex items-center'>
                    {
                        navLinks.map((i: any) => {
                            return (
                                <li className='text-base capitalize px-4' key={i.href}>
                                    <Link href={i.href}>{i.item}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
