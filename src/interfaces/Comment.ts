import Author from "./Author";

interface Comment {
    id: string,
    content: string,
    author: Author,
    replies?: Array<Comment>,
}

export default Comment;