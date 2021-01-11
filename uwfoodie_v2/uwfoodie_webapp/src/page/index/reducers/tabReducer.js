import { CHANGE_TAB } from '../actions/actionTypes.js';
import { TABKEY } from '../config.js';


const initState = { 
    tabs: [
        {
            name: 'Home',
            key: TABKEY.home
        },
        {
            name: 'Map',
            key: TABKEY.map
        },
        {
            name: 'Me',
            key: TABKEY.me
        }
    ],
    activeKey: TABKEY.home
};

// export default (state = initState, action)=>{
//     switch(action.type){
//         case ADD_TODO: return {num: state.num + action.obj.num};
//         default: return state;
//     }
// };

const changeTab = (state, action)=>{
    let newActiveKey = action.obj.activeKey;
    return { ...state, activeKey: newActiveKey} ;
}

export default (state = initState, action)=>{
    switch(action.type){
        case CHANGE_TAB: return changeTab(state,action);
        default: return state;
    }
};