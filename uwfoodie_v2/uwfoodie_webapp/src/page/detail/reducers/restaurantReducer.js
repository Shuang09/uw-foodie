import { RESTAURANT_DATA, SET_OUTLET_NAME } from '../actions/actionTypes.js';

const initState = {
    resData: {},
    outletName: ''
};

const getData = (state, action) => {

    return {...state, resData: action.obj.data };
}
const restaurantReducer = (state = initState, action) => {

    switch(action.type) {
        case RESTAURANT_DATA: return getData(state, action);
        case SET_OUTLET_NAME: return {...state, outletName: action.obj };
        default: return state;
    }
};

export default restaurantReducer;