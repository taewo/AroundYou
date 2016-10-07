import React from 'react';
import Header from './Header';
import Map from './Map';
import VideoInformation from './VideoInformation';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';
import '!style!css!./../styles/style.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      mapData : [
        {location : '위치1', address : '주소1'},
        {location : '위치2', address : '주소2'},
        {location : '위치3', address : '주소3'},
        {location : '위치4', address : '주소4'},
        {location : '위치5', address : '주소5'}
      ]
    };
  };

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

// const App = () => {
//   return (
//     <div>
//       <div id="header" >
//         <div id="outer">
//           <div id="inner">
//             <Header />
//           </div>
//         </div>
//       </div>
//       <div id="map">
//         <Map />
//       </div >
//       <div id="video">
//         <div id="information">
//           <div id="outer">
//             <div id="inner">
//                 <VideoInformation title="Video Information"/>
//             </div>
//           </div>
//         </div>
//         <div id="player">
//           <div id="outer">
//             <div id="inner">
//               <VideoPlayer title="Video Player"/>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="compare"></div>
//       <div id="footer">
//         <div id="outer">
//           <div id="inner">
//               <Footer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
