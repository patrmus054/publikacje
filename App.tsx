import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PublicationList from "./src/ui/publikacje/PublicationList";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>really nice</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
