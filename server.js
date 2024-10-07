const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes (you'll add these later)

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err.message);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});