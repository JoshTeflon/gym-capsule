import React from 'react'
import cn from 'clsx'
import { Download, Cycle, Bottle } from '../../svg'

const HowItWorks: React.FC = () => {
    const works = [
        {
            id: 1,
            icon: <Download />,
            descBfr: 'Download the',
            gradText: 'Gym Capsule App',
            descAft: 'and complete the sign up process'
        },
        {
            id: 2,
            icon: <Cycle />,
            descBfr: 'Choose from',
            gradText: 'thousands of gyms,',
            descAft: 'studios , spas or select a wellness expert to talk to'
        },
        {
            id: 3,
            icon: <Bottle />,
            descBfr: 'You can',
            gradText: 'top up your capsules',
            descAft: 'as you\'d like to if you max out the plan given by your employer'
        }
    ]

    return (
        <div className='w-full py-8'>
            <div className='layout-wrapper'>
                <h2 className='text-text-200 text-5xl leading-[59px] font-semibold text-center'>Here’s how it works</h2>
                <div className='my-4 lg:my-8'>
                    <ul className='flex flex-col lg:flex-row items-center justify-between'>
                        {
                            works.map((i: any) => {
                                return (
                                    <li
                                        className={cn(
                                            'relative w-full lg:w-[35.5%] border-l-0 lg:border-l-2 border-bg-light py-12',
                                            i.id === 1 && 'lg:w-[29%] border-none'
                                        )}
                                        key={i.id}
                                    >
                                        <div className={cn('w-full lg:pl-12', i.id === 1 && 'lg:pl-0 lg:pr-4')}>
                                            <div className='w-10 h-10 flex items-center justify-center text-primary bg-[#FFF2F2] rounded-lg'>
                                                {i.icon}
                                            </div>
                                            <p className='text-2xl leading-[30px] font-medium mt-6'>
                                                {i.descBfr} <span className='gradient-text'>{i.gradText}</span> {i.descAft}
                                            </p>
                                            <span
                                                className={cn(
                                                    'text-[rgba(217,217,217,0.4)] text-[7rem] leading-[138px] font-semibold absolute -bottom-9 -z-10',
                                                    i.id === 1 && '-left-3 lg:-left-6',
                                                    (i.id === 2 || i.id === 3)  && ' -left-4 lg:left-7'
                                                )}
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
            </div>
        </div>
    )
}

export default HowItWorks