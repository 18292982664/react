import React from 'react';
const stock = 2;
const managCount = function managCount() {
  return '还剩----' + stock + 3 + '个'
};
const ListItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-6 themed-grid-col">{props.data.name}</div>
      <div className="col-1 themed-grid-col">￥{props.data.price}</div>
      <div className="col-2 themed-grid-col">{managCount()}</div>
    </div>
  );
}

export default ListItem;
/**
 * 函数组件要素 ------   函数组件比较轻量-渲染数据
 * 1、函数组件也加无状态组件
 * 2、函数组件没有this（组件实例）
 * 3、函数组件没有生命周期 （也可以使用生命周期）
 */
