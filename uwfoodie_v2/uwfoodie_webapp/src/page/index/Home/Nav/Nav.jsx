import './Nav.scss';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NAVKEY } from '../../config.js';

import { changeNav } from '../../actions/tabAction';
// addTodo方法接受一个对象，输出一个action对象
// 这个action的type是CHANGE_NAV, obj是传出obj

import { getFilterData } from '../../actions/tabAction';
import { changeFilterAction } from '../../actions/tabAction';
import { getFilterListDataAction } from '../../actions/tabAction';
import axios from 'axios';

export class Nav extends Component {
    constructor(props){
        super(props);
        this.fetchData();
    }
    handleChangeNav(key){
        let closePanel = false;
        if(this.props.activeKey === key && !this.props.closePanel){
            closePanel = true;
        }
        this.props.dispatch(
            changeNav({activeKey: key, closePanel: closePanel})
        );
        // 相当于this.props.dispatch({type: CHANGE_NAV, obj: {activeKey: key...}})
    }
    fetchData(){
        axios({
            method: 'get',
            url: 'http://rap2.taobao.org:38080/app/mock/247481/api/buildingList'
        }).then((resp)=>{
            this.props.dispatch(getFilterData(resp));
        });
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3000/api',
        //     data: {
        //         url: 'https://api.uwaterloo.ca/v2/buildings/list.json?key=faab3e1919190808a1f6ab10afadf277',
        //         params: {
        //             not_need_primary_filter: false,
        //             userid: 280770501
        //         }
        //     }
        // }).then((resp)=>{
        //     this.props.dispatch(getFilterData(resp));
        // });
    }

    renderNavs(){
        let navs = this.props.navs;
        let arr = [];
        for (let i in navs){
            let item = navs[i];
            let cls = item.key + ' item';
            if(item.key === this.props.activeKey && !this.props.closePanel){
                cls += ' current';
            }
            arr.push(
                <div className={cls} key={item.key} onClick={()=>this.handleChangeNav(item.key)}>
                    {item.text}
                </div>
            )
        }
        return arr;
    }

    revertActive(navKey, dataList){
        for(let i = 0; i < dataList.length; i++){
            dataList[i].active = false;
        }
    }

    changeDoFilter(item, navKey, dataList){
        this.revertActive(navKey, dataList);
        item.active = true;
        this.props.dispatch(changeFilterAction({item:item,key:navKey}));
        this.props.dispatch(changeNav({closePanel:true}));

        this.props.dispatch(getFilterListDataAction({
            filterData: item,
            navKey: navKey
        }));


        
        // 重载listData, 可输入item, navKey等信息
        // axios({
        //     method: 'get',
        //     url: 'https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277'
        // }).then((resp)=>{
        //     this.props.dispatch(getListData(resp.data));
        // });
        //上面的api可传入filter的parameter
    }

    renderBuilding(){
        // console.log(this.props.filterData);
        let buildingList = this.props.filterData || [];
        // let buildingList = [];
        // let buildingList = temp.slice(0,10);
        return buildingList.map((item,index)=>{
            let cls = item.active ? 'building-box-inner active' : 'building-box-inner';
            return (
                <li onClick={()=>this.changeDoFilter(item, NAVKEY.building, buildingList)} key={index} className="building-box">
                        <div className={cls}>
                            {item.building_code}
                        </div>
                </li>
            )
        });
    }

    renderTime(){
        // let myDate = new Date();
        // var mytime=myDate.toLocaleTimeString();
        // <li className="time-item">{mytime}</li>

        let timeData = this.props.timeData;
        return timeData.map((item,index)=>{
            let cls = item.active ? 'time-item active' : 'time-item';
            return(
                <li onClick={()=>this.changeDoFilter(item, NAVKEY.time, timeData)} 
                    key={index} 
                    className={cls}
                >
                    {item.hour} : {item.min === 0 ? "00" : item.min}
                </li>
            )
        });
    }

    renderSort(){
        let sortData = this.props.sortData;
        return sortData.map((item,index)=>{
            let cls = item.active ? 'sort-item active' : 'sort-item';
            return(
                <li onClick={()=>this.changeDoFilter(item, NAVKEY.sort, sortData)} 
                    key={index} 
                    className={cls}
                >
                    {item.content}
                </li>
            )
        });
    }

    renderFilter(){
        let navs = this.props.navs;
        let arr = [];
        for (let key in navs){
            let item = navs[key];
            let cls = item.key + '-panel';
            if(item.key === this.props.activeKey){
                cls += ' current';
            }
            if (item.key === NAVKEY.building){
                arr.push(
                    <ul key={item.key} className={cls+" clearfix"}>
                        {this.renderBuilding()}
                    </ul>
                )
            }
            if (item.key === NAVKEY.time){
                arr.push(
                    <ul key={item.key} className={cls}>
                        {this.renderTime()}
                    </ul>
                )
            }
            if (item.key === NAVKEY.sort){
                arr.push(
                    <ul key={item.key} className={cls}>
                        {this.renderSort()}
                    </ul>
                )
            }
        }
        return arr;
    }

    render() {
        let cls = "panel";
        if(!this.props.closePanel){
            cls+= ' show';
        }
        return (
            <div className="nav">
                <div className="nav-top">
                    {this.renderNavs()}
                </div>     
                <div className={cls}>
                    <div className="panel-inner">
                        {this.renderFilter()}
                    </div>
                </div>           
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    navs: state.navReducer.navs,
    activeKey: state.navReducer.activeKey,
    filterData: state.navReducer.filterData,
    closePanel: state.navReducer.closePanel,
    timeData: state.navReducer.timeData,
    sortData: state.navReducer.sortData
})

export default connect(mapStateToProps)(Nav)
