import { StyleSheet, View } from "react-native";
import CustomButton from "../src/components/CustomButton";
import MainCalendar from "../src/components/mainCalendar";

export default function Main() {
  return (
    <View style={styles.container}>
      <MainCalendar />
      <CustomButton
        onPress={() => {
          console.log("Add Event Button Pressed");
        }}
        style={styles.button}
        text="Add Event"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
  },
  button: {
    width: "90%",
    position: "relative",
    top: -50,
  },
});
