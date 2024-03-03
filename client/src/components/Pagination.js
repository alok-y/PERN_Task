// Pagination.js
import React from 'react';
import './Pagination.css'; // Import pagination styles

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map((number) => (
        <button className='page-button' key={number} onClick={() => onPageChange(number)} disabled={number === currentPage}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
