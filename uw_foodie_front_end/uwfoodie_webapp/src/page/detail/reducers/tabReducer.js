// import { CHANGE_TAB } from '../actions/actionTypes.js';
import { TABKEY } from '../config.js';
const initState = {
    tabs: [
        // {
        //     name: '点菜',
        //     key: TABKEY.menu
        // },
        {
            name: 'details',
            key: TABKEY.restaurant
        },
        {
            name: 'comment',
            key: TABKEY.comment
        }
    ],
    // activeKey: TABKEY.my
};


const tabReducer = (state = initState, action) => {

    switch(action.type) {
        // case CHANGE_TAB: return changeTab(state, action);
        default: return state;
    }
};

export default tabReducer;