import React from 'react'

const Locations: React.FC = () => {
    const locations = [
        {
            country: 'ghana',
            states: [
                'Accra',
                'Cape Coast',
                'Kumasi',
                'Takoradi',
                'Queenstown',
                'Rustenburg',
                'Thohoyandou',
                'Upington',
                'Welkom',
                'Worcester',
                'Nyeri',
                'Thika',
                'Potchefstroom'
            ]
        },
        {
            country: 'kenya',
            states: [
                'Diani',
                'Eldoret',
                'Embu',
                'Kakamega',
                'Karatina',
                'Kilifi',
                'Kisumu',
                'Kitale',
                'Malindi',
                'Meru',
                'Mombasa',
                'Nairobi',
                'Naivasha'
            ]
        },
        {
            country: 'nigeria',
            states: [
                'Abuja',
                'Kwara',
                'Lagos',
                'Nassarawa',
                'Niger',
                'Ogun',
                'Ondo',
                'Osun',
                'Oyo',
                'Plateau',
                'Rivers',
                'Sokoto',
                'Taraba'
            ]
        },
        {
            country: 'south africa',
            states: [
                'Cape Town',
                'Durban',
                'East London',
                'Emalahleni',
                'Ermelo',
                'Garden Route',
                'Grahamstown',
                'Johannesburg',
                'Kimberley',
                'Mbombela',
                'Mthatha',
                'Phuthaditjhaba',
                'Pietermaritzburg'
            ]
        },
    ]

    return (
        <div className='w-full'>
            <div className='layout-wrapper py-8 lg:py-16 px-0 md:px-8 lg:px-16'>
                <ul className='flex flex-wrap justify-between'>
                    {
                        locations.map((i: any) => {
                            return (
                                <li className='min-w-[7.5rem] py-4' key={i.country}>
                                    <h3 className='text-sm font-medium leading-[150%] uppercase mb-2'>{i.country}</h3>
                                    {
                                        i.states.map((j: any, index: number) => {
                                            return (
                                                <p className='text-text-300 text-xs leading-[220%]' key={index}>{j}</p>
                                            )
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Locations
