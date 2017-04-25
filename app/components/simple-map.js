import React from 'react';
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
      zoom:13
    });
  }

  onClick(e){
    console.log('onClick', e);
  }

  onHover(e){
    console.log('onHover', e);
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  showWindow(e) {
    console.log('showWindow', e);

    var newWindow =
      <InfoWindow
        lat={this.state.events[1].location.latitude}
        lng={this.state.events[1].location.longitude}
        content={this.state.events[1].contents}/>
    ;
    var newWindowArray = this.state.windowArray.push(newWindow);
    this.setState({windowArray: newWindowArray});
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({viewLocation: location.coords});
    });
  }

  formatContents(contents){
    console.log(contents);
    if(contents.length == 0) return "Empty";
    var str = "<b>"+contents[0]+"</b>";

    var i = 1;
    while(i<contents.length){
      str+="<div>"+contents[i]+"</div>";
      i++;
    }
    return str;
  }

  getMapEvents(){
    console.log("getMapEvents state", currState);
    var mapEvents = [];

    for(var i=0; i<currState.events.length; i++){
      var marker =
      <Marker
        lat={this.state.events[i].latitude}
        lng={this.state.events[i].longitude}
        draggable={false}
        onDragEnd={this.onDragEnd}/>;
      var info =
      <InfoWindow
        lat={this.state.events[i].location.latitude}
        lng={this.state.events[i].location.longitude}
        content={this.formatContents(this.state.events[1].contents)}/>;
      mapEvents.push([marker][info]);
    }

    return mapEvents;
  }

  render(){
    console.log('render ',this.state.events[0]);

    var info =
    <InfoWindow
      lat={this.state.events[i].location.latitude}
      lng={this.state.events[i].location.longitude}
      content={this.formatContents(this.state.events[1].contents)}/>;

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
          onDragEnd={this.onDragEnd} >

          <Marker
            lat={this.state.viewLocation.latitude}
            lng={this.state.viewLocation.longitude}
            draggable={false}
            onDragEnd={this.onDragEnd}/>

          <InfoWindow
            lat={this.state.events[0].location.latitude}
            lng={this.state.events[0].location.longitude}
            content={this.formatContents(this.state.events[0].contents)}/>
          <InfoWindow
            lat={this.state.events[1].location.latitude}
            lng={this.state.events[1].location.longitude}
            content={this.formatContents(this.state.events[1].contents)}/>


        </Gmaps>

      </div>
      );
  }
}
