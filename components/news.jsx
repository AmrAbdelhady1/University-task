/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { AiOutlineCalendar } from 'react-icons/ai'

const News = () => {

    const cards = [
        {
            key: 1,
            img: '/images/LatestNews/13305700433_c9f4ad4685_h.jpg',
            text: 'patzek receives distinguished erasmus award',
            category: 'Faculty Focus',
            date: 'Oct 28, 2020'
        },
        {
            key: 2,
            img: '/images/LatestNews/13305701663_96d6d846f5_h.jpg',
            text: 'president chans address on community testing',
            category: 'News',
            date: 'Oct 19, 2020'
        },
        {
            key: 3,
            img: '/images/LatestNews/13305912284_f4a700c5ea_h.jpg',
            text: 'the "new normal" - major trends post covid-19',
            category: 'Innovation',
            date: 'Oct 11, 2020'
        }
    ]

    return (
        <div className=' bg-teal-600 grid lg:grid-cols-4 text-white'>
            <div className='lg:flex lg:flex-col grid gap-10 lg:col-span-3 px-6 md:pr-10 md:pl-20 py-4 md:py-10 box relative mb-2'>
                <div className='flex justify-between px-2'>
                    <div className=' uppercase'>
                        <p className='md:text-5xl text-xl font-rotlight'>latest</p>
                        <p className='md:text-7xl text-3xl font-rotextrabold'>news</p>
                    </div>
                    <div className='md:mt-10'>
                        <button className=' text-xl text-teal-600 bg-white px-6 py-4 rounded-sm hover:scale-110'>Explore More</button>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-3'>
                    {cards.map(item => {
                        return (
                            <div
                                key={item.key}
                                className={`text-white border-gray-300 border-opacity-60 mt-2 ${item.key === 3 ? 'border-none' : 'lg:border-r-2'}`}
                            >
                                <div className='md:px-2'>
                                    <img
                                        alt=''
                                        src={item.img} />
                                    <div className='mt-6 ml-2'>
                                        <h1 className=' uppercase mb-10 text-2xl'>{item.text}</h1>
                                        <p className='mb-2 font-rotlightit opacity-60 text-xl'>{item.category}</p>
                                        <p className='mb-4 font-rotlightit opacity-60 text-xl flex items-center'>
                                            <AiOutlineCalendar className=' inline-block mr-2 mb-1' />
                                            {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='relative lg:flex lg:flex-col hidden'>
                <Image
                    alt=''
                    fill
                    priority
                    src='/images/image02.jpg'
                />
                <div className='absolute md:bottom-16 bottom-20 right-10 left-5 text-white p-2 uppercase'>
                    <p className=' md:text-4xl font-rotlight'>rapid reserach response team</p>
                    <p className=' md:text-5xl 2xl:text-6xl font-rotextrabold mt-2'>covid - 19</p>
                </div>
            </div>
        </div>
    )
}

export default News