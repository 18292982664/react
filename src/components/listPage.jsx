import React, { PureComponent } from 'react';
import ListItem from './listItem';
class ListPage extends PureComponent {
  car() {
    return this.props.data.map((v) => {
      return <ListItem
        data={v}
        key={v.id}
        onDelete={this.props.handleDelete}
        onIncrease={this.props.handleIncrease}
        onDecrease={this.props.handleDecrease} />
    })
  };
  render() {
    return (
      <div className="container">
        <button type="button btn btn-primary" onClick={this.props.handleAmount}>减一个</button>
        <button type="button btn btn-primary" onClick={this.props.handleReset}>重置</button>
        {this.props.data.length === 0 && <h1 className="caption">购物车是空的</h1>}
        {
          this.car()
        }
      </div>
    );
  }
}

export default ListPage;