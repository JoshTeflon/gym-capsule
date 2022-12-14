import React from 'react'
import s from './Navbar.module.css'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRight, BrandLogo } from '../../svg'
import { Button } from '../../ui'

const Navbar: React.FC = () => {
  const navLinks = [
    {
        item: 'for companies',
        href: '/for-companies'
    },
    {
        item: 'for employees',
        href: '/for-employees'
    },
    {
        item: 'how capsules work',
        href: '/how-capsules-work'
    },
  ]

  const router = useRouter()

  return (
    <nav className='w-full py-8'>
        <div className='layout-wrapper flex items-center justify-between'>
            <Link href='/'>
                <div className='xl:w-1/3 text-brand'>
                    <BrandLogo />
                </div>
            </Link>
            <div className='xl:w-2/3 hidden lg:flex items-center justify-between'>
                <ul className='flex items-center'>
                    {
                        navLinks.map((i: any) => {
                            return (
                                <li className='px-5' key={i.item}>
                                    <Link
                                        href={i.href}
                                        className={
                                            cn(
                                                'text-base capitalize hover:text-primary',
                                                router.pathname === i.href && 'text-primary font-semibold'
                                            )
                                        }
                                    >
                                        {i.item}
                                    </Link>
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
