import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import styles from './AlbumImageStyle'

const AlbumImage = ({
                        url
                    }) => (
    <View style={styles.AlbumContainer}>
        <Image
            style={styles.image}
            source={{uri: url}}
        />
    </View>
);

export default AlbumImage;