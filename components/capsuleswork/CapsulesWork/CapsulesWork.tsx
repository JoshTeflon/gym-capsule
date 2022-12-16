import Image from 'next/image'
import React from 'react'
import HIITSession from '../../../assets/images/hiit-session.svg'
import MassageSession from '../../../assets/images/massage-session.svg'
import WeightLifting from '../../../assets/images/weight-lifting.svg'

const CapsulesWork: React.FC = () => {
    const works = [
        {
            image: HIITSession
        },
        {
            image: MassageSession
        },
        {
            image: WeightLifting
        }
    ]

    return (
        <div className='w-full py-8'>
            <div className='layout-wrapper flex flex-col lg:flex-row items-center justify-between px-0 lg:px-8 xl:px-12'>
                <div className='lg:max-w-[30rem] mx-auto'>
                    <h2 className='text-[2.5rem] leading-[49px] tracking-[-0.014em] font-medium'>
                        How your <span className='gradient-text'>capsules</span> work
                    </h2>
                    <p className='text-text-300 text-xl leading-8'>
                        Capsules can be used to book a class or appointment. Each different activity requires a different amount of capsules. Factors such as location, partner, length of activity etc determine what the deduction is.
                    </p>
                </div>
                <div
                    className='border border-[#E8E8E8] rounded-[18px] my-8 lg:my-0 pt-8 pb-2 px-6 mx-auto flex flex-col items-center justify-center'
                >
                    {
                        works.map((x: any, index: number) => {
                            return (
                                <Image
                                    key={index}
                                    src={x.image}
                                    alt=''
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CapsulesWork