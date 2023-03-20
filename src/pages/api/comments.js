import { comments } from "../../../data/ressources";

export default function handler(req, res) {
    res.status(200).json(comments)
}