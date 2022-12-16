import React from 'react'
import { HeartPlus, Bottle, StarCross } from '../../svg'

const WhatYouGet: React.FC = () => {

    return (
        <div className='w-full'>
            <div className='layout-wrapper lg:py-16 lg:pl-16 flex flex-col lg:flex-row lg:items-center justify-between'>
                <div
                    className='bg-[#FAF9F9] w-4/5 mx-auto lg:mx-0 lg:min-w-[20rem] xl:min-w-[25rem] lg:max-w-[20rem] xl:max-w-[25rem] h-[24rem] flex flex-col justify-between py-14 mt-16 lg:my-0 rounded-xl'
                >
                    <div className='w-[90%] mx-auto min-w-[16rem] -ml-8 sm:-ml-16 bg-white shadow-card-shadow p-6 flex items-center rounded-xl'>
                        <div className='w-14 xl:w-[4.5rem] h-14 xl:h-[4.5rem] bg-[#FFF2F2] flex items-center justify-center rounded-full'>
                            <HeartPlus />
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-text-700 text-base xl:text-lg font-medium capitalize'>Total referrals</h3>
                            <span className='text-2xl xl:text-[2rem] font-semibold tracking-[-0.02em]'>15 Friends</span>
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto min-w-[16rem] -mr-8 sm:-mr-16 bg-primary shadow-card-shadow p-6 flex items-center rounded-xl'>
                        <div className='w-14 xl:w-[4.5rem] h-14 xl:h-[4.5rem] bg-[rgba(255,255,255,0.2)] flex items-center justify-center rounded-full'>
                            <Bottle className='text-white' width={42} height={42} />
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-[#EDC1BC] text-base xl:text-lg font-medium capitalize'>Capsules Recieved</h3>
                            <span className='text-white text-2xl xl:text-[2rem] font-semibold tracking-[-0.02em]'>10</span>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[25rem] xl:max-w-[30rem] my-12 lg:my-0'>
                    <h2 className='text-[2.5rem] leading-[49px] font-medium'>
                        <span>What you get for</span>
                        <br className='hidden sm:block' />
                        <span className='gradient-text ml-2 sm:ml-0'>referring your friends</span>
                    </h2>
                    <p className='text-text-300 text-lg xl:text-xl leading-8 mt-2'>
                        For every friend who uses your referral link and becomes a paying Gym Capsule member, you’ll either receive a one-time discount off your next month’s plan or a one-time credit for set number of capsules.
                    </p>
                    <div className='w-full flex justify-end px-12 md:px-24'><StarCross /></div>
                </div>
            </div>
        </div>
    )
}

export default WhatYouGet
