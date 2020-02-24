import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Added middleware to make async actions
const middleWare = [thunk];

//Intizializng state
const initialState = {};

//Initializing store
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

//Exporting store
export default store;