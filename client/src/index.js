import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Map from './components/Map';
import VideoInformation from './components/VideoInformation';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import '!style!css!./styles/style.css';

const App = () => {
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
        <Map />
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
              <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('wrap');
ReactDOM.render(<App />, rootElement);
