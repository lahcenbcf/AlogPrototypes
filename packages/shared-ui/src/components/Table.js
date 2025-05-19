// apps/admin-app/src/components/common/Table.js
import React from 'react';
import './table.css'; // We'll add some basic styling

const Table = ({ columns, data, isLoading, error }) => {
  if (isLoading) {
    return <p className="table-message">Loading data...</p>;
  }

  if (error) {
    return <p className="table-message error">Error loading data: {error.message || 'Unknown error'}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="table-message">No data available.</p>;
  }

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={row.id || rowIndex}> {/* Prefer row.id if available */}
            {columns.map((col) => (
              <td key={`${col.key}-${row.id || rowIndex}`}>
                {/* Allow for custom rendering via a render function in column definition */}
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;