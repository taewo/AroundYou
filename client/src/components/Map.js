import React from 'react';

// class Map extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       mapData : [
//         {location : '위치1', address : '주소1'},
//         {location : '위치2', address : '주소2'},
//         {location : '위치3', address : '주소3'},
//         {location : '위치4', address : '주소4'},
//         {location : '위치5', address : '주소5'}
//       ]
//     };
//   };
//
//   render(){
//     return (
//       <div>
//         <h1>MAP INFORMATION</h1>
//         <i>
//           {this.state.mapData.map((map, i) => {
//             return (<MapInfo location={map.location} address={map.address} key={i}/>);
//           })}
//         </i>
//       </div>
//     )
//   };
// };
//
// class MapInfo extends React.Component {
//   render(){
//     return(
//       <div>
//         {this.props.location} {this.props.address}
//       </div>
//     )
//   };
// };
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

// const coords = {
//   lat: 37.605216,
//   lng: 127.317245
// };

const coords = [
  {lat: 37.605216, lng: 127.317245},
  {lat: 37.605989, lng: 127.318930},
  {lat: 37.605956, lng: 127.314713},
  {lat: 37.604706, lng: 127.318383}
];

class Map extends React.Component {
  constructor(props){
      super(props);
  };

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onDragEnd(e) {};

  onClick(e) {
    console.log('onClick', e);
  };

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={coords[0].lat}
        lng={coords[0].lng}
        zoom={17}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords[0].lat}
          lng={coords[0].lng}
          draggable={true}
          content={'Hello, React :)'}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[1].lat}
          lng={coords[1].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[2].lat}
          lng={coords[2].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[3].lat}
          lng={coords[3].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  };
};

export default Map;
