import {RECEIVED} from '../type/Type';

const INITIAL_STATE = {songList: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVED:
            return {state, songList: action.payload};
        default:
            return {...state}
    }
}