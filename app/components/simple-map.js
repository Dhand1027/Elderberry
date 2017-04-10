import React, { Component } from 'react';
import { render } from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

export default class SimpleMap extends React.Component {
  constructor(){
    super();
    this.state = {
      viewLocation: {
        latitude: null,
        longitude: null
      },

      events: {
        location: {
          latitude: 42.37,
          longitude: -72.52
        },
        contents:
          "<b>Gym:</b> <div>Leg day<\div> <div>Biceps<\div> <div>Pay fees<\div>"
      }

    };
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
      rotateControl:true
    });
  }

  onClick(e){
    console.log(e);
  }

  handleSubmit(event, search){
    event.preventDefault();

    fetch('http://maps.googleapis.com/maps/api/geocode/json?address='+search.value)
    .then(response => response.json())
    .then(json => {
      this.setState({viewLocation: {
        latitude:json.results[0].geometry.location.lat,
        longitude: json.results[0].geometry.location.lng}
      });
    });
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({viewLocation: location.coords});
    });
  }

  render(){
    return (
      <div>

        <Gmaps
          width={'900'}
          height={'500'}
          lat={this.state.viewLocation.latitude}
          lng={this.state.viewLocation.longitude}
          zoom={12}
          loadingMessage={'Loading...'}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={this.state.viewLocation.latitude}
            lng={this.state.viewLocation.longitude} />
          <InfoWindow
              lat={this.state.events.location.latitude}
              lng={this.state.events.location.longitude}
              content={this.state.events.contents}/>
        </Gmaps>

      </div>
      );
  }
}
