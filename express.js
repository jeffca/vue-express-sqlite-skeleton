const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
};

app.use(cors(corsOptions)); // Enable CORS for all routes

// Connect to SQLite database
const db = new sqlite3.Database('db.db');

app.get('/TeamAverages', (req, res) => {
  db.all('SELECT * FROM TeamAverages', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  