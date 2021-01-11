import './Me.scss';
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import getMeAction from '../actions/tabAction.js'
import axios from 'axios';

export class Me extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: {}
        }
        this.fetchData();
    }

    async fetchData(){
        // this.props.dispatch(getMeAction());
        let resp = await axios({
            method: 'get',
            url: '/api/me'
        });
        console.log(resp);
        this.setState({info:resp.data});
        // dispatch({
        //     type: GET_ME,
        //     obj: resp 
        // });
    }

    render() {
        return (
            <div className="my">
                <div className="header">
                    <img className="avatar" src="http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg"/>
        <p className="nickname">My name &gt; {this.state.info.name}</p>
                </div>
                <div className="content">
                    <ul className="items">
                        <li className="address">
                            My Address
                        </li>
                        <li className="email">
                            My Email
                        </li>
                    </ul>
                    <ul className="items">
                        <li className="question">
                            My Comments
                        </li>
                    </ul>
                    <p className="tel">University of Waterloo</p>
                    <p className="time">ECE</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    info: state.meReducer.info
})

export default connect(mapStateToProps)(Me)
