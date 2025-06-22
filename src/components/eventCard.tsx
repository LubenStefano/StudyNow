import { StyleSheet, Text, View } from "react-native";

import { ViewStyle, StyleProp } from "react-native";

interface EventCardProps {
  title: string;
  date: Date;
  type: "upcoming" | "waiting" | "finished";
  style?: StyleProp<ViewStyle>;
}

export default function EventCard({title, date, type, style}: EventCardProps) {


  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text>{date.toLocaleDateString()}</Text>
      <Text>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ffffff",
  paddingVertical: 20,
  paddingHorizontal: 15,
  borderWidth: 1,
  borderRadius: 50,
},
title: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#333",
},
});
