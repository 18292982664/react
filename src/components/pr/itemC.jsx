import React, { Component } from 'react';
import WithTooltip from './withTooltip'
const ItemC = (props) => {
  return (
    < >
      <WithTooltip render={({ showToolTip, content }) => (
        <div>
          <button className="btn btn-primary">我是C</button>
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
export default ItemC;