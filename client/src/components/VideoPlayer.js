import React from 'react';

class VideoPlayer extends React.Component{

  render(){
    return (
      <div>
        <iframe width="432" height="243" className="embed-responsive-item" src={"https://www.youtube.com/embed/"+this.props.markerInfo.src} allowFullScreen></iframe>
      </div>
    )
  };

};

export default VideoPlayer;
