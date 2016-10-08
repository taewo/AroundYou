import React from 'react';

class Header extends React.Component{
  // state 기본 값 설정
  constructor(props){
    super(props);
    this.state = {
      headerSmallTitle : "CodeStates click here"
    };
  };

  // state 값 변경
  updateHeaderSmallTitle(text){
    this.setState({
      headerSmallTitle : "CodeStates GreenField Project"
    });
  };

  render(){
    return (
      <div>
        <h1>{this.props.headerBigTitle}</h1>
        <i onClick={this.updateHeaderSmallTitle.bind(this)}>{this.state.headerSmallTitle}</i>
      </div>
    );
  };
};

// 기본 값 설정하기
Header.defaultProps = {
  headerBigTitle : "Around You"
};

// Type 검사하기
Header.propTypes = {
  headerBigTitle : React.PropTypes.string
}

export default Header;
