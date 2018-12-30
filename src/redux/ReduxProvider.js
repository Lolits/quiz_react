import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import App from '../components/App';
import { questions } from '../assets/mock-data';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            resetting: false,
            timer: 120,
            isFetching: false,
            errorFetching: false,
            questions: [...questions]
        };
        this.store = this.configureStore();
    }
    render() {
        return (
            <Provider store={this.store}>
                <div style={{ height: '100%' }}>
                    <App store={this.store} />
                </div>
            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState, applyMiddleware(thunkMiddleware));
    }
}