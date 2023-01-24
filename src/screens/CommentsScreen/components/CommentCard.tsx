import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Comment from "../../../interfaces/Comment";
import CommentAuthor from "./CommentCard/CommentAuthor";
import CommentContent from "./CommentCard/CommentContent";
import CommentReplies from "./CommentCard/CommentReplies";
import CreateReply from "./CommentCard/CreateReply";

function CommentCard({ comment }: { comment: Comment }) {
    const [cardComment, setCardComment] = useState<Comment>(comment);
    const [replying, setReplying] = useState<boolean>(false);

    const storeCommentReply = (reply: Comment) => {
        setCardComment({
            ...cardComment,
            replies: [
                ...cardComment.replies,
                reply,
            ]
        })
        setReplying(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <CommentAuthor author={cardComment.author} />
                <CommentContent content={cardComment.content} />
                <TouchableOpacity onPress={() => setReplying(!replying)}>
                    <Text style={styles.reply}>Reply</Text>
                </TouchableOpacity>
            </View>
            {replying && (
                <CreateReply onStore={storeCommentReply} />
            )}
            <CommentReplies comments={cardComment.replies} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "auto",
    },
    contentContainer: {
        backgroundColor: "#f0f0f0",
        padding: 2,
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    body: {
        fontSize: 16,
    },
    reply: {
        textAlign: "right",
        marginRight: 10
    }
});

export default CommentCard;