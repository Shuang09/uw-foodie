import { LIST_DATA } from '../actions/actionTypes';
import { FILTER_LIST_DATA } from '../actions/actionTypes';
import { NAVKEY } from '../config.js';

const initState = {
    items: [],
    code: null,
    hour: null,
    min: null,
    content: null
};

const getFilterListData = (state, action)=>{
    let obj = action.obj.myNav;
    let data = action.obj.myData.data;
    let newCode = state.code;
    let newHour = state.hour;
    let newMin = state.min;
    let newContent = state.content;

    if(obj.navKey === NAVKEY.building){
        newCode = obj.filterData.building_code;
    }else if(obj.navKey === NAVKEY.time){
        newHour = obj.filterData.hour;
        newMin = obj.filterData.min; 
    }else if(obj.navKey === NAVKEY.sort){
        newContent = obj.filterData.content;
    }
    
    const newTime = (item)=>{
        let dayNum = new Date().getDay();
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = week[dayNum]; 
        let open = item.opening_hours[day.toLowerCase()].opening_hour || "07:30";
        let close = item.opening_hours[day.toLowerCase()].closing_hour || "20:00";
        let openHour = open.split(":")[0];
        let openMin = open.split(":")[1];
        let closeHour = close.split(":")[0];
        let closeMin = close.split(":")[1];
        let numOpen = Number(openHour+openMin);
        let numClose = Number(closeHour+closeMin);
        return [numOpen,numClose];
    }



    let datas = data.filter((item)=>{
        let now = newHour*100+newMin; 
        let numOpen = newTime(item)[0];
        let numClose = newTime(item)[1];
        return (newCode === null?item:item.building === newCode) && (newHour === null?item:now>numOpen&&now<numClose);
    });


    if(newContent != null){
        if(newContent == "name"){
            datas = datas.sort((a,b)=>{
                const nameA = a.outlet_name.toUpperCase();
                const nameB = b.outlet_name.toUpperCase();
                console.log(nameA);
                let comparison = 0;
                if (nameA > nameB) {
                comparison = 1;
                } else if (nameA < nameB) {
                comparison = -1;
                }
                return comparison;
            });
        }else if(newContent == "closingTime"){
            datas = datas.sort((a,b)=>{
                const timeA = newTime(a)[1];
                const timeB = newTime(b)[1];
                console.log(timeA);
                let comparison = 0;
                if (timeA > timeB) {
                comparison = -1;
                } else if (timeA < timeB) {
                comparison = 1;
                }
                return comparison;
            });
        }
    }

    return {...state, 
        items: datas, 
        code: newCode,
        hour: newHour,
        min: newMin,
        content: newContent
    };

}

export default (state = initState, action)=>{
    switch(action.type){
        case LIST_DATA: return {...state, items: action.obj.data}; // items: action.obj.data.primary_filter
        case FILTER_LIST_DATA: return getFilterListData(state, action); // items: action.obj.data.primary_filter
        default: return state;
    }
};
