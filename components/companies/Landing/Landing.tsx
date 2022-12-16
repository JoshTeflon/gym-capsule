import React from 'react'
import Image from 'next/image'
import LandingImage from '../../../assets/images/for-companies-landing.svg'
import JoinUsers from '../../../assets/images/join-users.svg'
import { ArrowRight, GetGymCapsule, QuadCircle, GLogo, StarCross, StarGradient  } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper pt-4 lg:pt-8 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between'>
            <div>
                <StarGradient className='ml-[65%] mt-4 mb-8' />
                <h1 className='text-[2.75rem] sm:text-7xl lg:text-5xl xl:text-7xl leading-[112%]'>
                    <span>A Healthy Team is</span>
                    <br />
                    <span className='gradient-text font-bold'>A Happy Team</span>
                </h1>
                <div className='max-w-[13.5rem] my-8'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center self-start'>
                        <Image src={JoinUsers} alt='join users' />
                        <span className='text-base font-medium ml-3'>Join 3,000+ users</span>
                    </div>
                    <GetGymCapsule className='hidden md:block lg:mt-8 xl:-mt-8' />
                </div>
                <QuadCircle className='my-4 lg:my-8 ml-[85%] md:ml-[20%] xl:ml-[25%]' />
            </div>
            <div className='relative py-8 lg:py-0 mx-auto lg:mx-0 rounded-xl'>
                <Image className='rounded-xl' src={LandingImage} alt="working out woman" width={500} priority />
                <GLogo className='absolute bottom-0 left-0' />
                <StarCross className='absolute bottom-8 left-14 z-10' />
            </div>
        </div>
    </div>
  )
}

export default Landing
