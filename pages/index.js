/* eslint-disable @next/next/no-img-element */
import { Bioe, Facility, Navbar, News, Publications, Technologies } from '@/components'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>University</title>
      </Head>
      <main className=' font-rot'>
        
        <Navbar/>

        <div className='relative'>
          <img
          alt=''
          src='/images/Intro/image01.jpg'
          className='object-cover h-[550] w-full'
          />
          <div className='absolute 2xl:bottom-24 bottom-6 2xl:right-10 right-8 text-white p-2 uppercase'>
          <p className=' lg:text-6xl text-xl font-rotlight'>innovation today for a</p>
          <p className=' lg:text-8xl text-3xl font-rotextrabold'>better tomorrow</p>
          </div>
        </div>
        
        <News/>
        <Technologies/>
        <Facility/>
        <Publications/>
        <Bioe/>

      </main>
    </>
  )
}
