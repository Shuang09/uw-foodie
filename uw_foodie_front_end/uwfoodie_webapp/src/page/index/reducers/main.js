import tabReducer from './tabReducer.js';
import navReducer from './navReducer.js';
import contentListReducer from './contentListReducer.js';
import meReducer from './meReducer.js';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    tabReducer: tabReducer,
    navReducer: navReducer,
    contentListReducer: contentListReducer,
    meReducer: meReducer,
    router: routerReducer
});

