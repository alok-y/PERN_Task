// Sort.js
import React from 'react';
import './Sort.css'; // Import sort styles

const Sort = ({ onSort }) => {
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    onSort(sortBy);
  };

  return (
    <select className="sort-dropdown" onChange={handleSortChange}>
      <option value="created_at">Sort by Date</option>
      <option value="time">Sort by Time</option>
    </select>
  );
};

export default Sort;
