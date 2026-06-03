require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
