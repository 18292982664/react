import React, { Component } from 'react';
import style from './listItem.module.css';
import classnames from 'classnames/bind'
const cls = classnames.bind(style)
const stock = 0;
class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      managCount: this.props.data.value
    }
  };
  handleDecrease = () => {
    this.setState({
      managCount: this.state.managCount - 1
    })
  };
  handleIncrease = () => {
    this.setState({
      managCount: this.state.managCount + 1
    }, () => {
      console.log('56')
    })
  };
  render() {
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span className={cls('title')}>{this.props.data.name}</span>
        </div>
        <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
        <div className={"col-2 themed-grid-col" + (this.state.managCount ? '' : '-s')} >
          <button onClick={(e) => this.handleDecrease(this.props.data.id, e)} type="button" className="btn btn-primary"> - </button>
          <span className={cls('digital')}> {this.state.managCount}</span>
          <button onClick={() => this.handleIncrease(this.props.data.id)} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className="col-1 themed-grid-col">
          <button onClick={() => { this.props.onDelete(this.props.data.id) }} type="button" className="btn btn-sm btn-danger"> 删除 </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
/**
 * 事件处理this的注意事项
 * 1、react原生的表达式使用-函数名bind(this)
 * 2、是在constructor()中使用bind()
 * 3、实在表达式使用监听函数（推荐使用）
*/
/**
 * state
 * 可变的、组件内部使用、交互时UI会数据更新，（state是让组件控制自己的状态）
 * Props
 * 在组件内部不可变、由父组件传入、想要更改 父组件传入新的值 （Props外部对组件进行的配置）
 *
 * state 可以通过props传入到子组件
 * props传入的数据state可以初始化
 */
/** 问题？
 * 1、为什么要使用不可变数据更新state？
 * 2、setState在什么情况下是异步的，在什么情况下是同步的？
 */