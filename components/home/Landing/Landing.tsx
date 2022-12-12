import React from 'react'
import cn from 'clsx'
import { ArrowRight } from '../../svg'
import { Button } from '../../ui'

const Landing: React.FC = () => {

  return (
    <div className='w-full'>
        <div className='layout-wrapper'>
            <div>
                <h1 className='text-5xl lg:text-7xl'>
                    One Subcription. <br /> One App. <br />
                    <span className='font-bold'>One Thousand <br /> Ways to Stay <br /> Healthy.</span>
                </h1>
                <div className='max-w-[14rem] my-4'>
                    <Button>Get GymCapsule<ArrowRight className='ml-2' /></Button>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Landing
