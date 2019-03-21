import React, {Component} from 'react';
import {
    View,
    StatusBar, ScrollView,
} from 'react-native';
import styles from './PlayerStyle';
import Header from "../common/header/Header";
import AlbumImage from "../common/albumimage/AlbumImage";
import TrackTitle from "../common/tracktitle/TrackTitle";
import SliderBar from "../common/slider/Slider";
import Controls from "../common/controls/Controls";
import Video from 'react-native-video';
import TrackListHeader from "../common/TrackListHeader";
import TrackCardList from "../common/TrackCard";

let baseUrl = "http://storage.googleapis.com/automotive-media/";

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            selectedTrack: 0,
            repeatOn: false,
            shuffleOn: false,
            playerVisible: true,
            currentTrack: ''
        };
    }

    showTrackList = () => {
        this.setState({playerVisible: false})
    };
    onPlaySong = (newList, trackNumber) => {
        this.onChange(newList);
        this.setState({
            playerVisible: true,
            currentTrack: newList,
            selectedTrack: trackNumber
        })
    };

    setDuration(data) {
        this.setState({totalLength: Math.floor(data.duration)});
    }

    setTime(data) {
        this.setState({currentPosition: Math.floor(data.currentTime)});
    }

    seek(time) {
        time = Math.round(time);
        this.video && this.video.seek(time);
        this.setState({
            currentPosition: time,
            paused: false,
        });
    }

    onBack() {
        if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
            this.video && this.video.seek(0);
            this.setState({isChanging: true});
            setTimeout(() => this.setState({
                currentPosition: 0,
                paused: false,
                totalLength: 1,
                isChanging: false,
                selectedTrack: this.state.selectedTrack - 1,
            }), 0);
        } else {
            this.video.seek(0);
            this.setState({
                currentPosition: 0,
            });
        }
    }

    onForward() {
        if (this.state.selectedTrack < this.props.tracks.length - 1) {
            this.video && this.video.seek(0);
            this.setState({isChanging: true});
            setTimeout(() => this.setState({
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack + 1,
            }), 0);
        }
    }

    onChange = (newList) => {
        if (this.state.repeatOn) {
            this.setState({selectedTrack: this.state.selectedTrack});
        } else if (this.state.shuffleOn) {
            this.setState({selectedTrack: Math.floor(Math.random() * this.props.tracks.length)});
        } else if (newList) {
            this.setState({currentTrack: newList, paused: false});
            console.log("playing from list")
        } else if (this.state.selectedTrack <= this.props.tracks.length) {
            this.setState({selectedTrack: Math.floor(Math.random() * this.props.tracks.length)});
        } else {
            this.setState({selectedTrack: this.state.selectedTrack + 1});
        }
    };

    render() {
        let list = this.props.tracks;
        let track = this.props.tracks[this.state.selectedTrack];
        const video = this.state.isChanging ? null : (
            <Video
                repeat={true}
                playInBackground={true}
                audioOnly={true}
                source={{uri: baseUrl + track.source}}
                ref={(ref) => this.video = ref}
                paused={this.state.paused}
                resizeMode="cover"
                onLoad={this.setDuration.bind(this)}
                onProgress={this.setTime.bind(this)}
                onError={(error) => {
                }}
                onEnd={() => this.onChange()}
            />
        );
        return (
            <View style={styles.PlayerContainer}>
                {
                    this.state.playerVisible ?
                        <View>
                            <StatusBar hidden={true}/>
                            <Header
                                onDownPress={() => this.showTrackList()}
                                onQueuePress={() => this.showTrackList()}
                                message="Playing From Charts"/>
                            <AlbumImage url={baseUrl + track.image}/>
                            <TrackTitle title={track.title} artist={track.artist}/>
                            <SliderBar
                                onSeek={this.seek.bind(this)}
                                trackLength={this.state.totalLength}
                                onSlidingStart={() => this.setState({paused: true})}
                                currentPosition={this.state.currentPosition}/>
                            <Controls
                                onPressRepeat={() => this.setState({repeatOn: !this.state.repeatOn, shuffleOn: false})}
                                repeatOn={this.state.repeatOn}
                                shuffleOn={this.state.shuffleOn}
                                forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
                                onPressShuffle={() => this.setState({
                                    shuffleOn: !this.state.shuffleOn,
                                    repeatOn: false
                                })}
                                onPressPlay={() => this.setState({paused: false})}
                                onPressPause={() => this.setState({paused: true})}
                                onBack={this.onBack.bind(this)}
                                onForward={this.onForward.bind(this)}
                                paused={this.state.paused}/>
                        </View> :
                        <View style={styles.trackListView}>
                            <StatusBar hidden={true}/>
                            <TrackListHeader title={"TrackList"}/>
                            <ScrollView>
                                {
                                    list ?
                                        list.map((newList, index) => {
                                            return (
                                                <View key={index}>
                                                    <TrackCardList
                                                        onPlayThis={() => this.onPlaySong(newList, index)}
                                                        url={baseUrl + newList.image}
                                                        trackTitle={newList.title}
                                                        trackArtist={newList.artist}/>
                                                </View>
                                            )
                                        }) : null
                                }
                            </ScrollView>
                        </View>
                }
                {video}
            </View>
        );
    }
}


export default Player;
