import axios from 'axios';
import { GET_SUM } from './constants';
 
export const getSumPrices = () => async dispatch => {
    try {
        const res = await axios.get('https://obscure-wave-98753.herokuapp.com/api/shopItems/sum_prices');
        dispatch({
            type: GET_SUM,
            payload: res.data
        });
    } catch (error) {
        console.log(error.message);
    }
}