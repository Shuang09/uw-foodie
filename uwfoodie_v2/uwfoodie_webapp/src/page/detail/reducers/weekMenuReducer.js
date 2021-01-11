import { MENU_DATA } from '../actions/actionTypes.js';

const initState = {
    menuData: {},
};

const getData = (state, action) => {

    return {...state, menuData: action.obj.data };
}
const restaurantReducer = (state = initState, action) => {

    switch(action.type) {
        case MENU_DATA: return getData(state, action);
        default: return state;
    }
};

export default restaurantReducer;