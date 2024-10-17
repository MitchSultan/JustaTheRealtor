const express = require('express');
const { sql } = require('@vercel/postgres');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes (you'll add these later)

// Example route using Vercel Postgres
app.get('/example', async (req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.json({ currentTime: result[0].now });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server (for local development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, (err) => {
    if (err) {
      console.error('Error starting server:', err.message);
      process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
  });
}

// For Vercel deployment
module.exports = app;
