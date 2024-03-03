// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.sno}>
            <td>{item.sno}</td>
            <td>{item.customer_name}</td>
            <td>{item.age}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
            <td>{item.created_at.date}</td>
            <td>{item.created_at.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

