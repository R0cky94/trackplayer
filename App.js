import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ReduxThunk from "redux-thunk";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reducers from './src/store/reducers/index';
import Navigation from "./src/components/Navigation";


class App extends Component<Props> {
    render() {
        const store = createStore(reducers, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} style={styles.container}>
                <Navigation/>
            </Provider>
        );
    }
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    }
});
