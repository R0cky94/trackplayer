import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    slider: {
        marginTop: -12,
    },
    SliderContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        textAlign:'center',
    }
});
export  default styles