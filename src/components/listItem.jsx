import React, { Component } from 'react';
const stock = 0;
const managCount = function managCount() {
  return '还剩----' + (stock + 3).toString() + '个'
};
let html = <h1>哈哈</h1>
class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">{this.props.data.name}</div>
        <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
        <div className={"col-2 themed-grid-col" + (managCount() == 0 ? '' : '-s')} >
          {managCount() == 0 ? html : managCount()}
        </div>
      </div>
    );
  }
}

export default ListItem;