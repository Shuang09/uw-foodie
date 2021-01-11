import './Header.scss';
import React, { Component } from 'react';

export class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="header">
                <img className="banner-img" src="http://s2.ax1x.com/2020/03/06/3bbFPJ.jpg"></img>
            </div>
        )
    }
}

export default Header;
