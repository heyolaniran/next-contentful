import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import  {createClient} from 'contentful'
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps () {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE , 
      accessToken: process.env.CONTENTFUL_ACCESS_KEY , 
    })

    const res = await client.getEntries({content_type: 'recipe'}) ; 

    return {

      props: {
        recipes: res.items 
      }

    }

    return
}

export default function Home({ recipes }) {

  console.log(recipes)
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
