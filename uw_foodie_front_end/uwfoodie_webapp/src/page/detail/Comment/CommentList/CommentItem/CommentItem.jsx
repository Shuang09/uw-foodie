import './CommentItem.scss';

import React from 'react';

import { connect } from 'react-redux';

import StarScore from 'component/StarScore/StarScore';
/**
 * 评论单页组件
 * @description <CommentItem />
 */
class CommentItem extends React.Component {

    renderTags(label){
        return label.map((item)=>{
            return item.content + '，'
        });
    }
    formatTime(time){
        let date = new Date(Number(time + '000'));

        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    }
 
    render(){
        let item = this.props.data;
        return (
            <div className="comment-item">
                {/* <div className="comment-time">{this.formatTime(item.comment_time)}</div> */}
                <img className="avatar" src={'https://image.flaticon.com/icons/svg/147/147140.svg'}/>
                <div className="item-right">
                    <p className="nickname">{item.userName}</p>
                    <div className="star-and-time">
                        <div className="star-content"><StarScore score={item.score}/></div>
                    </div>
                    <div className="comment-text">{item.comment}</div>
                    {/* {this.renderImgs(item)} */}
                    {/* {item.praise_food_tip ? <div className="like-info">{item.praise_food_tip}</div> : <div className="like-info">0</div>} */}
                    {/* {item.comment_labels.length ? <div className="tag-info">{this.renderTags(item.comment_labels)}</div> : null} */}
                </div>
            </div>
        );
    }
}

export default connect()(CommentItem);

