import React from 'react'
import { QuadCircle, ArrowRight } from '../../svg'
import { Input, Select, Button } from '../../ui'

const ReferHr: React.FC = () => {
    const teamInputs = [
        {
            label: 'full name',
            placeholder: 'Alex Oyebade',
            type: 'text'
        },
        {
            label: 'your email',
            placeholder: 'ao.dsgnr@gmail.com',
            type: 'email'
        },
        {
            label: 'name of your company',
            placeholder: 'Groomly',
            type: 'text'
        },
        {
            label: 'company size',
            placeholder: '0 - 10',
            type: 'select'
        },
        {
            label: 'name of HR',
            placeholder: 'Alex Oyebade',
            type: 'text'
        },
        {
            label: 'HR\'s Email',
            placeholder: 'ao.dsgnr@gmail.com',
            type: 'email'
        },
        {
            label: 'HR\'s Phone Number',
            placeholder: '+234 810 000 0000',
            type: 'number'
        },
    ]

    return (
        <div className='w-full py-8 lg:py-16'>
            <div className='layout-wrapper flex flex-col lg:flex-row items-center px-0 sm:px-8 lg:px-16'>
                <div className='relative w-full lg:w-1/2'>
                    <QuadCircle className='absolute right-[10%] lg:right-[25%]' />
                    <div className='max-w-lg lg:max-w-[17.5rem]'>
                        <h2 className='text-text-300 text-lg lg:text-xl leading-8 uppercase mb-2'>refer your hr</h2>
                        <h3 className='text-[3rem] lg:text-[3.5rem] leading-[69px] font-medium'>
                            Have Your Empolyer <span className='gradient-text'>Pay for You</span>
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

export default ReferHr