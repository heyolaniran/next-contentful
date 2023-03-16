import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import  { createClient } from 'contentful'
import RecipeCard from '../Components/RecipeCard'
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps () {

   const client = createClient ({ 
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
  } )

    const res = await client.getEntries({content_type: 'recipe'}) ; 

    return {

      props: {
        recipes: res.items 
      }

    }

    return
}

export default function Home({ recipes }) {
 
  return (
    <>
     
      <main className="bg-white ">
        
        <div className='justify-center flex'>
           <h1 className='text-2xl text-center font-medium'> Recipe List  </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  mt-8">
            {recipes.map((recipe) => (
               <RecipeCard key={recipe.sys.id} recipe={recipe} />
            )
            )}
        </div>
      </main>
    </>
  )
}
