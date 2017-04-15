import React, { Component } from 'react';
import { render } from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

export default class SimpleMap extends React.Component {
  constructor(){
    super();
    var event0 = {
      location: {
        latitude: 42.37,
        longitude: -72.52
      },

      contents: [ "Gym:",
        "Leg day",
        "Biceps",
        "Pay fees" ]
    }

    var event1 = {
      location: {
        latitude: 42.38,
        longitude: -72.521
      },

      contents: [ "Kennel:",
        "Get lacy",
        "File complaint" ]
    }

    this.state = {
      viewLocation: {
        latitude: null,
        longitude: null
      },

      events: [event0, event1],

      windowArray: []
    };

    this.showWindow= this.showWindow.bind(this);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      panControl:true,
      zoomControl:true,
      mapTypeControl:true,
      scaleControl:true,
      streetViewControl:true,
      overviewMapControl:true,
      rotateControl:true,
      zoom:14
    });
  }

  onClick(e){
    console.log('onClick', e);
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  showWindow(e) {
    console.log('showWindow', e);

    var firstWindow =
      <InfoWindow
        lat={this.state.events[0].location.latitude}
        lng={this.state.events[0].location.longitude}
        content={this.eventToWindow(0)}/>
    ;

    var newWindow =
      <InfoWindow
        lat={this.state.events[1].location.latitude}
        lng={this.state.events[1].location.longitude}
        content={this.eventToWindow(1)}/>
    ;
    var newWindowArray = this.state.windowArray.push(newWindow);
    this.setState({windowArray: newWindowArray});
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({viewLocation: location.coords});
    });
  }

  eventToWindow(eventIndex){
    var contents = this.state.events[eventIndex].contents;
    if(contents.length == 0) return "Empty";
    var str = "<b>"+contents[0]+"</b>";

    var i = 1;
    while(i<contents.length){
      str+="<div>"+contents[i]+"</div>";
      i++;
    }
    return str;
  }

  render(){
    return (
      <div>

        <Gmaps
          width={'900'}
          height={'500'}
          lat={this.state.viewLocation.latitude}
          lng={this.state.viewLocation.longitude}
          loadingMessage={'Loading...'}
          onMapCreated={this.onMapCreated}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd}>
          <Marker
            lat={this.state.viewLocation.latitude}
            lng={this.state.viewLocation.longitude}
            draggable={true}
            onDragEnd={this.onDragEnd}
            onClick={this.showWindow}/>
          {this.state.windowArray}
        </Gmaps>

      </div>
      );
  }
}
