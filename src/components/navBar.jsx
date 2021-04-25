import React, { Component } from 'react';
// const NavBar = () => {
//   return (  );
// }

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar nacbar-expand-lg navbar-light bj-light">
        <div className="container">
          <div className="wrap">
            <span className="title">导航</span>
            <span className="badge badge-pill badge-primary ml-2 mr-2" onClick={this.props.onTotal}>{this.props.onTotal()}</span>
            <button className="btn btn-outline-success my-2 my-sm-0 fr" type="button" onClick={this.props.onReset}>Reset</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
/**
 * 无状态组件没有reder方法、直接return返回够着函数、组件中不能使用this关键字、没有Component、函数结束父组件传来的参数
 *
 *
 */