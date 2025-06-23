import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, Text, View } from "react-native";

import { StyleProp, ViewStyle } from "react-native";

interface EventCardProps {
  title: string;
  date: Date;
  type: "upcoming" | "waiting" | "finished";
  style?: StyleProp<ViewStyle>;
  status?: "passed" | "failed"; // Optional status prop
}

export default function EventCard({title, date, type, style, status}: EventCardProps) {

    let label: string = "";

    const today = new Date();
    const eventDate = new Date(date);

    console.log(`EventCard: title=${title}, date=${date}, type=${type}`);
    console.log(today.toISOString(), eventDate.toISOString());
    
    

    switch (type) {
        case "upcoming":
            if (eventDate > today) {
                const diffTime = Math.abs(eventDate.getTime() - today.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                label = diffDays === 1 ? "Tomorrow!" : `${diffDays} days`;
            } else if (eventDate.toDateString() === today.toDateString()) {
                label = "Today!";
            }
            break;
        case "waiting":
            label = "waiting";
            break;
        case "finished":
            label = status === "passed" ? "passed" : "failed";
            break;
    }

    let cardStyle = { borderColor: "#000", color: "#000" }; 

    switch (label) {
        case "Today!":
        case "Tomorrow!":
            cardStyle = { borderColor: "#ff3131", color: "#ff3131" }; 
            break;
        case "2 days":
        case "3 days":
            cardStyle = { borderColor: "#ff914d", color: "#ff914d" }; 
            break;
        case "waiting":
            cardStyle = { borderColor: "#b0b0b0", color: "#b0b0b0" }; 
            break;
        case "passed":
            cardStyle = { borderColor: "#7ed957", color: "#7ed957" }; 
            break;
        case "failed":
            cardStyle = { borderColor: "#dd2a2a", color: "#dd2a2a" }; 
            break;
    }


  return (
    <View style={[styles.container, { borderColor: cardStyle.borderColor }, style]}>
      <Text style={[styles.title, { color: cardStyle.color }]}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "50%" }}>
        <Text style={{ color: cardStyle.color, fontWeight: "bold" }}>{label}</Text>
        <Entypo name="info-with-circle" size={50} color={cardStyle.color} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderRadius: 50,
        overflow: "hidden", 
    },
    title: {
        fontSize: 20,
        color: "#333",
        fontFamily: "Ubuntu",
        maxWidth: "50%",
        overflow: "hidden",
        textOverflow: "ellipsis", 
    },
});
