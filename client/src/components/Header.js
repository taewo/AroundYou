import React from 'react';

class Header extends React.Component{

  render(){
    return (
      <div>
        <h2>{this.props.headerBigTitle}</h2>

      </div>
    );
  };

};

Header.defaultProps = {
  headerBigTitle : "Around You"
};

export default Header;
