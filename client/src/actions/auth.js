import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOG_OUT,
    REMOVE_HEART,
    ADD_HEART,
    ADD_ITEM,
    REMOVE_ITEM
} from './constants';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { getSumPrices } from './allPrices';

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('http://localhost:5000/api/users/me');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: AUTH_ERROR });
    }
}

export const registerUser = (name,last_name,username,email,password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ name,last_name,username,email,password });
        const res = await axios.post('http://localhost:5000/api/users',body,config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
}

export const loginUser = ( email,password ) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ email,password });
        const res = await axios.post('http://localhost:5000/api/auth',body,config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

export const addHeart = (image,price,priceStart,name,genderName,url,itemUrl) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        };
        const body = JSON.stringify({ image,price,priceStart,name,genderName,url,itemUrl });
        const res = await axios.put('http://localhost:5000/api/hearts',body,config);
        dispatch({
            type: ADD_HEART,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
       console.log(error.message);
    }
}

export const removeHeart = heartID => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/hearts/${heartID}`);
        dispatch({
            type: REMOVE_HEART,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        console.log(error.message);
    }
}

export const addShopItem = (name,price,priceStart,image,size) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ name,price,priceStart,image,size })
        const res = await axios.put('http://localhost:5000/api/shopItems',body,config);
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        });
        dispatch(getSumPrices());
        dispatch(loadUser());
    } catch (error) {
        console.log(error.message);
    }
}

export const removeShopItem = shopItemID => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/shopItems/${shopItemID}`);
        dispatch({
            type: REMOVE_ITEM,
            payload: res.data
        });
        dispatch(getSumPrices());
        dispatch(loadUser());
    } catch (error) {
        console.log(error.message);
    }
}

export const logOut = () => async dispatch => {
    try {
        dispatch({
            type: LOG_OUT
        });
    } catch (error) {
        console.log(error.message);
    }
}