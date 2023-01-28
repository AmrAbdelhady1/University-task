/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

const Publications = () => {

    const cards = [
        {
            key: 1,
            img: '/images/Publications/13305554505_7817a63e03_h.jpg',
            text: 'clustered spatio-temporarl varying coefficient regression model',
            date: 'Oct 26, 2020'
        },
        {
            key: 2,
            img: '/images/Publications/13305805023_819e2d1181_h.jpg',
            text: 'thermally stable surfactant free ceria nanocubes in silica aerogel',
            date: 'Oct 22, 2020'
        },
        {
            key: 3,
            img: '/images/Publications/13305910664_8755d19747_h.jpg',
            text: 'evolution and biogeography of the zanclea-scleractinia symbiosis',
            date: 'Oct 19, 2020'
        },
        {
            key: 4,
            img: '/images/Publications/13295049475_e8cabf0a36_h.jpg',
            text: 'metal halide perovskites for high-energy radiation detection',
            date: 'Oct 18, 2020'
        }
    ]

    return (
        <div className='grid text-teal-600 px-6 md:pr-10 md:pl-20 py-4 md:py-10 box relative bg-white'>
            <div className='flex justify-between my-4 md:my-10'>
                <div className=' uppercase font-rotextrabold md:text-6xl text-3xl'>
                    <p>publications</p>
                </div>
                <div className=''>
                    <button className=' text-xl text-white bg-yellow-400 px-6 py-4 rounded-sm hover:scale-110'>Explore More</button>
                </div>
            </div>
            <div className=' grid lg:grid-cols-4 mb-2'>
                {cards.map(item => {
                    return (
                        <div
                            key={item.key}
                            className={`border-teal-400 border-opacity-60 mt-2 ${item.key === 4 ? 'border-none' : 'md:border-r-2'}`}
                        >
                            <div className='md:px-2 mb-2'>
                                <img
                                    alt=''
                                    src={item.img} />
                                <div className='mt-6 ml-2 px-2'>
                                    <h1 className='text-teal-500 uppercase mb-2 text-2xl font-rotbold'>{item.text}</h1>
                                    <p className='mb-4 text-teal-400 font-rotitalic text-xl flex items-center'>
                                        <AiOutlineCalendar className=' inline-block mr-2 text-yellow-400' />
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

export default Publications