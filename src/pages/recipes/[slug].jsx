
import {createClient} from 'contentful'
import Image from 'next/image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient ({ 
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
  } )

  export  const  getStaticPaths = async () => {

    
    const res = await client.getEntries({
        content_type: 'recipe'
    })

    const paths = res.items.map(item => {
        return {
            params: { 
                slug: item.fields.slug
            }
        }
    })

   return {
    paths, 
    fallback:false 
   }

  }

  export async function getStaticProps ({ params }) {

    const  {items}  = await client.getEntries({
        content_type: 'recipe', 
        'fields.slug': params.slug
    })



    return {
       props : {
         recipe: items[0], 
         revalidate: 1
       }
        }
      
    
  }

  


export default function RecepeDetails ({ recipe }) {

 
  
    return (
        <div className='recipe-details'>
            <div className='bg-cover justify-center flex max-h-screen w-full mb-4'>
                <Image 
                    src={`https:${recipe.fields.featuredImage.fields.file.url}`}
                    width={recipe.fields.featuredImage.fields.file.details.image.width}
                    height={recipe.fields.featuredImage.fields.file.details.image.height}
                />
            </div>

            <section>
                <div className="mealDetails justify-center flex mt-4">
                    <h1 className="text-4xl text-center font-medium"> {recipe.fields.name} </h1>
                </div>

                <div className="mx-8 mt-4 justify-center  mb-8 flex">
                <svg aria-hidden="true" fill="none" stroke="currentColor" className='text-blue-600 w-8 h-8' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                 </svg>
                 <span className='font-medium py-1 pl-4 text-lg'> {recipe.fields.cookingTime} min   <i className='font-bold'>cooking-time </i> </span>
                </div>
                <div className=" flex justify-center">
                    { recipe.fields.ingredients.map(ingredient => (
                        <span className="bg-blue-400 px-2 py-1 cursor-pointer rounded-full mr-1 text-white font-normal text-center"> { ingredient }</span>
                    )) }
                </div>

                <div className="font-medium w-3/4 text-justify mt-4">
                    {documentToReactComponents(recipe.fields.method)}
                </div>
            </section>
            



        </div>
    )
}