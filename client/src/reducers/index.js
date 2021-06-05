import { combineReducers } from 'redux';
import auth from './authReducer.js';
import prices from './pricesReducer';

export default combineReducers({
    auth,
    prices
});