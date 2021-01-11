import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ContentList.scss';
import { getListData } from '../../actions/tabAction';
// import axios from 'axios';

import ListItem from './ListItem/ListItem.jsx';


export class ContentList extends Component {
    constructor(props){
        super(props);
        this.fetchData();
    }


    fetchData(){
        // axios({
        //     method: 'get',
        //     url: 'https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277'
        // }).then((resp)=>{
        //     this.props.dispatch(getListData(resp.data));
        // });
        this.props.dispatch(getListData());
    }

    renderItems(){
        let items = this.props.items;
        return items.map((item,index)=>{
            return (
                <ListItem key={index} itemData={item}></ListItem>
            )
        });
    }

    render() {
        return (
            <div className="content-list">
                {this.renderItems()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.contentListReducer.items
})

export default connect(mapStateToProps)(ContentList)
