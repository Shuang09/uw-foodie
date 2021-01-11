import {  COMMENT_LIST_DATA  } from './actionTypes';
import axios from 'axios';
import qs from 'component/queryString';

export const getListData = () =>async(dispatch)=>{
    let id = qs('id');
    let resp = await axios({
      method: 'get',
      url: '/comment/'+id,
    });
    dispatch({
        type: COMMENT_LIST_DATA,
        obj: resp.data
    });
}