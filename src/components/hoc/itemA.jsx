import React, { Component } from 'react';
import WithTooltip from './withTooltip'
const ItemA = (props) => {
  return (
    < >
      <WithTooltip render={({ showToolTip, content }) => (
        <div>
          <button className="btn btn-primary">我是A</button>
          { showToolTip && (
            <span className="badge badge-pill badge-primary ml-2">
              { content}
            </span>
          )}
        </div>
      )} />
    </>
  );
}
export default ItemA;