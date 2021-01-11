import './Map.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import L from 'leaflet'

import { getListData } from '../actions/tabAction';

export class Map extends Component {
    constructor(props){
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getListData());
    }


    componentDidMount(){

        var mymap = L.map('map-id').setView([43.471, -80.544], 15);
        var attr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
        var obj = { maxZoom: 18, attribution: attr, id: 'mapbox/streets-v11' };
        var style = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        L.tileLayer(style, obj).addTo(mymap);



        let items = this.props.items;

        // return items.map((item,index)=>{
        //     return (
        //         <ListItem key={index} itemData={item}></ListItem>
        //     )
        // });

        const newTime = (item)=>{
            let dayNum = new Date().getDay();
            let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let day = week[dayNum]; 
            let open = item.opening_hours[day.toLowerCase()].opening_hour || "07:30";
            let close = item.opening_hours[day.toLowerCase()].closing_hour || "20:00";
            return [open,close];
        }

        for(let i = 0; i<items.length; i++){
            let item = items[i];
            console.log(item);
            let latitude = item.latitude;
            let longitude = item.longitude;
            console.log(latitude);
            console.log(longitude);
            let m = L.marker([latitude, longitude]).addTo(mymap);
            let name = item.outlet_name;
            let building = item.building;
            let time = newTime(item)[0] + "-" + newTime(item)[1];
            let str = name + "<br>Building: " + building + "<br>OpenTime: " + time;
            m.on('click', ()=>{m.bindPopup(str).openPopup()});
        }


        // var marker1 = L.marker([43.472, -80.544]).addTo(mymap);
        // var marker2 = L.marker([43.470, -80.540]).addTo(mymap);

        //[越大越往上，越负越往左]
        // L.polygon([
        //     [43.4664, -80.542],
        //     [43.471, -80.538],
        //     [43.475, -80.543],
        //     [43.473, -80.549],
        //     [43.470, -80.544]
        // ]).addTo(mymap);


        // function onMarker1Mouseover() {
        //     marker1.bindPopup("<b>餐馆1名字</b>").openPopup();
        // }
        // function onMarker1Mouseout() {
        //     marker1.closePopup();
        // }
        // function onMarker1Click() {
        //     document.getElementById("details").innerHTML = "餐厅1详情: intro, menu, comments";
        // }


        // function onMarker2Mouseover() {
        //     marker2.bindPopup("<b>餐馆2名字</b>").openPopup();
        // }
        // function onMarker2Mouseout() {
        //     marker2.closePopup();
        // }
        // function onMarker2Click() {
        //     document.getElementById("details").innerHTML = "餐厅2详情: intro, menu, comments";
        // }


        // // marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
        // // function onMarkerClick(e) {
        // //     // alert("You clicked the map at " + e);
        // //     console.log(e);
        // // }
        

        // marker1.on('mouseover', onMarker1Mouseover);
        // marker1.on('mouseout', onMarker1Mouseout);
        // marker1.on('click', onMarker1Click)

        // marker2.on('mouseover', onMarker2Mouseover);
        // marker2.on('mouseout', onMarker2Mouseout);
        // marker2.on('click', onMarker2Click)
    }

    render() {
        return (
            <div id="map-id" className="map-page">
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.contentListReducer.items
})

export default connect(mapStateToProps)(Map)
