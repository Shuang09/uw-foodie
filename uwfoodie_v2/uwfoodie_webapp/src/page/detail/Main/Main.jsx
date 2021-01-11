import 'component/common.scss';
import './Main.scss';

import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';

import NavHeader from 'component/NavHeader/NavHeader';
import Comment from '../Comment/Comment';
import Restaurant from '../Restaurant/Restaurant';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderTabs(){
        let tabs = this.props.tabs;
        return tabs.map((item)=>{
            return (
                <NavLink activeClassName="active" replace={true} to={'/' + item.key} key={item.key} className="tab-item">{item.name}</NavLink>
            );
        });
    }
    render(){
        return (
            <div className="detail">
                <NavHeader title={this.props.outletName}/>
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>
                <Route path="/comment" component={Comment}/>
                <Route exact path="/restaurant" component={Restaurant}/>
            </div>
        );
    }
}

export default withRouter(connect(
    state =>({
        tabs: state.tabReducer.tabs,
        outletName: state.restaurantReducer.outletName
    })
)(Main));