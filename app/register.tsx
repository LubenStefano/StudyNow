import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
