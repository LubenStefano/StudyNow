import MainCalendar from "@/src/components/mainCalendar";
import {Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
    <MainCalendar />
    <View style={styles.button}>
      <Button title="ADD EVENT" onPress={() => alert("Add Event Pressed")} color={"000000"} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  button: {
    position: "absolute",
    top: 510,
    width: "90%",
    padding: 10,
    backgroundColor: "#ffbd59",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});