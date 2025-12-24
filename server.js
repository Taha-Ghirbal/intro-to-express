const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/homepage', (req, res) => {
  res.sendFile(__dirname + '/views/homepage.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})

app.get('/test', (req, res) => {
  res.send('<p>Success!</p>');
})