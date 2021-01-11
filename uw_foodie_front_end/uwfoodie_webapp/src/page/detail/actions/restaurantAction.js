import {  RESTAURANT_DATA  } from './actionTypes';
import { SET_OUTLET_NAME } from './actionTypes';
import axios from 'axios';

export const getRestaurantData = () =>async(dispatch)=>{
    let resp = await axios({
      method: 'get',
      url: 'https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277',
    });
    dispatch({
        type: RESTAURANT_DATA,
        obj: resp.data
    });
}

export const setOutletName = (name)=>{
  return {
    type: SET_OUTLET_NAME,
    obj: name
  }
}

