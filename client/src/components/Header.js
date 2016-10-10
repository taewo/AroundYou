import React from 'react';

class Header extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.headerBigTitle}</h1>
        <i>CodeStates GreenField Project</i>
      </div>
    );
  };

};

Header.defaultProps = {
  headerBigTitle : "Around You"
};

Header.propTypes = {
  headerBigTitle : React.PropTypes.string
}

export default Header;
