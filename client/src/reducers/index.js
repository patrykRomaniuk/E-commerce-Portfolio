import { combineReducers } from 'redux';
import auth from './authReducer.js';
import prices from './pricesReducer';

//Combining reducers
export default combineReducers({
    auth,
    prices
});