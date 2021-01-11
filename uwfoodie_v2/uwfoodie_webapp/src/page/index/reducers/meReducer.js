import { GET_ME } from '../actions/actionTypes.js';

const initState = {
    info: {
        id: null,
        name: null
    }
}

export default (state = initState, action)=>{
    switch(action.type){
        case GET_ME: return { ...state, info: action.obj };
        default: return state;
    }
};