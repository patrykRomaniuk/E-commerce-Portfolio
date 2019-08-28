import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOG_OUT
} from '../actions/constants';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    errors: {}
};

const auth = (state = initialState,action) => {
    const { type,payload } = action;
    switch(type){
        case USER_LOADED:
            localStorage.getItem('token');
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                loading: true,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}

export default auth;