import AddEventButton from "@/src/components/CustomButton";
import MainCalendar from "@/src/components/mainCalendar";
import  {StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
    <MainCalendar />
    <AddEventButton
      onPress={() => {
        console.log("Add Event Button Pressed");
      }} />
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
});