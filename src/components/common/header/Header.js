import React from 'react';
import styles from './HeaderStyle';
import queue from '../../../assests/icons/queue_music.png'
import arrow from '../../../assests/icons/arrow_down.png'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const Header = ({message,
                    onDownPress,
                    onQueuePress,
                    onMessagePress,
                }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Image style={styles.button}
                   source={arrow}/>
        </TouchableOpacity>
        <Text onPress={onMessagePress}
              style={styles.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onQueuePress}>
            <Image style={styles.button}
                   source={queue}/>
        </TouchableOpacity>
    </View>
);
export default Header