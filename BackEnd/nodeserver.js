const express = require('express');
const app = express();

app.use(express.static('FrontEnd'));

app.listen(5503, () => {
  console.log('Server is running on port 5503');
});