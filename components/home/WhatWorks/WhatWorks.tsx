import React from 'react'
import { Button } from '../../ui'
import { ArrowRight, Company, Person, StarDash, StarCross } from '../../svg'
import Link from 'next/link'

const WhatWorks: React.FC = () => {
    const works = [
        {
            item: 'Are you a company?',
            desc: 'Improve the mental and physical well-being of your employees and see your ratings go through the roof.',
            href: '/for-companies',
            icon: <Company />
        },
        {
            item: 'Are you an employee?',
            desc: 'Get access to thousands of top-rated gyms, fitness studios, salons, spas and more courtesy of your employer',
            href: '/for-employees',
            icon: <Person />
        },
        {
            item: 'Do you work for yourself?',
            desc: 'You thought we\'d leave you out. Nope ! You have all the same access employees of big firms get',
            href: '/for-employees',
            icon: <StarDash />
        }
    ]

    return (
        <div className='w-full py-8'>
            <div className='layout-wrapper py-8'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[2.5rem] leading-[54px] font-medium'>
                        <span className='gradient-text'>You choose </span>
                        what works for you
                        <br />
                        and your company
                    </h2>
                    <StarCross className='hidden lg:block mx-16 xl:mx-20' />
                </div>
                <div className='my-4'>
                <ul className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                    {
                        works.map((i: any) => {
                            return (
                                <li className='w-full lg:w-[33%] xl:w-[32%] bg-bg-light py-10 lg:py-8 xl:py-10 px-8 lg:px-4 xl:px-8 mb-8 lg:mb-0 rounded-lg' key={i.item}>
                                    <div className='bg-primary w-12 h-12 flex items-center justify-center rounded-full'>{i.icon}</div>
                                    <div className='py-8'>
                                        <h3 className='text-2xl font-medium'>{i.item}</h3>
                                        <p className='text-[#70696E] text-lg'>{i.desc}</p>
                                    </div>
                                    <Button>
                                        <Link className='w-full h-full flex items-center justify-center' href={i.href}>
                                            Get Started<ArrowRight className='ml-2' />
                                        </Link>
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}

export default WhatWorks
