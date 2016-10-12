import React from 'react';

class Photo extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      {this.props.photoSource.map((photo,i)=> {
        return (<iframe key={i} src={photo.src} ></iframe> )
      })}
      </div>
    )
  }
};

export default Photo;
