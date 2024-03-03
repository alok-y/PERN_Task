// Search.js
import React, { useState } from 'react';
import './Search.css'; // Import search styles

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" placeholder="Search by name or location" value={query} onChange={handleChange} />
        <button className="search-button" type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
