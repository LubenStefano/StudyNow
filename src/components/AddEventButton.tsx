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
    backgroundColor: '#fff7e6',
    borderRadius: 20,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
    padding: 12,
    position: 'absolute',
    top: 20,
    right: 20,
    width: 140,
    zIndex: 100,
  },
  button: {
    backgroundColor: '#ffbd59',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    color: '#7a4c15',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
  },
});
