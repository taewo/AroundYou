import React from 'react';

class VideoInformation extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.markerInfo.title}</h1>
        <i>{this.props.markerInfo.introduce}</i>
      </div>
    )
  };

};

export default VideoInformation;
