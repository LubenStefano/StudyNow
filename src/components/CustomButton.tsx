import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface AddEventButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export default function CustomButton({ onPress, style}: AddEventButtonProps) {
  return (
    <View style={[styles.container , style]}>
      <TouchableOpacity style={styles.button } onPress={onPress} >
        <Text style={styles.text}>Add Event </Text>
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
        padding: 20,
        marginHorizontal: 20,
        width: "100%",
        backgroundColor: "#000000",
        borderRadius: 30,
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 18,
    },
});
