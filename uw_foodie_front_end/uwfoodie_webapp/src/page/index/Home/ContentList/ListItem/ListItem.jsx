import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ListItem.scss';

export class ListItem extends Component {

    renderStar(){
        let rating = "3.6";
        let ratingArray = rating.split(".");
        let fullStar = parseInt(ratingArray[0]);
        let halfStar = parseInt(ratingArray[1]) >= 5 ? 1:0;
        let noStar = 5 - fullStar - halfStar;

        let starjsx = [];
        for(let i=0; i<fullStar; i++){
            starjsx.push(<div key={i+'full'} className="star fullstar"></div>);
        }
        if(halfStar){ 
            for(let i=0; i<halfStar; i++){
                starjsx.push(<div key={i+'half'} className="star halfstar"></div>);
            }
        }
        if(noStar){ 
            for(let i=0; i<halfStar; i++){
                starjsx.push(<div key={i+'no'} className="star nostar"></div>);
            }
        }
        return starjsx;
    }
    goDetail(data){
        window.location.href = './detail.html?id=' + data.outlet_id;
    }

    renderTime(){
        let data = this.props.itemData;
        let dayNum = new Date().getDay();
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = week[dayNum];
        if(data.opening_hours){
            let open = data.opening_hours[day.toLowerCase()].opening_hour;
            let close = data.opening_hours[day.toLowerCase()].closing_hour;
            return(
                <div className="item-time">{day} Time: {open || "Closed"}-{close || "Today"}</div>
            )
        }
    }

    render() {
        let itemData = this.props.itemData;
        return (
            <div onClick={()=>this.goDetail(itemData)} className="list-item scale-1px">
                <img className="item-img" src={itemData.logo}></img>
                <div className="item-info-content">
                    <p className="item-title">{itemData.outlet_name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-star">{this.renderStar()}</div>
                        <div className="item-rating">3.6</div>
                        <div className="item-building">{itemData.building}</div>
                    </div>
                    {this.renderTime()}
                    {/* <div className="item-time">9:00-18:00</div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => ({
    
})
export default connect(mapStateToProps)(ListItem)
