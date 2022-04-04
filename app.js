const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Scaling Demo App</h1> <h4>Message: Successful</h4> ');
})

app.listen(port, () => {
  console.log(`The app is running and listening to port ${port}`);
})