
     /* <tbody>
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
      </tbody> */
   // Table.js
import React from 'react';
import './Table.css'; // Import table styles

const Table = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>SNO</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.sno}</td>
            <td>{item.customer_name}</td>
            <td>{item.age}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
            <td>{item.created_at.split('T')[0]}</td>
            <td>{item.created_at.split('T')[1].split('.')[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
