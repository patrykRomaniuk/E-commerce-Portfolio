import { GET_SUM } from "../actions/constants";

//Initialized reducer
const initialState = {
    allPricesValue: 0
};

const prices = (state = initialState,action) => {
    //Get type and payload from action
    const { type,payload } = action;
    switch(type){
        //Got sum
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