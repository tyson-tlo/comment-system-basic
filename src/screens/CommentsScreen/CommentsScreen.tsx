import React, {useState} from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Comment from "../../interfaces/Comment";
import CommentCard from "./components/CommentCard";
import CreateReply from "./components/CommentCard/CreateReply";

function CommentsScreen() {
    const [comments, setComments] = useState<Array<Comment>>([]);

    const storeComment = (comment: Comment) => {
        setComments([
            comment,
            ...comments,
        ])
    }

    return (
        <React.Fragment>
            <KeyboardAvoidingView>
                <FlatList 
                    ListHeaderComponent={(
                        <React.Fragment>
                            <Text style={styles.headerText}>Comments</Text>
                            <View style={styles.replyField}>
                                <CreateReply onStore={storeComment} />
                            </View>
                        </React.Fragment>
                    )}
                    data={comments}
                    renderItem={({ item }) => <CommentCard comment={item} />}
                    keyExtractor={item => item.id}
                />
                
            </KeyboardAvoidingView>
        </React.Fragment>
    )
}

const styles= StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
    },
    replyField: {
        marginTop: 20,
    }
})

export default CommentsScreen;