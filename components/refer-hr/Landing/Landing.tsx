import React from 'react'
import cn from 'clsx'
import { MessageOut, Form, Message, GetGymCapsule } from '../../svg/'

const Landing: React.FC = () => {
    const works = [
        {
            id: 1,
            icon: <MessageOut />,
            gradText: 'Tell them about Gym Capsule',
            descAft: 'and all the potential benefits your organization would get from partnering'
        },
        {
            id: 2,
            icon: <Form />,
            gradText: '',
            descAft: 'Fill out the below form'
        },
        {
            id: 3,
            icon: <Message />,
            gradText: 'We would get in touch',
            descAft: 'with your HR as soon as we can'
        }
    ]

return (
    <div className='w-full pt-8 lg:pt-12 pb-48 bg-bg-light relative overflow-hidden'>
        <div className='layout-wrapper'>
            <h2 className='text-5xl leading-[59px] text-center font-semibold'>
                <span className='gradient-text'>Refer to your HR</span> to Gym Capsule in 3..2..1..
            </h2>
            <div className='my-4 lg:my-8'>
                <ul className='flex flex-col lg:flex-row justify-between'>
                    {
                        works.map((i: any) => {
                            return (
                                <li
                                    className='w-full lg:w-[32%] h-full my-12 lg:my-0 px-0 lg:px-6'
                                    key={i.id}
                                >
                                    <div className='relative w-full'>
                                        <div className='w-10 h-10 flex items-center justify-center text-primary bg-primary rounded-lg'>
                                            {i.icon}
                                        </div>
                                        <p className='text-2xl leading-[30px] font-medium mt-6'>
                                            <span className='gradient-text'>{i.gradText}</span> {i.descAft}
                                        </p>
                                        <span
                                            className='text-[rgba(217,217,217,0.4)] text-[7rem] leading-[138px] font-semibold absolute -left-5 -bottom-[5.5rem]'
                                        >
                                            {i.id}
                                        </span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='absolute left-12 lg:left-24 -bottom-12'>
                <GetGymCapsule />
            </div>
        </div>
    </div>
  )
}

export default Landing