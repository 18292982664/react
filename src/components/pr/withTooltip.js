import React from 'react'
class WithTooltip extends React.Component {
  state = {
    showToolTip: false,
    content: ''
  }
  MoveIn = (e) => this.setState({ showToolTip: true, content: e.target.innerText })
  MoveOut = (e) => this.setState({ showToolTip: false, content: '' })
  render() {
    return (
      <div className="container ">
        <span onMouseMove={this.MoveIn} onMouseOut={this.MoveOut} >
          {this.props.render(this.state)}
        </span>
      </div>
    )
  }
}
export default WithTooltip;
/**
 * 高阶组件
 *  一个函数传入一个组件作为参数，返回一个新的组件，新的组件使用传入的组件作为子组件。
 * 作用：
 * 用于代码的复用，可以把组件之间可复用的代码逻辑抽离到高阶组件当中，
 * 新的组件和传入的组件通过props传递信息，有助于提高代码的灵活性和复用性
 *
 * 高阶组件和函数组件的区别
 * 1、高阶组件是使用函数去处理不同的组件
 * 2、函数作为组件是子组件作为逻辑父组件传入不同的内容
 */