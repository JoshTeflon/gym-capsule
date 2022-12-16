import React from 'react'
import Image from 'next/image'
import LandingImage from '../../../assets/images/for-employees-landing.svg'
import JoinUsers from '../../../assets/images/join-users.svg'
import { StarGradient, ArrowRight, GetGymCapsule, Heart, StarCross, Calories } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper pt-4 lg:pt-8 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between'>
            <div>
                <StarGradient className='ml-[75%] mt-4 mb-8' />
                <h1 className='text-[2.75rem] sm:text-7xl lg:text-5xl xl:text-7xl leading-[112%]'>
                    <span>Every Workout</span>
                    <br />
                    <span className='gradient-text font-bold'>Counts</span>
                </h1>
                <div className='max-w-[13.5rem] my-8'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center self-start'>
                        <Image src={JoinUsers} alt='join users' />
                        <span className='text-base font-medium ml-3 whitespace-nowrap'>Join 3,000+ users</span>
                    </div>
                    <GetGymCapsule className='hidden md:block lg:mt-24 mr-8' />
                </div>
            </div>
            <div className='flex justify-center lg:justify-between py-8 lg:py-0'>
                <div className='relative rounded-xl'>
                    <Image className='rounded-xl' src={LandingImage} alt="working out woman" width={480} priority />
                    <div
                        className='bg-white min-w-[10rem] py-8 px-5 rounded-[18px] absolute top-4 sm:top-16 lg:top-[4.5rem] -left-4 sm:-left-16'
                        style={{ boxShadow: '0px 15px 20px rgba(43, 22, 20, 0.1)' }}
                    >
                        <Heart className='animate-pulse' />
                        <h2 className='text-text-600 text-xs md:text-[0.8125rem] text-[0.8125rem] leading-[150%] py-2'>Heart Rate</h2>
                        <p className='text-text-200 text-xl text-[1.375rem] leading-[117%]'><span className='font-bold'>2723</span> bpm</p>
                    </div>
                    <div
                        className='bg-white min-w-[10rem] py-6 px-5 rounded-[18px] absolute bottom-4 sm:bottom-16 lg:bottom-28 -right-3 sm:-right-8'
                        style={{ boxShadow: '0px 15px 20px rgba(43, 22, 20, 0.1)' }}
                    >
                        <h2 className='text-text-600 text-xs md:text-[0.8125rem] leading-[150%]'>Daily Calories</h2>
                        <p className='text-text-200 text-xl md:text-[1.375rem] leading-[117%] pt-2 pb-4'><span className='font-bold'>1520</span> cal</p>
                        <Calories />
                    </div>
                </div>
                <StarCross className='hidden md:block mt-20 ml-10' />
            </div>
        </div>
    </div>
  )
}

export default Landing
