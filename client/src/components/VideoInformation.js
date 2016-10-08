import React from 'react';

class VideoInformation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      VideoInformationTitle : "Video Information Title"
    };
  };
  render(){
    return (
      <div>
        <h1>{this.state.VideoInformationTitle}</h1>
      </div>
    )
  };
};

export default VideoInformation;
