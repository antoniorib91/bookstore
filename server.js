const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist/bookstore')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/bookstore','index.html'))
});

app.listen(4000, () => console.log(`Running on http://localhost:4000`));
