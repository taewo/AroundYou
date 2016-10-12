import React from 'react';

class VideoPlayer extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      {this.props.photoSource.map((photo,i)=> {
        return (<iframe width="432" height="243" className="embed-responsive-item" key={i} src={"https://www.youtube.com/embed/"+ photo.src} ></iframe> )
      })}
      </div>
    )
  }
};

export default VideoPlayer;
