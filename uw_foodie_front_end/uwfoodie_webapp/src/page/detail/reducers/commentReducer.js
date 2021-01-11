import { COMMENT_LIST_DATA } from '../actions/actionTypes.js';

const initState = {
    commentList: []
};

const getListData = (state, action) => {
    let list = action.obj.detail;
    return {...state, commentList: list}
}


const commentReducer = (state = initState, action) => {
    switch(action.type) {
        case COMMENT_LIST_DATA: return getListData(state, action);
        default: return state;
    }
};

export default commentReducer;