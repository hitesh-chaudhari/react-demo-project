import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunk, createLogger()];

export default createStore(reducer, applyMiddleware(...middleware));
