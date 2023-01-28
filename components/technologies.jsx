/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

const Technologies = () => {

    const cards = [
        {
            key: 1,
            img: '/images/ResearchTechnologies/40549198661_e39309fbf9_k.jpg',
            text: 'Kaust developed fish wearable technology wins ces innovation award',
            category: 'Technology Areas',
            date: 'Oct 30, 2020'
        },
        {
            key: 2,
            img: '/images/ResearchTechnologies/44308473515_c102f46b56_k.jpg',
            text: 'postdoctoral fellow focus: mahmoud abdulhamid',
            category: 'Focus Areas',
            date: 'Oct 18, 2020'
        },
        {
            key: 3,
            img: '/images/ResearchTechnologies/13305555723_8eabec6be2_h.jpg',
            text: 'research in physical science & engineering',
            category: 'Disciplines',
            date: 'Oct 12, 2020'
        },
        {
            key: 4,
            img: '/images/ResearchTechnologies/13305774464_e6ee96dc6b_h.jpg',
            text: 'examining ho technology informs science',
            category: 'Applications',
            date: 'Oct 10, 2020'
        }
    ]

    return (
        <div className='bg-gray-200 grid text-teal-600 px-6 md:pr-10 md:pl-20 py-4 md:py-10  box relative'>
            <div className='flex justify-between my-4 md:my-10'>
                <div className=' uppercase font-rotextrabold md:text-6xl text-3xl'>
                    <p>Research &</p>
                    <p>Technologies</p>
                </div>
                <div className=''>
                    <button className=' text-xl text-white bg-yellow-400 px-6 py-4 rounded-sm hover:scale-110'>Explore More</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5 mb-20'>
                {cards.map(item => {
                    return (
                        <div key={item.key} className='grid lg:grid-cols-2 bg-white'>
                            <div>
                                <img
                                    src={item.img}
                                    alt=""
                                    className='lg:w-[400px] min-h-full' />
                            </div>
                            <div className='mt-8 px-4 flex flex-col justify-between'>
                                <h1 className=' uppercase mb-5 text-2xl font-rotbold'>{item.text}</h1>
                                <div className='mb-10 font-rotlightit text-xl'>
                                    <p className='mb-2'>{item.category}</p>
                                    <p className=' flex items-center'>
                                        <AiOutlineCalendar className='text-yellow-400 inline-block mr-2 mb-[1px]' />
                                        {item.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies