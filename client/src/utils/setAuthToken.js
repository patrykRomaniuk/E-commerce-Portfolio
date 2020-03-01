import axios from 'axios';

const setAuthToken =  token => {
    //Checking if there is token
    if(token) axios.defaults.headers.common['x-auth-token'] = token;
    //If not - delete token from x-auth-token
    else delete axios.defaults.headers.common['x-auth-token'];
}

export default setAuthToken;