import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import CommentsProvider from "./src/providers/CommentsProvider";
import CommentsScreen from "./src/screens/CommentsScreen/CommentsScreen";

export default function App() {
  return (
    <CommentsProvider>
      <SafeAreaView style={styles.container}>
        <CommentsScreen />
      </SafeAreaView>
    </CommentsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
