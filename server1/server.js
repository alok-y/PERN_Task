// server.js
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const pool = require("./db");



const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


// API endpoint to fetch data with pagination, search, and sorting
app.get('/api/data', async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // Search parameter
    const search = req.query.search ? `%${req.query.search}%` : null;

    // Sorting parameters
    const sortBy = req.query.sortBy || 'created_at';
    const sortOrder = req.query.sortOrder && req.query.sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    let query = 'SELECT sno, customer_name, age, phone, location, created_at FROM customers';
    let countQuery = 'SELECT COUNT(*) AS totalCount FROM customers';

    const queryParams = [];

    if (search) {
      query += ' WHERE customer_name ILIKE $1 OR location ILIKE $2';
      countQuery += ' WHERE customer_name ILIKE $1 OR location ILIKE $2';
      queryParams.push(search, search);
    }

    if (sortBy === 'created_at') {
      query += ` ORDER BY created_at ${sortOrder}`;
    } else if (sortBy === 'time') {
      // Sort by the time component of created_at
      query += ` ORDER BY EXTRACT(HOUR FROM created_at), EXTRACT(MINUTE FROM created_at), EXTRACT(SECOND FROM created_at) ${sortOrder}`;
    } else if (sortBy === 'Date') {
      query += ` ORDER BY DATE(created_at) ${sortOrder}`;
    } else {
      query += ` ORDER BY ${sortBy} ${sortOrder}`;
    }



    query += ` LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;



    queryParams.push(limit, offset);

    // Fetch data
    const dataResult = await pool.query(query, queryParams);
    const totalPages = 3;
    // console.log(totalPages);

    res.status(200).json({ data: dataResult.rows, totalPages, currentPage: page });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});