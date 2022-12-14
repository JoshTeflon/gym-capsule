import React from 'react'
import Image from 'next/image'
import LandingImage from '../../../assets/images/landing-image.svg'
import JoinUsers from '../../../assets/images/join-users.svg'
import { ArrowRight, GetGymCapsule, QuadCircle, StarCross, StarGradient } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper flex flex-col lg:flex-row lg:items-center justify-between'>
            <div className='flex-grow'>
                <StarGradient className='ml-[50%] lg:ml-[35%] my-4 lg:my-8' />
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-5xl sm:text-7xl'>
                        <span className='whitespace-nowrap'>One Subcription.</span>
                        <br />
                        <span className='whitespace-nowrap'>One App.</span>
                        <br />
                        <div className='font-bold'>
                            <span className='gradient-text whitespace-nowrap'>One Thousand</span>
                            <br />
                            <span className='gradient-text whitespace-nowrap'>Ways to Stay</span>
                            <br /> 
                            <span className='gradient-text whitespace-nowrap'>Healthy.</span>
                        </div>
                    </h1>
                    <GetGymCapsule className='hidden md:block mr-16' />
                </div>
                <div className='max-w-[13.5rem] my-8'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
                <div className='flex items-center'>
                    <Image src={JoinUsers} alt='join users' />
                    <span className='text-base font-medium ml-3'>Join 3,000+ users</span>
                </div>
                <StarCross className='my-6 ml-[95%] lg:ml-[70%]' />
            </div>
            <div className='relative mx-auto'>
                <QuadCircle className='absolute left-0 top-[13%]' />
                <Image src={LandingImage} alt="" width={420} priority />
            </div>
        </div>
    </div>
  )
}

export default Landing
