import React from 'react'
import Image from 'next/image'
import cn from 'clsx'
import s from './GetStarted.module.css'
import { ArrowRight } from '../../svg'
import { Button } from '../../ui'

const GetStarted: React.FC = () => {

    return (
        <div className='w-full py-8'>
            <div className={cn(s.root, 'layout-wrapper')}>
                <div className='mt-4 lg:mt-0 w-60 lg:w-[22.5rem]'>
                    <Image src='/images/iPhone11.png' alt='iPhone 11' width={360} height={464} />
                </div>
                <div className='max-w-lg px-4'>
                    <h2 className='text-white text-4xl md:text-[2.5rem] leading-[49px] font-medium'>
                        Get access to thousands of fitness, wellness & beauty options courtesy of your employer
                    </h2>
                    <div className='w-full max-w-[15rem] my-6'>
                        <Button variant='secondary-outline'>
                            Get Started<ArrowRight className='ml-2' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
