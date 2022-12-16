import React from 'react'
import Image from 'next/image'
import LandingImage from '../../../assets/images/sweat-together.svg'
import JoinUsers from '../../../assets/images/join-users.svg'
import JoinUsersSm from '../../../assets/images/join-users-sm.svg'
import { StarGradient, ArrowRight, GetGymCapsule } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper pt-8 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-3/5'>
                <StarGradient className='ml-[50%] mt-0 lg:mt-4 mb-8' />
                <h1 className='text-[2.75rem] sm:text-7xl lg:text-5xl xl:text-7xl leading-[112%] '>
                    <span className=''>Friends That <br /> Sweat together</span>
                    <br />
                    <span className='gradient-text font-bold'>Stick together</span>
                </h1>
                <div className='max-w-[13.5rem] my-8'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
                <div className='flex items-center'>
                    <Image src={JoinUsers} alt='join users' />
                    <span className='text-base font-medium ml-3'>Join 3,000+ users</span>
                </div>  
            </div>
            <div className='relative mt-16 lg:my-0 rounded-xl mx-auto'>
                <Image className='rounded-xl' src={LandingImage} alt="working out woman" width={640} priority />
                <GetGymCapsule className='absolute -top-10 right-2 sm:-right-14 -rotate-[65deg]' />
                <div 
                    className='flex items-center py-4 px-5 bg-white rounded-[10px] w-[15.75rem] absolute left-1 sm:-left-4 md:-left-8 lg:-left-[10.5rem] bottom-20 lg:bottom-40'
                    style={{ boxShadow: '0px 4px 38px rgba(0, 0, 0, 0.12)' }}
                >
                    <h3 className='text-sm leading-4 font-semibold mr-4'>Top Friends</h3>
                    <Image src={JoinUsersSm} alt='top friends' />
                </div>
                <div
                    className='py-4 px-5 bg-white rounded-[10px] w-[15.75rem] absolute left-1 sm:-left-4 lg:-left-28 -bottom-8 lg:bottom-10'
                    style={{ boxShadow: '0px 4px 38px rgba(0, 0, 0, 0.12)' }}
                >
                    <h3 className='text-sm leading-4 font-semibold mb-2'>New Friends</h3>
                    <p className='text-xs'>
                        I just met this new guy at the gym. He’s so buff. I’d like to get to know him some more. You know what I meann.... 😋😋
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing