import React from 'react';
const TableHeader = ({ columns, onRatingOrder }) => {
  return (
    <thead>
      <tr>
        {
          columns.map(item => (
            <th key={item.path || item.key} onClick={() => onRatingOrder(item)}>
              {item.label}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}

export default TableHeader;