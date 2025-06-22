import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Events() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Events Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
