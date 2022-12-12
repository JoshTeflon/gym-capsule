import React from 'react'
import Link from 'next/link'
import cn from 'clsx'
import s from './Footer.module.css'
import Image from 'next/image'
import { BrandLogo } from '../../svg'
import AndroidImage from '../../../assets/images/android-download.png'
import AppleImage from '../../../assets/images/apple-download.png'

const Footer: React.FC = () => {
  const footerItems = [
    {
        header: 'Support',
        links: [
            {
                item: 'Contact Us',
                href: '/'
            },
            {
                item: 'Help',
                href: '/'
            }
        ]
    },
    {
        header: 'Company',
        links: [
            {
                item: 'About Us',
                href: '/'
            },
            {
                item: 'Careers',
                href: '/'
            },
            {
                item: 'Press',
                href: '/'
            },
        ]
    },
    {
        header: 'Capsule for Companies',
        links: [
            {
                item: 'Refer your company',
                href: '/'
            },
            {
                item: 'Terms and Conditions',
                href: '/'
            },
            {
                item: 'Terms of Service',
                href: '/'
            },
        ]
    },
  ]

  const download = [
    {
        image: AndroidImage,
        href: '/',
        alt: 'android download'
    },
    {
        image: AppleImage,
        href: '/',
        alt: 'apple download'
    }
  ]

  return (
    <footer className='w-full bg-bg-light'>
        <div className='layout-wrapper pt-12 pb-16 flex flex-col md:flex-row items-start md:justify-between'>
            <div className='md:w-1/4 text-primary'><BrandLogo /></div>
            <div className='md:w-1/2 py-6 md:py-0 flex flex-col md:flex-row items-start md:justify-between'>
                {
                    footerItems.map((i: any) => {
                        return (
                            <div className='py-3 md:py-0' key={i.header}>
                                <h1 className='text-text-300 text-sm font-semibold'>{i.header}</h1>
                                <ul>
                                    {
                                        i.links.map((j: any) => {
                                            return (
                                                <li className='text-text-400 text-sm pt-3 md:pt-6' key={j.href}>
                                                    <Link href={j.href}>{j.item}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className='md:w-1/4 flex flex-col items-center'>
                <h1 className='text-text-300 text-lg leading-6 font-semibold'>Get GymCapsule</h1>
                <ul>
                    {
                        download.map((k: any) => {
                            return (
                                <li className='py-2' key={k.href}>
                                    <Image width={144} src={k.image} alt={k.alt}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer