import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface AddEventButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export default function AddEventButton({ onPress, style }: AddEventButtonProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.text}>ADD EVENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        position: "absolute",
        top: 510,
        padding: 20,
        width: "90%",
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
        alignItems: 'center',
    },
    text: {
        color: '#7a4c15',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 18,
    },
});
