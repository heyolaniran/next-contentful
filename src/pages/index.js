import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      <main className="bg-white ">
        
        <div className='justify-center flex'>
           <h1 className='text-2xl text-center font-medium'> Recipe List  </h1>
        </div>

      </main>
    </>
  )
}
