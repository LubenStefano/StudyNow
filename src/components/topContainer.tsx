import { StyleSheet, Text, View } from 'react-native';

export default function TopContainer() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>StudyNow</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffbd59',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
        fontFamily: 'Arista',

    }
});