import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onRequestTrackList} from '../store/action/ActionListSongs'
import Player from "./player/Player";


class Navigation extends Component {
    componentWillMount() {
        this.props.onRequestTrackList()
    }

    render() {
        let TRACKS = this.props.list;
        return (
            TRACKS ? <Player tracks={TRACKS}/> : null
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.List.songList,
    }
}

export default connect(mapStateToProps, {onRequestTrackList})(Navigation);
