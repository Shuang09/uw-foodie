import './CommentList.scss';
import {getListData} from '../../actions/commentAction.js';

import React from 'react';

import { connect } from 'react-redux';

import CommentItem from './CommentItem/CommentItem';
import qs from 'component/queryString';
const queryString = require('querystring')

import axios from 'axios';


class CommentList extends React.Component {

    constructor(props){
        super(props);
        this.props.dispatch(getListData());
        this.state = {
            outletID: Number(qs('id')),
            userName: '',
            comment: '',
            score: ''
        }
    }



    renderList(){
        let list = this.props.commentList;
        return list.map((item, index)=>{
            return <CommentItem key={index} data={item}></CommentItem>
        })
    }
    handleUserNameChange (event) {
        this.setState({
          userName: event.target.value
        })
    }
    handleScoreChange (event) {
        this.setState({
          score: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
          comment: event.target.value
        })
    }

    handleSubmit () {
        const url = '/comment';
        let data = {
            "userName": this.state.userName,
            "outletID": this.state.outletID,
            "comment": this.state.comment,
            "score": this.state.score
        }
        const config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
        axios.post(url, queryString.stringify(data), config)
        .then(res => {
            console.log(res);
        })
        this.setState({ comment: '', score: '' });
        setTimeout(()=>{
            this.props.dispatch(getListData());
        }, 500);
    }

    renderInput(){
        return (
            <div className='comment-input'>
                    <div className='comment-field'>
                        <span className='comment-field-name'>Name:</span>
                        <div className='comment-field-input'>
                            <input  value={this.state.userName}
                                    onChange={this.handleUserNameChange.bind(this)}
                                    placeholder="please enter your name"/>
                        </div>
                    </div>

                    <div className='comment-field'>
                        <span className='comment-field-name'>Score:</span>
                        <div className='comment-field-input'>
                            <input  value={this.state.score}
                                    onChange={this.handleScoreChange.bind(this)}
                                    placeholder="please enter number 1-5"/>
                        </div>
                    </div>

                    <div className='comment-field'>
                        <span className='comment-field-name'>Comment:</span>
                        <div className='comment-field-input'>
                        <textarea   value={this.state.comment}
                                    onChange={this.handleContentChange.bind(this)}
                                    placeholder="please enter your review"/>
                        </div>
                    </div>

                    <div className='comment-field-button'>
                        <button onClick={this.handleSubmit.bind(this)}>submit</button>
                    </div>
            </div>
        )
    }

    // componentDidMount() {
    //     this.timeoutId = setTimeout(() => {
    //       window.location.href = "/foo/bar"
    //     }, 3000)
    // }
      
    render(){
        return (
            <div>
                {this.renderInput()}
                <div className="comment-list">{this.renderList()}</div>
            </div>
        );
    }
}

export default connect(
    state => ({
        commentList: state.commentReducer.commentList
    })
)(CommentList);

