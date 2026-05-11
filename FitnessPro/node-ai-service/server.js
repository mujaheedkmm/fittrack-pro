
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Fitness Pro AI Service Running');
});

app.listen(5000, () => {
  console.log('AI Service Started');
});
