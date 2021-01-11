import { ADD_TODO } from './actionTypes.js';
import { CHANGE_TAB } from './actionTypes.js';
import { CHANGE_NAV } from './actionTypes.js';
import { LIST_DATA } from './actionTypes.js';
import { GET_FILTER_DATA } from './actionTypes.js';
import { CHANGE_FILTER } from './actionTypes.js';
import { FILTER_LIST_DATA } from './actionTypes.js';
import { GET_ME } from './actionTypes.js';


import axios from 'axios';

// 输出一个addTodo方法，
// 这个方法接受一个对象，输出一个action对象
// 这个action的type是ADD_TODO, obj是传出obj
export const addTodo = (obj)=>{
    return {
        type: ADD_TODO,
        obj: obj
    }
}

export const changeTab = (obj)=>{
    return {
        type: CHANGE_TAB,
        obj: obj
    }
}

export const changeNav = (obj)=>{
    return {
        type: CHANGE_NAV,
        obj: obj
    }
}

export const getListData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: 'https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277'
    }).then((resp)=>{
        dispatch({
            type: LIST_DATA,
            obj: resp.data
        })
        // url: '/json/outletList.json'
        
    });
}

export const getFilterData = (obj)=>{
    return {
        type: GET_FILTER_DATA,
        obj: obj
    }
}


export const changeFilterAction = (obj)=>{
    return {
        type: CHANGE_FILTER,
        obj: obj
    }
}

export const getMeAction = ()=> async (dispatch)=> {
    let resp = await axios({
        method: 'get',
        url: '/api/me'
    });
    dispatch({
        type: GET_ME,
        obj: resp 
    });
}

export const getFilterListDataAction = (obj)=> async (dispatch)=> {
    let url = 'https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277';
    let resp = await axios({
        method: 'get',
        url: url
    });
    let myObj = {myData: resp.data, myNav: obj};
    dispatch({
        type: FILTER_LIST_DATA,
        obj: myObj
    });
}

