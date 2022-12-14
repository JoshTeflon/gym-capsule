import React from 'react'
import {
    QuadCircle,
    IFitness,
    Capelli,
    Durema,
    Zizi,
    Zanzee,
    DeoGratias,
    Bistokas,
    ONaturals,
    ProFit,
    Aliseph,
    Taupe,
    SureFit,
    Mavin,
    Binfem,
    ArrowRight
} from '../../svg'
import { Button } from '../../ui'

const FavouritePlaces: React.FC = () => {
    const places = [
        {
            item: 'I-Fitness',
            logo: <IFitness />
        },
        {
            item: 'Capelli',
            logo: <Capelli />
        },
        {
            item: 'Durema',
            logo: <Durema />
        },
        {
            item: 'ZIZI',
            logo: <Zizi />
        },
        {
            item: 'Zanzee',
            logo: <Zanzee />
        },
        {
            item: 'Deo-Gratias',
            logo: <DeoGratias />
        },
        {
            item: 'Bistokas',
            logo: <Bistokas />
        },
        {
            item: '0’Naturals',
            logo: <ONaturals />
        },
        {
            item: 'Pro-Fit',
            logo: <ProFit />
        },
        {
            item: 'Aliseph',
            logo: <Aliseph />
        },
        {
            item: 'Taupe',
            logo: <Taupe />
        },
        {
            item: 'SureFit',
            logo: <SureFit />
        },
        {
            item: 'ZIZI',
            logo: <Zizi />
        },
        {
            item: 'Mavin',
            logo: <Mavin />
        },
        {
            item: 'Durema',
            logo: <Durema />
        },
        {
            item: 'Binfem',
            logo: <Binfem />
        }
    ]

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8'>
                <div className='text-center max-w-xl mx-auto'>
                    <h2 className='text-[2.5rem] leading-[54px] font-medium'>
                        At all their favourite <span className='gradient-text'>places</span>
                    </h2>
                    <p className='text-text-300 text-xl'>Gyms, Spa&apos;s , Yoga Studios , Dance Studios - Explore our Gyms, Studios, Spas and more</p>
                </div>
                <div className='mb-2 ml-[95%] lg:ml-[100%]'>
                    <QuadCircle />
                </div>
                <div className='w-[95%] mx-auto'>
                    <ul className='flex items-center justify-center flex-wrap'>
                        {
                            places.map((i: any, index: number) => {
                                return (
                                    <li className='bg-bg-light w-64 min-h-[7.5rem] m-1 flex items-center justify-center' key={index}>
                                        {i.logo}<span className='text-text-200 text-lg font-DMSans ml-2 lg:ml-4'>{i.item}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='max-w-[12.5rem] my-12 mx-auto'>
                    <Button>Explore Places<ArrowRight className='ml-2' /></Button>
                </div>
            </div>
        </div>
    )
}

export default FavouritePlaces
