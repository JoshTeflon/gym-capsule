import React from 'react'
import Image from 'next/image'
import { CurveArrow } from '../../svg'
import iPhoneBooking from '../../../assets/images/iPhone11Booking.svg'

const UseCapsules: React.FC = () => {
    const uses = [
        {
            id: 1,
            desc: 'You can browse through hundreds of classes, gyms and activities on the Gym Capsule app and book a session using the app.'
        },
        {
            id: 2,
            desc: 'Once you reserve a slot for an activity or for a visit, the set amount is deducted from your balance.'
        },
        {
            id: 3,
            desc: 'You can top up as frequently as you\'d like to.'
        },
    ]

    return (
        <div className='w-full bg-[#F5F5F5] py-8'>
            <div className='layout-wrapper'>
                <div className='text-center max-w-[40rem] mx-auto'>
                    <h2 className='text-[2.5rem] leading-[49px] tracking-[-0.014em] font-medium'>
                        How to use your <span className='gradient-text'>capsules</span>
                    </h2>
                    <p className='text-text-300 text-xl leading-8'>
                        For every activity initiated on the Gym Capsule app there are specific amounts of capsules required.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center py-8'>
                    <Image src={iPhoneBooking} alt='' />
                    <CurveArrow className='hidden lg:block lg:mx-8 xl:mx-12' />
                    <ul>
                        {
                            uses.map((x: any) => {
                                return (
                                    <li className='max-w-[27rem] py-8 lg:py-16' key={x.id}>
                                        <div className='flex items-center'>
                                            <span className='text-[rgba(217,217,217,0.4)] text-7xl font-semibold mr-12'>
                                                {x.id}
                                            </span>
                                            <p className='text-text-300 text-base'>{x.desc}</p>
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

export default UseCapsules