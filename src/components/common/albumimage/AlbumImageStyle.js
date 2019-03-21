import {StyleSheet, Dimensions} from 'react-native';

// const {width} = Dimensions.get('window');
const width = Dimensions.get('window').width;
const imageSize = width - 70;

const styles = StyleSheet.create({
    AlbumContainer: {
        backgroundColor:"#71717f"
    },
    image: {
        width: width,
        height: imageSize,
    },
});
export default styles