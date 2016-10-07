import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <div>
        {this.props.title}
      </div>
    )
  };
};

export default Footer;

// const Footer = () => {
//   return (
//     <div>
//       © 2016 shakedownflight
//     </div>
//   );
// };
