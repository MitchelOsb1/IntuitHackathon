import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pointer from './Pointer.js'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

console.log(process.env);
class Map extends Component {
  constructor() {
      super()
    this.state = {
        center: {
            lat: 37.497001,
            lng: -122.084987
        },
        work: {
            lat: 37.42911,
            lng: -122.09739
        },
        home: {
            lat: 37.548590,
            lng: -122.058590
        },
        zoom: 11
    }
  }

  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ? }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        <Pointer {...this.state.work}/>
          <AnyReactComponent
            lat={37.42911}
            lng={-122.09739}
          />
        <Pointer {...this.state.home}/>
          <AnyReactComponent
            lat={37.5486997}
            lng={-122.058590}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
