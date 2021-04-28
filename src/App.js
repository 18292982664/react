import React, { PureComponent } from 'react';
import './App.css';
import ListPage from './components/listPage';
import AavBar from './components/navBar';
import ItemA from './components/hoc/itemA'
import ItemC from './components/pr/itemC'
import Movies from './components/movies'
import { Route } from 'react-router-dom';
// import ListItem from './components/listItemFun';


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [
        {
          id: 1,
          name: "超级无敌高清笔记本",
          price: 3600,
          value: 1,
          stock: 20
        }, {
          id: 2,
          name: "小米手机",
          price: 4800,
          value: 2,
          stock: 20
        }, {
          id: 3,
          name: "华硕电脑",
          price: 4600,
          value: 3,
          stock: 20
        }, {
          id: 4,
          name: "华为手机",
          price: 8600,
          value: 4,
          stock: 60
        }
      ]
    }
  }

  handleDelete = (id) => {
    let dataList = this.state.dataList.filter(item => item.id != id);
    this.setState({ dataList })
  };
  handleAmount = () => {
    const _list = this.state.dataList.concat([]);
    _list.pop();
    this.setState({ dataList: _list })
  }
  //重置数据
  handleReset = () => {
    const _list = this.state.dataList.map(item => {
      console.log(item)
      const _item = { ...item };
      _item.value = 0
      return _item
    })
    this.setState({ dataList: _list })
  }
  onTotal = () => {
    var num = 0
    this.state.dataList.map(v => {
      num += v.value
    })
    if (num != 0) return num;
  }
  handleDecrease = (id) => {
    console.log('加', id)
    let list = this.state.dataList.map(v => {
      if (v.id == id) {
        let _item = { ...v };
        console.log(_item)
        _item.value++
        return _item
      } else {
        return v
      }
    })
    this.setState({ dataList: list })
  };
  handleIncrease = (id) => {
    console.log('减', id)
    let list = this.state.dataList.map(v => {
      if (v.id == id) {
        let _item = { ...v };
        console.log(_item)
        _item.value--
        if (_item.value < 0) _item.value = 0;
        return _item
      } else {
        return v
      }
    })
    this.setState({ dataList: list })
  };
  render() {
    return (
      <>
        <div className="container">
          <Route path="/movies" component={Movies} />
        </div>

        <AavBar
          onReset={this.handleReset}
          onTotal={this.onTotal}
        />
        <ListPage
          data={this.state.dataList}
          handleDecrease={this.handleDecrease}
          handleIncrease={this.handleIncrease}
          handleDelete={this.handleDelete}
        />
        <ItemA id={1} />
        <ItemC />
        <div className="container ">---------------分-------------------割--------------------线--------------</div>
        <Movies />

      </>
    );
  }
}

export default App;
/**
 * props 概念
 * 1、父组件传弟子组件
 * 2、子组件不可更改父组件传过来的值
 * 3、如果更改，需要在父组件从新传入
 * 4、不可以使用this关键字获取数据
 * 列表渲染
 * 1、列表直接map渲染返回
 * 条件渲染
 * 1、三目运算符
 * 2、函数判断
 * 3、&& 运算符
 */
/**
 * 阻止reder的不必要渲染
 * 1、shouldComponentUpdate(nextProps,nextState){
 *     判断当前的
 *    if(nextProps.count === this.state.count) reture false
 *     return true;
 * }
 * 2、component 改为 Purecomponent
 *   类拓展调用    （推荐使用）
 */