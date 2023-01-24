import { View } from "react-native";
import Comment from "../../../../interfaces/Comment";
import CommentCard from "../CommentCard";

function CommentReplies({ comments }: { comments: Array<Comment> }) {
    return (
        <View>
            {comments.map((reply) => (
                <CommentCard key={reply.id} comment={reply} />
            ))}
        </View>
    )
}

export default CommentReplies;