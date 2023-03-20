
import { comments } from "../../../data/ressources"

export default function CommentID (req, res) {

    const { commentId } = req.query  ; 
    
    const comment = comments.find((comment) => {
      comment.id === parseInt(commentId)
    })

    res.status(201).json(comment)

}