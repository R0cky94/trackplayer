import {combineReducers} from 'redux';
import ReducerListSongs from "./ReducerListSongs";

export default combineReducers({
    List:ReducerListSongs
})