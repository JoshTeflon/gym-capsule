import React from 'react'
import s from './FavouriteActivities.module.css'
import { Button } from '../../ui'
import { ArrowRight } from '../../svg'

const FavouriteActivities: React.FC = () => {
    const activities = [
        {
            item: 'Fitness',
            desc: 'Yoga, Boxing, Weightlifting, Cycling, Martial Arts, Dance and more '
        },
        {
            item: 'Wellness',
            desc: 'Massages, Sauna, Acupuncture, Meditation, Mental Health and more'
        },
        {
            item: 'Beauty',
            desc: 'Manicures, Pedicures, Facials'
        },
    ]

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8'>
                <h2 className='text-[2.5rem] leading-[54px] font-medium'>
                    Your employees can do all of their <br /> favourite <span className='gradient-text'>activites</span>
                </h2>
                <div className='py-6'>
                    <ul className='flex flex-col lg:flex-row items-center justify-between'>
                        {
                            activities.map((i: any) => {
                                return (
                                    <li className={s.card} key={i.item}>
                                        <h3 className='text-2xl font-medium capitalize'>{i.item}</h3>
                                        <p className='text-[#70696E] text-lg my-2'>{i.desc}</p>
                                        <Button variant='link' className='text-primary !text-sm'>
                                            Learn more<ArrowRight className='ml-2' />
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

export default FavouriteActivities
