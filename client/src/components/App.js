import React from 'react';
import Header from './Header';
import Map from './Map';
import VideoInformation from './VideoInformation';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';
import '!style!css!./../styles/style.css';
import MapData from './../../data/MapData';

console.log(MapData.mapData);

for(var key in MapData.mapData){
  console.log(key);
}

class App extends React.Component{

  render(){
    return (
      <div>
        <div id="header" >
          <div id="outer">
            <div id="inner">
              <Header />
            </div>
          </div>
        </div>
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map />
            </div>
          </div>
        </div >
        <div id="video">
          <div id="information">
            <div id="outer">
              <div id="inner">
                  <VideoInformation />
              </div>
            </div>
          </div>
          <div id="player">
            <div id="outer">
              <div id="inner">
                <VideoPlayer />
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer title={this.props.footerTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default App;
