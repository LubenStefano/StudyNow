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
        paddingHorizontal: 20,
        paddingVertical: 50,
        width: "100%",
        alignSelf: "center",
    },
    calendar: {
    borderRadius: 30,
    height: 330,
    }
});
