import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOG_OUT
} from '../actions/constants';

//Initalized reducer
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    errors: {}
};

const auth = (state = initialState,action) => {
    //Taking payload and type from action
    const { type,payload } = action;
    switch(type){
        //What if user is loaded
        case USER_LOADED:
            //Taking token from localStorage
            localStorage.getItem('token');
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            }
        //What if user logged in
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            //Setting item to localStorage
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            }
        //What if something goes wrong
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOG_OUT:
            //Removing token from localStorage
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                loading: true,
                isAuthenticated: false,
                user: null
            }
        //Default state
        default:
            return state
    }
}

export default auth;