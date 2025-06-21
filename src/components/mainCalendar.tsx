import { View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { StyleSheet } from "react-native";
export default function MainCalendar() {
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#ffbd59',
        width: "90%",
        position: "absolute" as const,
        top: 110,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: "center",
    },
    calendar: {
    borderRadius: 30,
    height: 330,
    }
});
