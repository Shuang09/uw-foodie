import React from 'react';
import Enzyme from './enzyme_config';
import {Me} from '../page/index/Me/Me';



const {shallow,mount,render}=Enzyme;


describe('Me shallow', function () {
    it('Me component', function () {
        let app = shallow(<Me />)
        console.log(app);
        let div= app.find('.my');
        console.log(div);
        let address= app.find('.address').text();
        expect(address).toEqual("My Address");
        let email= app.find('.email').text();
        expect(email).toEqual("My Email");
    })
})