import { CHANGE_NAV, GET_FILTER_DATA, CHANGE_FILTER } from '../actions/actionTypes.js';
import { NAVKEY } from '../config.js';


// inital states for navs
let navs = {};
navs[NAVKEY.building] = {
    key: NAVKEY.building,
    text: 'Where to Eat',
    obj: {}
}
navs[NAVKEY.time] = {
    key: NAVKEY.time,
    text: 'When to Eat',
    obj: {}
}
navs[NAVKEY.sort] = {
    key: NAVKEY.sort,
    text: 'Sort By',
    obj: {}
}


// inital states for time
let hour = [];
for(let i = 7; i < 23; i++){
  hour.push(i);
}
let min = [];
for(let i = 0; i < 60; i+=10){
    min.push(i);
}
let timeData = [];
for(let i=0; i<hour.length; i++){
    for(let j=0; j<min.length; j++){
        timeData.push({hour:hour[i].toString(),min:min[j]})
    }
}

// inital states for sortby
let sortData = [{content: 'name'}, {content: 'closingTime'}];


const initState = { 
    navs: navs,
    activeKey: NAVKEY.building,
    filterData: [],
    closePanel: true,
    timeData: timeData,
    sortData: sortData
};


const changeNav = (state, action)=>{
    let newActiveKey = action.obj.activeKey;
    let newClosePanel = action.obj.closePanel;
    return { ...state, activeKey: newActiveKey, closePanel: newClosePanel};
}

const getFilterData = (state, action)=>{
    // let allData = action.obj.data.data;

    // let data = action.obj.data.data;
    // console.log(data);
    return { ...state, filterData: action.obj.data.data};
}

const changeFilter = (state, action)=>{
    let _navs = JSON.parse(JSON.stringify(state.navs));
    let data = action.obj;
    if(data.key === NAVKEY.building){
        _navs[NAVKEY.building] = {
            key: data.key,
            text: data.item.building_code,
            obj: data.item
        }
    }
    if(data.key === NAVKEY.time){
        _navs[NAVKEY.time] = {
            key: data.key,
            text: data.item.hour + ":" + (data.item.min === 0 ? "00" : data.item.min),
            obj: data.item
        }
    }
    if(data.key === NAVKEY.sort){
        _navs[NAVKEY.sort] = {
            key: data.key,
            text: data.item.content,
            obj: data.item
        }
    }
    return {...state, navs: _navs}
}

// 传入action，输出新state
export default (state = initState, action)=>{
    switch(action.type){
        case CHANGE_NAV: return changeNav(state,action);
        case GET_FILTER_DATA: return getFilterData(state,action);
        case CHANGE_FILTER: return changeFilter(state,action);
        default: return state;
    }
};