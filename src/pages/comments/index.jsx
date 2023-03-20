import { useState } from "react";

export default function Comments () {
   
    const [comments, setComments] = useState() ; 

    const fetchComments = async () => {
        const res = await fetch("http://localhost:3000/api/comments") ; 

        const data = await res.json(); 

        setComments(data)

    }

   
    return (
        <>
            <div className="justify-center flex mt-6">
                <button className="bg-blue-500 px-4 py-2 rounded-full text-white" onClick={fetchComments} > Load Comments </button>
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
                {comments && (
                    comments.map(comment => (
                        <div className="">
                            {comment.text}
                        </div>
                    ))
                )}
            </div>
            
        </>
    )
}