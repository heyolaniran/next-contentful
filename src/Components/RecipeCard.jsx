import  Image  from "next/image";

export default function RecipeCard ({ recipe }) {

    const {name: title, slug, thumbnail , cookingTime} = recipe.fields


    console.log(thumbnail)

    

    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
         <Image 
         src={'https:'+thumbnail.fields.file.url}
         width={300}
         height={300}
         />
        <div className="mt-2">
          <dl>
            
      
            <div>
              <dt className="sr-only">Name </dt>
      
              <dd className="font-medium">{ title }</dd>
            </div>
          </dl>
      
          <div className="mt-6 flex items-center gap-8 text-xs">
          
      
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
      
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">cookingTime</p>
      
                <p className="font-medium"> { cookingTime } min</p>
              </div>
            </div>
      
            
          </div>
        </div>
      </a>
      
    )

}