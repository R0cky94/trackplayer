import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './ControlsStyle'
import shuffle from '../../../assests/icons/shuffle_white.png'
import pause from '../../../assests/icons/pause_circle.png';
import play from '../../../assests/icons/play_circle.png';
import next from '../../../assests/icons/skip_next.png';
import previous from '../../../assests/icons/skip_previous.png';
import repeat from '../../../assests/icons/repeat.png';

const Controls = ({
                      paused,
                      shuffleOn,
                      repeatOn,
                      onPressPlay,
                      onPressPause,
                      onBack,
                      onForward,
                      onPressShuffle,
                      onPressRepeat,
                      forwardDisabled,
                  }) => (
    <View style={styles.ControlContainer}>
        <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
            <Image style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
                   source={shuffle}/>
        </TouchableOpacity>
        <View style={{width: 40}} />
        <TouchableOpacity onPress={onBack}>
            <Image source={previous}/>
        </TouchableOpacity>
        <View style={{width: 20}} />
        {!paused ?
            <TouchableOpacity onPress={onPressPause}>
                <View style={styles.playButton}>
                    <Image source={pause}/>
                </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Image source={play}/>
                </View>
            </TouchableOpacity>
        }
        <View style={{width: 20}} />
        <TouchableOpacity onPress={onForward}
                          disabled={forwardDisabled}>
            <Image style={[forwardDisabled && {opacity: 0.3}]}
                   source={next}/>
        </TouchableOpacity>
        <View style={{width: 40}} />
        <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
            <Image style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
                   source={repeat}/>
        </TouchableOpacity>
    </View>
);

export default Controls;