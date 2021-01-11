import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import ContentList from './ContentList/ContentList.jsx';

export class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <ContentList />
            </div>
        )
    }
}

export default Home
