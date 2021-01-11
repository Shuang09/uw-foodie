import './NavHeader.scss';
import React from 'react';

class NavHeader extends React.Component {
    goBack(){
        window.history.back();
    }
    render(){
        return (
            <div className="nav">
                <div onClick={()=>this.goBack()} className="back-icon"></div>
                <h4 className="title">{this.props.title}</h4>
            </div>
        );
    }
}

export default NavHeader;