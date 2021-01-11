import React from 'react';
import Enzyme from './enzyme_config';
import {Home} from '../page/index/Home/Home';


const {shallow,mount,render}=Enzyme;


describe('Home shallow', function () {
    it('Home component', function () {
        let home = shallow(<Home />)
        let header = home.find('Header');
        // console.log(header.length);
        // let nav = home.find('Nav');
        // let contentList = home.find('ContentList');
        expect(header.length).toEqual(1);
        // expect(nav.length).toEqual(1);
        // expect(contentList.length).toEqual(1);
    })
})