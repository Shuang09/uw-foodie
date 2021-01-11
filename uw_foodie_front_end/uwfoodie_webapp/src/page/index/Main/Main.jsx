import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';

import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home.jsx';
import Map from '../Map/Map.jsx';
import Me from '../Me/Me.jsx';

import './Main.scss';


export class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="main">
                <Route exact path="/home" component={Home}/>
                <Route path="/map" component={Map}/>
                <Route path="/me" component={Me}/>
                <BottomBar />
            </div>
        )
    }
}

// const mapStateToProps = () => ({
//     // num: state.tabReducer.num
// })

export default withRouter(connect()(Main));



