import { GET_SUM } from "../actions/constants";

const initialState = {
    allPricesValue: 0
};

const prices = (state = initialState,action) => {
    const { type,payload } = action;
    switch(type){
        case GET_SUM:
            return{
                ...state,
                allPricesValue: payload
            }
        default: 
            return state;
    }
}

export default prices;