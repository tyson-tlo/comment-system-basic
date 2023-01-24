import { Text, View, StyleSheet } from "react-native";

function CommentContent({ content }: {content: string}): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    content: {
        fontSize: 16,
        textAlign: "right"
    }
})

export default CommentContent;
