import React from 'react'
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
  const [ mobileNav, setMobileNav ] = React.useState<Boolean>(false)

  return (
    <nav className={cn('w-full py-8', router.pathname === '/refer-hr' && 'bg-bg-light')}>
        <div className='layout-wrapper flex items-center justify-between'>
            <Link href='/'>
                <div className='lg:w-[25%] xl:w-1/3 text-brand'>
                    <BrandLogo />
                </div>
            </Link>
            <div className='lg:w-[75%] xl:w-2/3 hidden lg:flex items-center justify-between'>
                <ul className='flex items-center'>
                    {
                        navLinks.map((i: any) => {
                            return (
                                <li className='px-4 xl:px-5' key={i.item}>
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
            <Button
                variant='naked'
                className={cn('lg:!hidden flex-col !items-start !p-2 focus:!bg-bg-light', mobileNav && '!bg-bg-light')}
                onClick={() => setMobileNav(!mobileNav)}
            >
                {
                    [...Array(3)].map((x: any, index: number) => {
                        return (
                            <span
                                className={cn('w-6 h-[1px] bg-text-400 my-[3px]', index === 2 && 'w-4')}
                                key={index}
                            ></span>
                        )
                    })
                }
            </Button>
        </div>
        <nav className={cn(
            'lg:hidden fixed top-24 left-1/2 -translate-x-1/2 w-11/12 rounded-md bg-bg-light shadow-lg transition-all duration-200 ease-in-out max-w-md z-50',
            mobileNav && 'block',
            !mobileNav && 'hidden'
            )}>
            <ul className='flex flex-col items-start space-y-2 px-6 sm:px-8 py-6'>
                {
                    navLinks.map((i: any) => {
                        return (
                            <li className='transition duration-150 py-4 font-medium rounded-md w-full' key={i.item}>
                                <Link
                                    href={i.href}
                                    className={
                                        cn(
                                            'text-base capitalize hover:text-primary',
                                            router.pathname === i.href && 'text-primary font-semibold'
                                        )
                                    }
                                    onClick={() => setMobileNav(false)}
                                >
                                    {i.item}
                                </Link>
                            </li>
                        )
                    })
                }
                <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
            </ul>
        </nav>
    </nav>
  )
}

export default Navbar
