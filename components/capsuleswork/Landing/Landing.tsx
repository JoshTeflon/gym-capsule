import React from 'react'
import Image from 'next/image'
import JoinUsers from '../../../assets/images/join-users.svg'
import { StarGradient, ArrowRight, GetGymCapsule, Graph, LinkIcon, StarCross } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper py-8 flex flex-col lg:flex-row justify-between'>
            <div>
                <StarGradient className='ml-[80%] mt-0 lg:mt-4 mb-8' />
                <h1 className='text-[2.75rem] sm:text-7xl lg:text-5xl xl:text-7xl leading-[112%]'>
                    <span>What are</span>
                    <br />
                    <span className='gradient-text font-bold'>Capsules?</span>
                </h1>
                <div className='max-w-[13.5rem] my-8'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center self-start'>
                        <Image src={JoinUsers} alt='join users' />
                        <span className='text-base font-medium ml-3'>Join 3,000+ users</span>
                    </div>
                    <GetGymCapsule className='hidden md:block md:mt-8 lg:mt-24 mr-8 animate-spin-chill' />
                </div>
            </div>
            <div className='flex my-6'>
                <div
                    className='bg-[#FAF9F9] w-[95%] sm:w-3/4 mx-auto lg:mx-0 lg:min-w-[24rem] xl:min-w-[28rem] lg:max-w-[24rem] xl:max-w-[28rem] h-[28rem] flex flex-col justify-between py-14 rounded-xl'
                >
                    <div className='w-4/5 sm:w-[90%] mx-auto min-w-[20rem] -ml-4 sm:-ml-20 bg-white shadow-card-shadow p-8 flex items-center rounded-xl'>
                        <div className='w-[4.5rem] xl:w-[5.5rem] h-[4.5rem] xl:h-[5.5rem] bg-[#FFF2F2] flex items-center justify-center rounded-full'>
                            <Graph />
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-text-700 text-lg xl:text-2xl font-medium capitalize mb-3'>Amount Deposited</h3>
                            <span className='text-3xl xl:text-[2.5rem] font-semibold tracking-[-0.02em]'>₦100,000</span>
                        </div>
                    </div>
                    <div className='w-4/5 sm:w-[90%] mx-auto min-w-[20rem] -mr-4 sm:-mr-20 bg-primary shadow-card-shadow p-8 flex items-center rounded-xl'>
                        <div className='w-[4.5rem] xl:w-[5.5rem] h-[4.5rem] xl:h-[5.5rem] bg-[rgba(255,255,255,0.2)] flex items-center justify-center rounded-full'>
                            <LinkIcon />
                        </div>
                        <div className='ml-6'>
                            <h3 className='text-[#EDC1BC] text-lg xl:text-2xl font-medium capitalize mb-3'>Capsules Recieved</h3>
                            <span className='text-white text-3xl xl:text-[2.5rem] font-semibold tracking-[-0.02em]'>1,000</span>
                        </div>
                    </div>
                </div>
                <StarCross className='hidden md:block md:my-14 md:mx-4 xl:mx-8' />
            </div>
        </div>
    </div>
  )
}

export default Landing
