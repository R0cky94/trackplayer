import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import play from '../../assests/icons/play_circle.png'

const TrackCardList = ({trackArtist, trackTitle, url, onPlayThis}) => (
    <TouchableOpacity onPress={onPlayThis}>
        <View style={styles.trackCardContainer}>
            <View style={styles.imageTitleView}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: url}}/>
                <View style={styles.cardTitleView}>
                    <Text style={styles.cardTitleStyle}>{trackTitle}</Text>
                    <Text style={styles.artistTitleStyle}>{trackArtist}</Text>
                </View>
            </View>
            <Image source={play} style={styles.cardPlayStyle}/>
        </View>
    </TouchableOpacity>
);

export default TrackCardList;
const styles = StyleSheet.create({
    trackCardContainer: {
        backgroundColor: "#080809",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: "center",
        margin:6
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    cardTitleView: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 15
    },
    cardPlayStyle: {
        alignSelf: "center"
    },
    cardTitleStyle: {
        color: "#FFFFFF",
        fontSize: 14
    },
    artistTitleStyle: {
        color: "#8a8a8a",
        fontSize: 12
    },
    imageTitleView: {
        flexDirection: "row",
        justifyContent: "flex-start"
    }
});