import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const TrackListHeader = ({title}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitleStyle}>{title}</Text>
    </View>
);

export default TrackListHeader;
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#000",
        height: 60,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 8
    },
    headerTitleStyle:{
        color:"#FFFFFF",
        fontSize:16
    }
});