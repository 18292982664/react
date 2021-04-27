import React from 'react';
const TableHeader = ({ columns }) => {
  return (
    <header  >
      <tr  >
        {
          columns.map(item => (
            <th key={item.path || item.key}>
              {item.label}
            </th>
          ))
        }
      </tr>
    </header>
  );
}

export default TableHeader;