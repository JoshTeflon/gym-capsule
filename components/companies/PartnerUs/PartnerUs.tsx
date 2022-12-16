import React from 'react'
import { Athlete, FirstAid, Yoga } from '../../svg'

const PartnerUs: React.FC = () => {
    const things = [
        {
            icon: <Athlete />,
            desc: 'Access to hundreds of gyms and fitness classes across 50+ cities globally.'
        },
        {
            icon: <Yoga />,
            desc: 'Access to wellness centres for activities like massages and meditation.'
        },
        {
            icon: <FirstAid />,
            desc: 'Access to professionals via in-app text and voice - fitness coaches, dieticians, and medical doctors.'
        },
    ]

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8 lg:py-12'>
                <h2 className='text-[2.5rem] leading-[54px] font-medium py-4'>
                    Here are a few things your employees get when you
                    <br className='hidden lg:block' />
                    <span className='gradient-text ml-2 lg:ml-0'>partner with us</span>
                </h2>
                <div>
                    <ul className='flex flex-col lg:flex-row justify-between'>
                        {
                            things.map((x: any, i: number) => {
                                return (
                                    <li className='w-full lg:w-[32%] bg-bg-light py-10 px-8 my-4 rounded-lg' key={i}>
                                        <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                            {x.icon}
                                        </div>
                                        <p className='text-2xl leading-[30px] py-3'>{x.desc}</p>
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

export default PartnerUs
