require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app.js').default;

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
