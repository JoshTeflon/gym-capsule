import React from 'react'
import { ArrowRight, Code, UnreadMail } from '../../svg'
import { Button } from '../../ui'

const JobOffers: React.FC = () => {

    return (
        <div className='w-full bg-[#F5F5F5]'>
            <div className='layout-wrapper py-16 sm:px-4 lg:px-8 xl:px-16 flex flex-col lg:flex-row lg:items-center justify-between'>
                <div className='lg:max-w-[25rem] xl:max-w-[30rem]'>
                    <h2 className='text-[2.5rem] leading-[49px] font-medium'>
                        <span>The Best Candidates Have</span>
                        <br />
                        <span className='gradient-text'>Multiple Job Offers</span>
                    </h2>
                    <p className='text-text-300 text-lg xl:text-xl leading-8'>Most organizations struggle with retaining top talent , employee satisfaction boosts loyalty and reduces churn</p>
                    <Button className='mt-8 max-w-[12.5rem]'>Get Started<ArrowRight className='ml-2' /></Button>
                </div>
                <div>
                    <div
                        className='bg-[#FBFBFB] w-4/5 mx-auto lg:mx-0 lg:min-w-[20rem] xl:min-w-[25rem] lg:max-w-[20rem] xl:max-w-[25rem] h-[24rem] flex flex-col justify-between py-14 mt-16 lg:my-0 rounded-xl'
                    >
                        <div className='w-[90%] mx-auto min-w-[16rem] -ml-8 sm:-ml-16 bg-white shadow-card-shadow p-6 flex items-center rounded-xl'>
                            <div className='w-14 xl:w-[4.5rem] h-14 xl:h-[4.5rem] bg-[#EDE8FA] flex items-center justify-center rounded-full'>
                                <Code />
                            </div>
                            <div className='ml-6'>
                                <h3 className='text-text-700 text-base xl:text-xl font-medium capitalize'>Senior Back-End Dev</h3>
                                <span className='text-2xl xl:text-[2rem] font-semibold tracking-[-0.02em]'>Microsoft</span>
                            </div>
                        </div>
                        <div className='w-[90%] mx-auto min-w-[16rem] -mr-8 sm:-mr-16 bg-[#59419B] shadow-card-shadow p-6 flex items-center rounded-xl'>
                            <div className='w-14 xl:w-[4.5rem] h-14 xl:h-[4.5rem] bg-[rgba(255,255,255,0.2)] flex items-center justify-center rounded-full'>
                                <UnreadMail />
                            </div>
                            <div className='ml-6'>
                                <h3 className='text-[#9D8DCA] text-base xl:text-xl font-medium capitalize'>Emails Unread</h3>
                                <span className='text-white text-2xl xl:text-[2rem] font-semibold tracking-[-0.02em]'>150</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOffers
