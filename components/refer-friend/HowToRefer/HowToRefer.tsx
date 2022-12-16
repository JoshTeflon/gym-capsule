import React from 'react'
import Image from 'next/image'
import cn from 'clsx'
import s from './HowToRefer.module.css'
import iPhone from '../../../assets/images/iPhone11Pro.svg'
import ShareCoupon from '../../../assets/images/share-coupon.svg'

const HowToRefer: React.FC = () => {

    return (
        <div className='w-full py-8'>
            <div className={cn(s.root, 'layout-wrapper relative')}>
                <div className='max-w-[31rem] py-8 sm:py-16 lg:py-0'>
                    <h2 className='text-white text-4xl md:text-[2.5rem] leading-[49px] font-medium mb-2'>
                        How to refer a friend to Gym Capsule
                    </h2>
                    <p className='text-[#E4DFDF] text-lg md:text-xl'>
                        Copy the referral link available in the profile section of your app and share with as many friends as you like
                    </p>
                </div>
                <div className='w-60 lg:w-auto mx-auto pt-8 lg:pt-16'>
                    <Image src={iPhone} alt='iPhone 11' />
                </div>
                <Image
                    className='absolute right-2 sm:right-20 md:right-40 lg:right-4 bottom-0 w-56 sm:w-64 lg:w-72'
                    src={ShareCoupon}
                    alt='coupon share card'
                />
            </div>
        </div>
    )
}

export default HowToRefer
