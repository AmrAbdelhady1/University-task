/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Bioe = () => {

    const cards = [
        {
            key:1,
            text:'The campus is really nice, we all fell comfortable to live here. Good work/life balance, everything is close. Aboyt work, you have access to high class facilities.',
            img:'/images/Bio/st01.jpg',
            date:'2019'
        },
        {
            key:2,
            text:'Offered me flexibility in how/when to perform my internship tasks as I was a PhD student at the time and preferred to work on the internship outside of normal working hours.',
            img:'/images/Bio/st02.jpg',
            date:'2019'
        },
        {
            key:3,
            text:'Good facilities, nice work environment, people with different nationalities and backgrounds, community life is awsome.',
            img:'/images/Bio/st03.jpg',
            date:'2019'
        }
    ]

    return (
        <div className='relative bg-white box'>
            <img
                alt=''
                src='/images/Bio/BG.jpg'
                className='2xl:h-full lg:h-[700px] h-[1300px] w-full'
            />
            <div className='px-6 md:pr-10 md:pl-20 py-4 md:py-9 absolute top-0 left-0 text-white p-2 w-full'>
                <div className='flex justify-between items-end'>
                    <div className='md:text-5xl text-2xl'>
                        <p className=' font-rotlight'>BoiE</p>
                        <p className='md:text-7xl uppercase font-rotextrabold'>stories</p>
                    </div>
                    <div className='flex gap-4 text-2xl font-rotextrabold'>
                        <button className=' bg-yellow-400 p-2 hover:scale-110'><SlArrowLeft/></button>
                        <button className=' bg-yellow-400 p-2 hover:scale-110'><SlArrowRight/></button>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-3 gap-5 mt-8'>
                    {cards.map(item=>{
                        return(
                            <div key={item.key} className='grid gap-8'>
                                <div className='bg-white bg-opacity-20 relative px-10 py-5 rounded-lg message-card'>
                                    <h1 className=' text-[22px] mb-4'>{item.text}</h1>
                                </div>
                                <div className=' flex items-center gap-5 px-5'>
                                    <img src={item.img} alt="" 
                                     className='rounded-full w-20 h-20'
                                    />
                                    <div>
                                        <p className=' text-xl'>Student Name</p>
                                        <p className='font-rotlightit opacity-70'>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default Bioe