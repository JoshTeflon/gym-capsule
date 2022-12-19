import React from 'react'
import { StarGradient, ArrowRight } from '../../svg'
import { Button, Input, Select } from '../../ui'

const Team: React.FC = () => {
    const teamInputs = [
        {
            label: 'full name',
            placeholder: 'Alex Oyebade',
            type: 'text'
        },
        {
            label: 'business email',
            placeholder: 'ao.dsgnr@gmail.com',
            type: 'email'
        },
        {
            label: 'job title',
            placeholder: 'Product Designer',
            type: 'text'
        },
        {
            label: 'phone number',
            placeholder: '0813227583737',
            type: 'number'
        },
        {
            label: 'company size',
            placeholder: '0 - 10',
            type: 'select'
        }
    ]

    return (
        <div className='w-full py-8 lg:py-16'>
            <div className='layout-wrapper flex flex-col lg:flex-row items-center px-0 sm:px-8 lg:px-16'>
                <div className='relative w-full lg:w-1/2'>
                    <StarGradient className='absolute right-[10%] lg:right-[25%]' />
                    <div className='max-w-lg lg:max-w-[20rem]'>
                        <h2 className='text-text-300 text-lg leading-8 uppercase mb-2'>TALK TO US</h2>
                        <h3 className='text-[2.5rem] leading-[49px] font-medium'>
                            Interested in a <span className='gradient-text'>happier and healthier team ?</span>
                        </h3>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 my-8 lg:my-0'>
                    <form className='max-w-lg mx-auto border border-[#BEBFC1] rounded-3xl p-8'>
                        {
                            teamInputs.map((x: any, index: number) => {
                                return (
                                    <div className="my-2" key={index}>
                                        <label className='text-text-700 text-lg capitalize' htmlFor="">
                                            {x.label}
                                        </label>
                                        <div className="mt-2">
                                            {
                                                x.type === 'select' ?
                                                <Select
                                                    placeholder={x.placeholder}
                                                    options={['0-9', '10-99', '100-200']}
                                                />
                                                :
                                                <Input
                                                    placeholder={x.placeholder}
                                                    type={x.type}
                                                />
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <Button className='lg:max-w-[12.5rem] my-4'>
                            Submit<ArrowRight className='ml-2' />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Team