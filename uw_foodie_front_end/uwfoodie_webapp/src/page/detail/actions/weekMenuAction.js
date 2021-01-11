import {  MENU_DATA  } from './actionTypes';
import axios from 'axios';


export const getMenuData = () =>async(dispatch)=>{
    let resp = await axios({
      method: 'get',
      url: 'https://api.uwaterloo.ca/v2/foodservices/2013/12/menu.json?key=faab3e1919190808a1f6ab10afadf277',
    });

    dispatch({
        type: MENU_DATA,
        obj: resp.data
    });
}