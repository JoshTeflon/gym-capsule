import React from 'react'
import Image from 'next/image'
import cn from 'clsx'
import s from './GetStarted.module.css'
import { ArrowRight } from '../../svg'
import { Button } from '../../ui'
import iPhone from '../../../assets/images/iPhone11.svg'

const GetStarted: React.FC = () => {

    return (
        <div className='w-full py-8'>
            <div className={cn(s.root, 'layout-wrapper')}>
                <div className='w-60 mt-4 lg:mt-0 lg:w-auto'>
                    <Image src={iPhone} alt='iPhone 11' />
                </div>
                <div>
                    <h2 className='text-white text-4xl md:text-[2.5rem] leading-[49px] font-medium'>Great part is</h2>
                    <p className='text-[#FADFDC] text-lg md:text-xl max-w-[24rem]'>They get access to all of the above with One Subrsciption.</p>
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
