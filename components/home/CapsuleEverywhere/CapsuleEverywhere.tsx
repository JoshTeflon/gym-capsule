import React from 'react'
import { Mapbase } from '../../svg'

const CapsuleEverywhere: React.FC = () => {

    return (
        <div className='w-full bg-primary p-0'>
            <div className='w-full max-w-8xl mx-auto flex items-center justify-between p-0'>
                <div className='max-w-sm mx-auto ml-[7.5%]'>
                    <h2 className='text-white text-[2.5rem] leading-[49px] font-medium'>The Capsule is everywhere you go</h2>
                    <p className='text-[#F3B1B1] text-xl leading-8'>Check us out in some of the most pouplar cities</p>
                </div>
                <Mapbase />
            </div>
        </div>
    )
}

export default CapsuleEverywhere
