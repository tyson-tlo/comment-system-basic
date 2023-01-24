import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Comment from "../../../../interfaces/Comment";

function CreateReply({ onStore }: { onStore: (reply: Comment) => void}) {
    const [reply, setReply] = useState<string>("");

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={text => setReply(text)}
                value={reply}
                label="Reply"
                style={styles.input}
                mode="outlined"
            />
            
            <Button mode="outlined" onPress={() => {
                onStore({
                    id: Math.random().toString(),
                    content: reply,
                    author: {
                        firstName: "Tyson",
                        lastName: "London",
                    },
                    replies: [],
                });
                setReply("");
            }}
            style={styles.button}>Post</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "70%",
        marginHorizontal: 10
    },
    button: {
        marginRight: 10
    }
})

export default CreateReply;