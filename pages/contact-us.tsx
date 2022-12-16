import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Star } from '../components/svg';
import { Button } from '../components/ui';
import GymImg from '../assets/images/gym-img.svg';
import Map from '../assets/images/map.svg';

export default function ContactUs() {
   const [selected, setSelected] = React.useState<Number | undefined>(undefined)

    const gyms = [
        {
            image: GymImg,
            gym: 'IFitness Gym',
            address: '24B Charlie Boy, Gbagada Expressway, Lagos, Nigeria.',
            rating: 4.5,
            fac: 100
        },
        {
            image: GymImg,
            gym: 'Robo Fitness',
            address: '24B Charlie Boy, Gbagada Expressway, Lagos, Nigeria.',
            rating: 4.5,
            fac: 100
        },
        {
            image: GymImg,
            gym: 'Fit Day',
            address: '24B Charlie Boy, Gbagada Expressway, Lagos, Nigeria.',
            rating: 4.5,
            fac: 100
        },
        {
            image: GymImg,
            gym: 'Runtown Garage',
            address: '24B Charlie Boy, Gbagada Expressway, Lagos, Nigeria.',
            rating: 4.5,
            fac: 100
        },
        {
            image: GymImg,
            gym: 'IFitness Gym',
            address: '24B Charlie Boy, Gbagada Expressway, Lagos, Nigeria.',
            rating: 4.5,
            fac: 100
        },
    ]

    return (
        <div className=''>
            <Head>
                <title>Gym Capsule | Contact Us</title>
                <meta name="description" content="Gym Capsule contact page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='2xl:layout-wrapper overflow-hidden'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='w-full lg:w-1/2 max-h-[34rem] xl:max-h-[40rem] px-7 lg:px-16 xl:px-28 2xl:px-0 py-4 overflow-scroll'>
                        <ul>
                            {
                                gyms.map((x: any, index: number) => {
                                    return (
                                        <li
                                            className='w-full lg:max-w-[28rem] mb-5 p-[1px] rounded-xl cursor-pointer'
                                            style={
                                                selected === index
                                                ?
                                                { background: 'linear-gradient(120.19deg, #D62B1F -2.42%, #59419B 105.74%)' }
                                                :
                                                { background: '#BEBFC1' }
                                            }
                                            key={index}
                                        >
                                            <div
                                                className='w-full flex flex-col sm:flex-row items-center p-5 bg-[#FEFDFD] rounded-xl'
                                                onClick={() => setSelected(index)}
                                            >
                                                <Image src={x.image} alt='' width={180} />
                                                <div className='sm:ml-6 my-2 sm:my-0 text-center sm:text-left'>
                                                    <span className='text-text-200 text-lg font-semibold leading-[130%]'>{x.gym}</span>
                                                    <p className='my-2 lg:max-w-[15rem] text-[#656769] text-sm leading-[150%]'>{x.address}</p>
                                                    <p className='flex items-center justify-center sm:justify-start sm:my-1 text-sm leading-[150%]'>
                                                        <span className='text-text-200 font-semibold'>{x.rating}</span>
                                                        <Star className='mx-0.5' />
                                                        <span className='text-[#656769]'>({x.fac}+)</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/2 max-h-[40rem] flex-grow'>
                        <Image className='w-full' src={Map} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
