// App.js
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import './App.css'; // Import main styles

const App = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data?page=${currentPage}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      // console.log(responseData);
      // console.log(responseData.data);
      setData(responseData.data);
      setTotalPages(responseData.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/data?page=${currentPage}&search=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData.data);
      setTotalPages(responseData.totalPages);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = async (sortBy) => {
    try {
      const response = await fetch(`http://localhost:5000/api/data?page=${currentPage}&sortBy=${sortBy}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error('Error sorting data:', error);
    }
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      <Sort onSort={handleSort} />
      <Table data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
