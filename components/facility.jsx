/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const Facility = () => {

    const cards = [
        {
            key:1,
            img:'/images/FacilitiesResources/13305412005_661da205f8_h.jpg',
            text:'core labs and major Facilities',
        },
        {
            key:2,
            img:'/images/FacilitiesResources/28232125988_386612a75e_k.jpg',
            text:'housing and Facilities',
        }
    ]

    return (
        <div className='relative bg-white box'>
            <img
                alt=''
                src='/images/FacilitiesResources/BG.jpg'
                className='object-cover lg:h-[700px] h-[1200px] w-full'
            />
            <div className='px-6 md:pr-10 md:pl-20 py-4 md:py-10 my-4 md:my-10 absolute top-0 left-0 text-white p-2'>
                <div className=' uppercase font-rotextrabold md:text-6xl text-3xl'>
                    <p>Facilities <span className=' font-rotlight text-4xl'>&</span></p>
                    <p className='md:text-7xl'>resources</p>
                </div>
                <div className='grid lg:grid-cols-2 md:gap-5 md:mt-12 mt-2 gap-3'>
                    <div className=' text-xl mt-2'>
                        <p className=' font-rotlight'>
                            Our goal is to succeed in achieving our University mission, research endeavors and aspirations to make KAUST an academic destination. Being healthy and well goes hand-in-hand with that goal. thats why KAUST has made the health and wellbeing of our entire community a high priority. A broad range of resources, services, programs and support are available and accessible to ensure that our community members, students, faculty and staff, stay physically healthy and emotionally well.
                        </p>
                        <button className='md:mt-20 mt-5 bg-yellow-400 px-6 py-4 rounded-sm hover:scale-110'>Explore More</button>
                    </div>
                    <div className='grid lg:grid-cols-2 md:gap-5'>
                        {cards.map(item=>
                            {
                                return(
                                    <div key={item.key}>
                                        <img src={item.img} alt=""
                                        className='h-[220px] w-full'
                                        />
                                        <div className='flex py-5 px-2 uppercase'>
                                        <span className=' inline-block text-2xl ml-2 mt-1 text-yellow-400'><IoMdArrowDropright/></span>
                                        <h1 className='text-xl md:text-2xl'>{item.text}</h1>
                                        </div>
                                    </div>        
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility