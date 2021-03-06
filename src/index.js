import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// SAGA AXIOS REQUESTS
// Gets movies from server
function* getMovies(){
    console.log('in getMovies');
    try {
        let response = yield axios.get('/api')
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('Error in get from /api', error);
    }
}

function* getInfo(action){
    console.log('in getInfo', action);
    try {
        let response = yield axios.get(`/api/${action.payload.id}`)
        console.log(response.data)
        yield put({ type: 'SET_GENRES', payload: response.data})
    } catch (error) {
        console.log('Error in get from /api/:id', error);
    }
}

function* updateInfo(action){
    console.log('in updateInfo');
    try {
        yield axios.put(`/api/${action.payload.id}`, action.payload)
        this.props.dispatch({ type: 'GET_MOVIES' })
    } catch (error) {
        console.log(`Error in put from /api/${action.payload.id}`, error);
    }
}


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_INFO', getInfo);
    yield takeEvery('UPDATE_INFO', updateInfo);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
