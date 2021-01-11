import './Restaurant.scss';

import React from 'react';

import { connect } from 'react-redux';

import { getRestaurantData, setOutletName } from '../actions/restaurantAction';
import { getMenuData } from '../actions/weekMenuAction';
import qs from 'component/queryString';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getRestaurantData());
        this.props.dispatch(getMenuData());
    }

    renderMenu(){
        let id = Number(qs('id'));
        let menuOutlets = this.props.menuData.outlets;
        console.log(menuOutlets);
        if(menuOutlets){
            let outlet = menuOutlets.filter(function (outlet) {
                return outlet.outlet_id === id;
            });
            if(outlet.length != 0){
                let menu = outlet[0].menu;
                return (
                    menu.map(function (day,index){
                        return (
                            <div key={index} >
                                <div className="menu-section">
                                <div className="menu-day">{day.date} | {day.day}</div>
                                    <p>Lunch:</p>
                                    {day.meals.lunch.map((product, index)=>{
                                        return(
                                            <p key={index}>{product.product_name}</p>
                                        )
                                    })}
                                    <br/>
                                    <p>Dinner:</p>
                                    {day.meals.dinner.map((product, index)=>{
                                        return(
                                            <p key={index}>{product.product_name || 'None'}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                )
            }else{
                return(<div className="menu-day"><br />No Weekly Menu Now</div>)
            }           
        }
    }

    renderTime(data){
        console.log(data);
        let dayNum = new Date().getDay();
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = week[dayNum];
        if(data.opening_hours){
            let open = data.opening_hours[day.toLowerCase()].opening_hour;
            let close = data.opening_hours[day.toLowerCase()].closing_hour;
            return(
                <p className="restaurant-send-time res-section">{day} Time: {open || 'Closed'}-{close || 'Today'}</p>
            )
        }
    }

    render(){
        let resData = this.props.resData;
        let id = Number(qs('id'));
        if(Object.keys(resData).length != 0){
            let outlet = resData.filter(function (item) {
                return item.outlet_id === id;
            });
            if(outlet.length != 0){
                let data = outlet[0];
                this.props.dispatch(setOutletName(data.outlet_name));
                return (
                    <div className="restaurant-content">
                        <div className="restaurant-basic">
                            {this.renderTime(data)}
                            <div className="restaurant-addr res-section">
                                <div className="addr-wrap">
                                    <div className="addr-name">Address: {data.building}</div>
                                </div>
                            </div>
                        </div>

                        <div className="restaurant-basic">
                            <div className="restaurant-info res-section">
                            <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                            </div>

                        </div>
                        <div className="restaurant-basic">
                            <h1 className="menu-title">Weekly Menu</h1>
                            {this.renderMenu()}
                        </div>
                    </div>
                )
            }
        }else{
            return "";
        }
    }
}

export default connect(
    state =>({
        resData: state.restaurantReducer.resData,
        menuData: state.weekMenuReducer.menuData,
        outletName: state.restaurantReducer.outletName
    })
)(Restaurant);