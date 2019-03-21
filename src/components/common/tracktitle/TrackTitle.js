import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './TrackTitleStyle';
import add from '../../../assests/icons/add_circle_outline.png';
import more from '../../../assests/icons/more_horiz.png';

const TrackTitle = ({
                        title,
                        artist,
                        onAddPress,
                        onMorePress,
                        onTitlePress,
                        onArtistPress,
                    }) => (
    <View style={styles.TrackContainer}>
        <TouchableOpacity onPress={onAddPress}>
            <Image style={styles.button}
                   source={add}/>
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
            <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
            <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
        </View>
        <TouchableOpacity onPress={onMorePress}>
            <View style={styles.moreButton}>
                <Image style={styles.moreButtonIcon}
                       source={more}/>
            </View>
        </TouchableOpacity>
    </View>
);

export default TrackTitle;