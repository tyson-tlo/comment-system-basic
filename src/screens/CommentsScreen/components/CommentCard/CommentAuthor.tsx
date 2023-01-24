import { Text, View, StyleSheet } from "react-native";
import Author from "../../../../interfaces/Author";

function CommentAuthor({ author }: { author: Author }): JSX.Element {
    return (
        <View>
            <Text style={styles.author}>{author.firstName} {author.lastName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    author: {
        fontSize: 16,
        fontWeight: "bold",
    }
})

export default CommentAuthor;
