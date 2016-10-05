import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 37.494826,
  lng: 127.030685
};

const Map = React.createClass({
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },
  onDragEnd(e) {
    console.log('onDragEnd', e);
  },
  onCloseClick() {
    console.log('onCloseClick');
  },
  onClick(e) {
    alert('클릭 시 .. 정보가 올라올 수 있도록 구성해 주세요.');
    console.log('onClick', e);
  },
  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }
});

export default Map;
