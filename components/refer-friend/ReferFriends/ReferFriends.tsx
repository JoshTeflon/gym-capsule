import React from 'react'
import { HeartPlus, Bottle, StarGradient } from '../../svg'

const ReferFriends: React.FC = () => {

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8 sm:px-4 lg:px-8 xl:px-16 flex flex-col lg:flex-row lg:items-center justify-between'>
                <div className='lg:max-w-[25rem] xl:max-w-[30rem]'>
                    <h2 className='gradient-text text-[2.5rem] leading-[49px] font-medium'>
                        Refer Your Friends
                    </h2>
                    <p className='text-text-300 text-lg xl:text-xl leading-8 mt-2'>
                        Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like
                    </p>
                </div>
                <div className='relative'>
                    <StarGradient className='absolute bottom-8 -left-40' />
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
                </div>
            </div>
        </div>
    )
}

export default ReferFriends
