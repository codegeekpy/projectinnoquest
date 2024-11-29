const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample data for demonstration purposes
let loginCount = 0;


app.get('/logins', (req, res) => {
  res.json({ loginCount });
});


app.post('/logins', (req, res) => {
  loginCount++;
  res.json({ loginCount });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
