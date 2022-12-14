import React from 'react'
import Image from 'next/image'
import PromoterBg from '../../../assets/images/net-promoter.svg'
import { Uh, Sad, StraightFace, Smiley, StarryEyes } from '../../svg'

const NetPromoter: React.FC = () => {
    const emojis = [
        {
            emot: <Uh />
        },
        {
            emot: <Sad />
        },
        {
            emot: <StraightFace />
        },
        {
            emot: <Smiley />
        },
        {
            emot: <StarryEyes />
        },
    ]

    return (
        <div className='w-full'>
            <div className='flex flex-col lg:flex-row items-center 2xl:layout-wrapper'>
                <div className='w-full lg:w-1/2'>
                    <Image src={PromoterBg} alt="promoters" />
                </div>
                <div className='w-full lg:w-1/2 max-w-xl py-16 px-8 lg:px-16'>
                    <h2 className='text-[2.5rem] leading-[54px] font-medium max-w-md'>
                        Get your Net promoter score  <span className='gradient-text'>through the roof.</span>
                    </h2>
                    <p className='text-text-300 text-xl py-4'>Help your employees live happier, more productive lives and watch your business soar</p>
                    <ul className='flex items-center'>
                        {
                            emojis.map((x: any, i: number) => {
                                return (
                                    <li className='pr-3' key={i}>{x.emot}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NetPromoter
