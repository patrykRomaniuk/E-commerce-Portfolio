import axios from 'axios';
import { GET_SUM } from './constants';

//Getting sum from prices
export const getSumPrices = () => async dispatch => {
    try {
        //Request to backend
        const res = await axios.get('https://obscure-wave-98753.herokuapp.com/api/shopItems/sum_prices');
        //Dispatching action
        dispatch({
            type: GET_SUM,
            payload: res.data
        });
    } catch (error) {
        console.log(error.message);
    }
}