import tabReducer from './tabReducer.js';
import commentReducer from './commentReducer.js';
import restaurantReducer from './restaurantReducer.js';
import weekMenuReducer from './weekMenuReducer.js'

import { combineReducers } from 'redux';

const reducers = combineReducers({
    tabReducer,
    commentReducer,
    restaurantReducer,
    weekMenuReducer
});

export default reducers;