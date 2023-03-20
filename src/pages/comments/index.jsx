import { useEffect, useState } from "react";

export default function Comments () {
   
    const [comments, setComments] = useState() ; 
    const [comment, setComment] = useState('')

    
    const postComment = async () => {
        const response =  await fetch("/api/comments", {
            method: "POST", 
            body: JSON.stringify({ comment }), 
            headers : {
                'Content-Type': 'application/json'
            }
        }) ; 

        const data =  await response.json() ; 

        console.log(data)
    }

    const fetchComments = async () => {
        const res = await fetch("http://localhost:3000/api/comments") ; 

        const data = await res.json(); 

        setComments(data)

    }


    useEffect(() => {
        fetchComments()      
    }, [comments])
    

   
    return (
        <>
            <div className="justify-center flex mt-6">
                <button className="bg-blue-500 px-4 py-2 rounded-full text-white" onClick={fetchComments} > Load Comments </button>
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
                {comments && (
                    comments.map(comment => (
                        <div className="" key={comment.id}>
                            {comment.text}
                        </div>
                    ))
                )}
            </div>
            

            <div className="mt-4 justify-center flex">
                <div className="">
                    <textarea type="text" className="border border-spacing-1 border-gray-600 rounded-lg grid grid-cols-6" rows={6}  onChange={(e) => {
                        setComment(e.target.value)
                    }}>
                    </textarea>


                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full " onClick={postComment}>   Post Comment </button>
                    </div>
                </div>
            </div>
        </>
    )
}