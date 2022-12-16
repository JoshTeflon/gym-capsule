import React from 'react'
import { StarCross, ArrowRight } from '../../svg'
import { Button } from '../../ui'

const EmployeePlan: React.FC = () => {
    const plans = [
        {
            plan: 'basic',
            capsules: '100 capsules',
            price: 'N10,000/month'
        },
        {
            plan: 'gold',
            capsules: '200 capsules',
            price: 'N10,000/month'
        },
        {
            plan: 'premium',
            capsules: '300 capsules',
            price: 'N10,000/month'
        },
        {
            plan: 'enterprise',
            capsules: 'Contact us',
            price: ''
        },
    ]

    return (
        <div className='w-full bg-[#F4F2F2]'>
            <div className='layout-wrapper py-8'>
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-[2.5rem] leading-[54px] font-medium'>
                            A plan for every <span className='gradient-text'>employee</span>
                        </h2>
                        <p className='text-text-300 text-xl py-2'>You set the limit per employee, we take care of the rest</p>
                    </div>
                    <StarCross className='hidden md:block ml-[20%]' />
                </div>
                <div className='my-4'>
                    <ul className='flex flex-col lg:flex-wrap lg:flex-row items-center justify-between'>
                        {
                            plans.map((i: any) => {
                                return (
                                    <li
                                        className='bg-white w-full lg:w-[48%] xl:w-[23%] text-center py-8 px-2 my-4 border border-[#E8E8E8] rounded-[18px]'
                                        key={i.plan}
                                    >
                                        <h3 className='text-text-200 opacity-60 text-sm font-medium uppercase leading-[130%] tracking-[0.3em] py-4'>{i.plan}</h3>
                                        <h4 className='text-text-200 text-xl font-semibold leading-[130%] py-2'>{i.capsules}</h4>
                                        <p className='text-xs font-medium pb-4'>{i.price}</p>
                                        <div className='w-4/5 mx-auto'>
                                            <Button>Learn More<ArrowRight className='ml-2' /></Button>
                                        </div>
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

export default EmployeePlan
