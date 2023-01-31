import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FaHardHat } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='min-h-screen w-screen grid place-content-center'>
      <div className='rounded-2xl bg-gray-500 shadow-2xl w-96 h-96'>
        <div className='h-full flex flex-col justify-center'>
          <FaHardHat className='w-full text-6xl text-center text-amber-300'/>
          <div className='text-3xl text-center text-white font-extrabold tracking-wider'>
              Home Page <br />Wireframe
          </div>
          <div className='flex flex-col gap-4 items-center mt-5'>
            <input className='flex w-72 px-2 py-2 mx-8 rounded-lg text-semibold' placeholder='Username'/>
            <input className='flex w-72 px-2 py-2 mx-8 rounded-lg text-semibold' placeholder='Password' />
            <button className='px-2 py-2 border-2 w-40 rounded-lg text-semibold '>Login</button>
          </div>
        </div>
      </div>
    </main>
  )
}