import {RECEIVED} from '../type/Type';
import {List} from "../../components/List";

export const onRequestTrackList = () => {
    return {
        type: RECEIVED,
        payload: List
    };
};