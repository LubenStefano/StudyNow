import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type TopContainerProps = {
    TitlePage: string;
};

export default function TopContainer({ TitlePage }: TopContainerProps) {
    const [lineWidth, setLineWidth] = useState(0);

    return (
        <View style={styles.container}> 
            <Image source={require('../../assets/images/logoDesign.png')} style={styles.img} />
            <View style={styles.textContainer}>
                <Text style={styles.text} onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    setLineWidth(width);
                }}>{TitlePage}</Text>
                <View style={[styles.line, { width: lineWidth }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    img: {
        width: screenWidth * 0.45,
        height: screenWidth * 0.26,
        marginRight: 20,
    },
    textContainer: {
        position: 'relative',
    },
    text: {
        fontSize: 25,
        color: '#000000',
        fontFamily: 'ArchivoBlack',
        textTransform: 'uppercase',
    },
    line: {
        position: 'absolute',
        bottom: -8,
        height: 8,
        backgroundColor: '#ffde59',
        borderRadius: 4,
    },
});