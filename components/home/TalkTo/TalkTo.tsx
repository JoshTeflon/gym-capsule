import React from 'react'
import Image from 'next/image'
import WeightLossExpert from '../../../assets/images/weight-loss-experts.svg'
import Doctors from '../../../assets/images/doctors.svg'
import FitnessCoaches from '../../../assets/images/fitness-coaches.svg'
import Dietician from '../../../assets/images/dietician.svg'

const TalkTo: React.FC = () => {
    const help = [
        {
            item: 'Weight Loss Experts',
            image: WeightLossExpert
        },
        {
            item: 'Doctors',
            image: Doctors
        },
        {
            item: 'Fitness Coaches',
            image: FitnessCoaches
        },
        {
            item: 'Dietician',
            image: Dietician
        },
    ]

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8'>
                <div>
                    <h2 className='text-[2.5rem] leading-[54px] font-medium'>
                        <span>And if they need more help,</span>
                        <br />
                        <span className='gradient-text'>they can talk to;</span>
                    </h2>
                    <p className='text-text-300 text-xl'>Talk to Weight loss experts, Doctors , Fitness Coaches , Dieticians and more.</p>
                </div>
                <div className='py-12'>
                    <ul className='flex flex-wrap items-center justify-center'>
                        {
                            help.map((i: any) => {
                                return (
                                    <li className='relative w-full max-w-[18rem] rounded-lg my-2 mr-4' key={i.item}>
                                        <Image className='rounded-lg' src={i.image} alt={i.item} />
                                        <div className='absolute left-0 right-0 bottom-0 m-7 p-2 text-center text-primary text-base font-medium bg-white border border-text-400 rounded-lg'>
                                            {i.item}
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

export default TalkTo
