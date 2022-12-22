import React from 'react'
import cn from 'clsx'
import { GradientCaretDown, GradientCaretRight } from '../../svg'
import { Button } from '../../ui'

const Faqs: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<Number | undefined>(undefined)
    const faqs = [
        {
            q: 'What are Capsules?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        },
        {
            q: 'Where can I use Capsules?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        },
        {
            q: 'How do I purchase Capsules?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        },
        {
            q: 'What activties can I do?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        },
        {
            q: 'How to use capsules?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        },
        {
            q: 'What do I get for referring your friends?',
            a: 'Capsules equal money on the Gym Capsule network. Capsules allow you to book at thousands of studios, gyms, salons & spas. Use them whenever you like and however however you like - learn more'
        }
    ]

    return (
        <div className='w-full py-8'>
            <div className='layout-wrapper'>
                <div className='w-full lg:w-11/12 mx-auto'>
                    <h2 className='text-text-200 text-5xl leading-[130%] text-center font-semibold'>Frequently Asked Questions</h2>
                    <div className='bg-bg-light my-8 py-4 px-5 lg:py-8 lg:px-10'>
                        <ul>
                            {
                                faqs?.map((i: any, index: number) => {
                                    return (
                                        <li
                                            className='w-full bg-white my-4 py-2 px-3 lg:py-4 lg:px-4 cursor-pointer'
                                            onClick={() => openFaq !== index ? setOpenFaq(index) : setOpenFaq(undefined)}
                                            key={index}
                                        >
                                            <div className='w-full flex items-center justify-between'>
                                                <h3 className='text-lg font-medium mr-2 mb-2'>{i.q}</h3>
                                                {openFaq === index ? <GradientCaretDown /> : <GradientCaretRight />}
                                            </div>
                                            <p className={cn(
                                                    'w-11/12 lg:w-4/5 text-[#7A7278] text-base',
                                                    openFaq === index === false && 'hidden'
                                                )}
                                            >
                                                {i.a}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs