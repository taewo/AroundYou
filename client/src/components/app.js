import React from 'react';

class App extends React.Component {
    render(){

        return (
                <div>
                  <div id = "header" >
                    <div id="outer">
                      <div id="inner">
                          <h1>Around You</h1>
                          <i>CodeStates GreenField Project</i>
                      </div>
                    </div>
                  </div>
                  <div id="map"></div >
                    <div id="video">
                      <div id="information">
                          <div id="outer">
                              <div id="inner">
                                  Video Informaion
                              </div>
                          </div>
                      </div>
                      <div id="player">
                          <div id="outer">
                              <div id="inner">
                                  Video Source
                              </div>
                          </div>
                      </div>
                  </div> < div id = "compare" > </div> < div id = "footer" > <div id="outer">
                      <div id="inner">
                          © 2016 shakedownflight
                      </div>
                  </div> < /div>
                </div >
        );
    }
}

export default App;
