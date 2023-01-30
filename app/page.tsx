import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='min-h-screen w-screen grid place-content-center'>
      <div className='rounded-2xl bg-gray-500 shadow-2xl w-96 h-96'>
        <div className='h-full text-3xl text-center text-white font-extrabold tracking-wider p-5'>
          Home Page <br />Wireframe
        </div>
      </div>
    </main>
  )
}